// Build-time feed aggregator for the Research & News page.
// Pulls recent items from trusted, impartial sources across the
// surveillance / digital-rights / information-security field, merges
// them newest-first, and hands them to research.njk.
//
// Fetches are cached (eleventy-fetch) and each source is wrapped in
// try/catch, so one slow or unreachable feed never breaks the build.
// To add or remove a source, edit the FEEDS list below.

const EleventyFetch = require("@11ty/eleventy-fetch");
const Parser = require("rss-parser");

const parser = new Parser({ timeout: 15000 });

const FEEDS = [
  { name: "Citizen Lab",            url: "https://citizenlab.ca/feed/" },
  { name: "Amnesty Security Lab",   url: "https://securitylab.amnesty.org/feed/" },
  { name: "EFF Deeplinks",          url: "https://www.eff.org/rss/updates.xml" },
  { name: "Access Now",             url: "https://www.accessnow.org/feed/" },
  { name: "OONI",                   url: "https://ooni.org/blog/index.xml" },
  { name: "Tor Project",            url: "https://blog.torproject.org/rss.xml" },
  { name: "404 Media — Surveillance", url: "https://www.404media.co/tag/surveillance/rss/" },
];

const MAX_ITEMS = 24;

module.exports = async function () {
  const collected = [];
  const liveSources = [];

  // Fetch every source in parallel so total time tracks the slowest
  // feed rather than the sum of all of them.
  await Promise.all(
    FEEDS.map(async (f) => {
      try {
        const xml = await EleventyFetch(f.url, {
          duration: "1h",
          type: "text",
          fetchOptions: {
            headers: {
              "User-Agent": "IDOD-ResearchFeed/1.0 (+https://indefenseofdefenders.org)",
            },
            // Hard timeout so a slow or hanging feed can never stall the build.
            signal: AbortSignal.timeout(12000),
          },
        });
        const parsed = await parser.parseString(xml);
        let added = 0;
        for (const item of parsed.items || []) {
          const raw = item.isoDate || item.pubDate;
          if (!raw || !item.link || !item.title) continue;
          const link = item.link.trim();
          // Defense-in-depth: only accept http(s) links, so a compromised
          // feed cannot inject javascript:/data: URLs into an href.
          if (!/^https?:\/\//i.test(link)) continue;
          const d = new Date(raw);
          if (isNaN(d)) continue;
          collected.push({
            title: item.title.trim(),
            link,
            source: f.name,
            date: d.toISOString(),
          });
          added++;
        }
        if (added > 0) liveSources.push(f.name);
      } catch (err) {
        console.warn(`[feed] skipped ${f.name}: ${err.message}`);
      }
    })
  );

  // De-duplicate by link, sort newest-first, cap the list.
  const seen = new Set();
  const items = collected
    .filter((i) => {
      if (seen.has(i.link)) return false;
      seen.add(i.link);
      return true;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, MAX_ITEMS);

  return {
    items,
    liveSources,
    updated: new Date().toISOString(),
  };
};
