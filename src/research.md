---
layout: base.njk
title: Research & News
description: "An automatically-updated feed of the latest research, investigations, and releases at the intersection of surveillance technology, digital rights, and information security."
templateEngineOverride: njk,md
---

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow">Research &amp; news</span>
      <h1>The latest from the field, gathered in one place.</h1>
      <p class="hero-lead">An impartial, automatically-updated feed of recent research, investigations, and releases in surveillance, digital rights, and information security — pulled straight from the people doing the work, newest first.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Latest in the field</span>
      <h2>Fresh research &amp; reporting</h2>
      <p>Aggregated from trusted sources and refreshed every time the site is rebuilt. No single voice is featured — just what's most recent across the field.</p>
    </div>

    {% if feed.items and feed.items.length %}
    <ul class="resource-list cols">
      {% for item in feed.items %}
      <li>
        <a href="{{ item.link }}" rel="noopener noreferrer">{{ item.title }}</a>
        <span class="res-desc feed-meta">
          <span class="badge">{{ item.source }}</span>
          <time datetime="{{ item.date }}">{{ item.date | readableDate }}</time>
        </span>
      </li>
      {% endfor %}
    </ul>
    <p class="meta" style="margin-top: var(--space-3)">
      Last updated {{ feed.updated | readableDate }}. Currently gathering from: {{ feed.liveSources | join(", ") }}.
    </p>
    {% else %}
    <div class="callout" role="note">
      <p>The live feed couldn't be assembled during the last build. In the meantime, explore the trusted sources below directly — they're the ones this feed draws from.</p>
    </div>
    {% endif %}
  </div>
</section>

<section class="section band-accent">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">The sources behind this feed</span>
      <h2>Labs, investigators &amp; trackers worth following</h2>
      <p>The feed above is drawn from these organizations' own publications, plus a few standout trackers that don't publish a feed but are worth exploring directly.</p>
    </div>
    <ul class="resource-list cols">
      {% for s in research.sources %}
      <li>
        <a href="{{ s.url }}" rel="noopener noreferrer">{{ s.name }}</a>
        <span class="res-desc">{{ s.focus }}</span>
        <div class="res-badges">
          <span class="badge">{{ s.kind }}</span>
          {% if s.region %}<span class="badge badge-region">{{ s.region }}</span>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
    <div class="callout callout-warm" role="note" style="margin-top: var(--space-4)">
      <p><strong>Following a great source we're missing?</strong> The feed grows through the community — <a href="{{ '/contact/' | url }}">suggest one</a> and help others find it.</p>
    </div>
  </div>
</section>
