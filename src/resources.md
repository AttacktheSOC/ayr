---
layout: base.njk
title: Tools & Resources
description: "A curated, vetted directory of tools and organizations for digital safety, secure communication, legal support, and wellbeing — for human rights defenders and civil society."
templateEngineOverride: njk,md
---

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow">Tools &amp; resources</span>
      <h1>Help exists. This makes it easier to find.</h1>
      <p class="hero-lead">A hand-checked directory of organizations and tools that support defenders, journalists, activists, and small civil society groups. Every link below was verified as live, and most are free.</p>
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container">
    <nav class="filter-links" aria-label="Jump to a category">
      <a href="#emergency">Emergency help</a>
      <a href="#opsec-tools">Secure tools</a>
      <a href="#surveillance">Surveillance research</a>
      <a href="#censorship">Beat censorship</a>
      <a href="#training">Learn the basics</a>
      <a href="#legal">Legal &amp; advocacy</a>
      <a href="#protection">Safety &amp; wellbeing</a>
      <a href="#funding">Funding</a>
      <a href="#nonprofit">Nonprofit security</a>
      <a href="#detection">Detection &amp; intel</a>
    </nav>

    <div class="callout" role="note">
      <p><strong>A note on staying safe:</strong> Circumvention and privacy tools are often impersonated by fake, malicious copies. Only download software from the official sites linked here (for example <code>psiphon.ca</code>, <code>torproject.org</code>, <code>tails.net</code>), and avoid third-party "mirror" download sites.</p>
    </div>
    <div class="callout" role="note" style="margin-top: var(--space-2)">
      <p><strong>Want the latest research?</strong> For labs, investigations, and surveillance trackers to follow, see the <a href="{{ '/research/' | url }}">Research &amp; News feed</a>.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">

  <div class="res-group" id="emergency">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Emergency &amp; rapid response</h2>
    <p class="group-intro">If you are facing an active attack — a hijacked account, a seized device, harassment, or a site under attack — start here. For highly sensitive details, use an encrypted channel rather than email or a web form.</p>
    <ul class="resource-list cols">
      <li><a href="https://www.accessnow.org/help/" rel="noopener noreferrer">Access Now Digital Security Helpline</a><span class="res-desc">Free, 24/7 rapid-response help line for people and organizations at risk, in nine languages.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">24/7</span></div></li>
      <li><a href="https://digitalfirstaid.org/" rel="noopener noreferrer">Digital First Aid Kit</a><span class="res-desc">A self-guided walkthrough to diagnose a digital emergency and either fix it yourself or reach the right responder. Works offline.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Self-guided</span></div></li>
      <li><a href="https://www.digitaldefenders.org/funds/" rel="noopener noreferrer">Digital Defenders Partnership</a><span class="res-desc">Emergency grants for defenders facing an active digital threat, plus longer-term protection funding.</span><div class="res-badges"><span class="badge badge-free">Grants</span></div></li>
      <li><a href="https://www.civicert.org/" rel="noopener noreferrer">CiviCERT</a><span class="res-desc">The emergency-response network ("CERT") built for civil society, coordinating trusted responders.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.rarenet.org/" rel="noopener noreferrer">Rapid Response Network (RaReNet)</a><span class="res-desc">A network of digital-emergency responders that connects people to appropriate, often free, help.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://feministhelplines.org/" rel="noopener noreferrer">Feminist Helplines Index</a><span class="res-desc">A searchable index of helplines supporting people facing tech-enabled gender-based violence and harassment.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="opsec-tools">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Secure communication &amp; OpSec tools</h2>
    <p class="group-intro">Vetted, mostly open-source tools for private messaging, safe browsing, and protecting your files and accounts.</p>
    <ul class="resource-list cols">
      <li><a href="https://signal.org/" rel="noopener noreferrer">Signal</a><span class="res-desc">End-to-end encrypted messaging and calls, with disappearing messages and safety numbers.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://www.torproject.org/" rel="noopener noreferrer">Tor Browser</a><span class="res-desc">Privacy-preserving browser for bypassing censorship and reducing tracking.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://tails.net/" rel="noopener noreferrer">Tails</a><span class="res-desc">A portable operating system that runs from a USB stick, routes everything through Tor, and leaves no trace.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://onionshare.org/" rel="noopener noreferrer">OnionShare</a><span class="res-desc">Share files, host a simple site, or chat anonymously over Tor, with no third-party server.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://cryptpad.org/" rel="noopener noreferrer">CryptPad</a><span class="res-desc">End-to-end encrypted collaborative docs, sheets, and forms — a private alternative to Google Workspace.</span><div class="res-badges"><span class="badge badge-free">Free tier</span><span class="badge">Open source</span></div></li>
      <li><a href="https://briarproject.org/" rel="noopener noreferrer">Briar</a><span class="res-desc">Censorship-resistant messaging that works over Tor and even offline via Bluetooth or Wi-Fi during shutdowns.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Maintenance mode</span></div></li>
      <li><a href="https://grapheneos.org/" rel="noopener noreferrer">GrapheneOS</a><span class="res-desc">A hardened, privacy-focused Android OS for high-risk mobile users.</span><div class="res-badges"><span class="badge badge-free">Free software</span><span class="badge">Needs a Pixel device</span></div></li>
      <li><a href="https://www.veracrypt.fr/" rel="noopener noreferrer">VeraCrypt</a><span class="res-desc">Open-source encrypted storage for devices and removable media.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://keepassxc.org/" rel="noopener noreferrer">KeePassXC</a><span class="res-desc">A local password manager for strong, unique credentials — no cloud required.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="surveillance">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> Surveillance &amp; spyware accountability</h2>
    <p class="group-intro">Research and investigative work that exposes the surveillance industry and the threats aimed at civil society.</p>
    <ul class="resource-list cols">
      <li><a href="https://www.surveillancewatch.io/" rel="noopener noreferrer">Surveillance Watch</a><span class="res-desc">An interactive map exposing the surveillance-technology industry and the funding links behind it.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Interactive</span></div></li>
      <li><a href="https://citizenlab.ca/" rel="noopener noreferrer">Citizen Lab</a><span class="res-desc">Leading research on surveillance technologies and digital threats to civil society.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://securitylab.amnesty.org/" rel="noopener noreferrer">Amnesty International Security Lab</a><span class="res-desc">Investigates spyware and digital attacks against activists and journalists, and publishes forensic tooling.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://forbiddenstories.org/" rel="noopener noreferrer">Forbidden Stories</a><span class="res-desc">A journalist network that continues the work of threatened reporters; led the Pegasus Project on NSO spyware.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://privacyinternational.org/" rel="noopener noreferrer">Privacy International</a><span class="res-desc">Investigates and litigates against government and corporate surveillance, with accessible research.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://atlasofsurveillance.org/" rel="noopener noreferrer">Atlas of Surveillance</a><span class="res-desc">A searchable map of surveillance tech deployed by law enforcement (facial recognition, ALPRs, drones).</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge badge-region">US-focused</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="censorship">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><line x1="2" y1="2" x2="22" y2="22"/></svg> Censorship circumvention &amp; internet freedom</h2>
    <p class="group-intro">Tools to reach the open internet under blocking, and projects that measure censorship worldwide.</p>
    <ul class="resource-list cols">
      <li><a href="https://ooni.org/" rel="noopener noreferrer">OONI</a><span class="res-desc">Free tools and the largest open dataset for detecting internet censorship across 200+ countries.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://psiphon.ca/" rel="noopener noreferrer">Psiphon</a><span class="res-desc">An easy, free circumvention tool widely used during shutdowns and blocking events.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.bypasscensorship.org/" rel="noopener noreferrer">Bypass Censorship</a><span class="res-desc">A plain-language guide to trusted circumvention tools and how to choose among them.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="training">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Learn the basics: training &amp; self-help guides</h2>
    <p class="group-intro">Plain-language courses and toolkits written for non-technical users, many built for low-bandwidth or offline use.</p>
    <ul class="resource-list cols">
      <li><a href="https://securityinabox.org/" rel="noopener noreferrer">Security in-a-Box</a><span class="res-desc">Foundational digital-security guides and tool how-tos for activists and defenders, in many languages.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://ssd.eff.org/" rel="noopener noreferrer">Surveillance Self-Defense (EFF)</a><span class="res-desc">EFF's tiered guides, with playlists tailored to activists, journalists, and protesters.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://totem-project.org/" rel="noopener noreferrer">Totem</a><span class="res-desc">Free interactive courses on digital security, privacy, and wellbeing, in 8+ languages.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://datadetoxkit.org/" rel="noopener noreferrer">Data Detox Kit</a><span class="res-desc">Approachable, everyday guides to reducing your data trail and securing your accounts.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Beginner</span></div></li>
      <li><a href="https://secfirst.org/" rel="noopener noreferrer">Umbrella (Security First)</a><span class="res-desc">A free app with practical checklists for digital <em>and</em> physical security; works offline.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Offline</span></div></li>
      <li><a href="https://freedom.press/digisec/" rel="noopener noreferrer">Freedom of the Press — DigiSec</a><span class="res-desc">Current guides and checklists focused on journalists and protecting sources.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="legal">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6l9-3 9 3"/><path d="M12 3v18"/><path d="m5 10-2 5a3 3 0 0 0 6 0l-2-5"/><path d="m17 10-2 5a3 3 0 0 0 6 0l-2-5"/><path d="M5 21h14"/></svg> Legal support &amp; digital-rights advocacy</h2>
    <p class="group-intro">Organizations that defend rights in court and in policy, and that publish guidance you can use.</p>
    <ul class="resource-list cols">
      <li><a href="https://www.mediadefence.org/" rel="noopener noreferrer">Media Defence</a><span class="res-desc">Legal help and emergency defense for journalists and independent media facing prosecution.</span><div class="res-badges"><span class="badge badge-free">Legal aid</span></div></li>
      <li><a href="https://www.eff.org/" rel="noopener noreferrer">Electronic Frontier Foundation</a><span class="res-desc">Leading digital-rights nonprofit: litigation, policy, and a huge library of free guides.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.apc.org/" rel="noopener noreferrer">Association for Progressive Communications</a><span class="res-desc">A global network advancing internet rights for civil society, from shutdowns to online GBV.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.digitalrights.community/" rel="noopener noreferrer">Team CommUNITY</a><span class="res-desc">A global network supporting the people and communities working at the intersection of technology and human rights — with a widely-read weekly newsletter (digital-rights news, funding leads, and jobs) and regular convenings.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Community &amp; newsletter</span></div></li>
      <li><a href="https://digitalfreedomfund.org/" rel="noopener noreferrer">Digital Freedom Fund</a><span class="res-desc">Supports strategic litigation to advance digital rights, with grants and legal-capacity support.</span><div class="res-badges"><span class="badge badge-region">Europe-focused</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="protection">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> Physical safety &amp; wellbeing</h2>
    <p class="group-intro">Protection is holistic. These groups support physical safety, emergency assistance, and the mental health of people doing hard, dangerous work.</p>
    <ul class="resource-list cols">
      <li><a href="https://www.frontlinedefenders.org/" rel="noopener noreferrer">Front Line Defenders</a><span class="res-desc">Protection and emergency assistance for human rights defenders at risk.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.protectioninternational.org/" rel="noopener noreferrer">Protection International</a><span class="res-desc">Defender-led protection strategies, security management, and advocacy for safer environments.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://toolkit.openbriefing.org/" rel="noopener noreferrer">Open Briefing — Holistic Toolkit</a><span class="res-desc">Free toolkit combining physical, digital, and psychosocial protection for defenders and nonprofits.</span><div class="res-badges"><span class="badge badge-free">Free toolkit</span></div></li>
      <li><a href="https://holistic-security.tacticaltech.org/" rel="noopener noreferrer">Holistic Security Manual</a><span class="res-desc">A free strategy manual integrating safety, wellbeing, and digital security into one framework.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://headington-institute.org/" rel="noopener noreferrer">Headington Institute</a><span class="res-desc">Wellbeing, resilience, and trauma resources for humanitarian and aid workers.</span><div class="res-badges"><span class="badge badge-free">Free resources</span></div></li>
      <li><a href="https://theselfinvestigation.com/" rel="noopener noreferrer">The Self-Investigation</a><span class="res-desc">Stress and burnout support tailored to journalists and media workers, with free self-directed courses.</span><div class="res-badges"><span class="badge badge-free">Free courses</span></div></li>
      <li><a href="https://rorypecktrust.org/" rel="noopener noreferrer">Rory Peck Trust</a><span class="res-desc">Practical, financial, safety, and wellbeing support for freelance journalists worldwide.</span><div class="res-badges"><span class="badge badge-free">Assistance</span></div></li>
      <li><a href="https://dartcenter.org/" rel="noopener noreferrer">Dart Center for Journalism &amp; Trauma</a><span class="res-desc">Research and guidance on covering trauma and on journalists' own trauma exposure.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="funding">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Funding &amp; grants for security</h2>
    <p class="group-intro">Money to fix a crisis, harden your organization, or build public-interest technology.</p>
    <ul class="resource-list cols">
      <li><a href="https://www.digitaldefenders.org/funds/" rel="noopener noreferrer">Digital Defenders Partnership</a><span class="res-desc">Emergency and longer-term "sustainable protection" grants for civil society under threat.</span><div class="res-badges"><span class="badge badge-free">Grants</span></div></li>
      <li><a href="https://www.opentech.fund/funds/internet-freedom-fund/" rel="noopener noreferrer">Open Technology Fund</a><span class="res-desc">Grants for technology, research, and rapid response advancing internet freedom.</span><div class="res-badges"><span class="badge">Verify fund is open</span></div></li>
      <li><a href="https://nlnet.nl/" rel="noopener noreferrer">NLnet Foundation</a><span class="res-desc">Small grants for open-source projects improving privacy, security, and a trustworthy internet.</span><div class="res-badges"><span class="badge badge-region">Europe-oriented</span></div></li>
      <li><a href="https://digitalfreedomfund.org/" rel="noopener noreferrer">Digital Freedom Fund</a><span class="res-desc">Litigation and legal-capacity funding for digital-rights cases.</span><div class="res-badges"><span class="badge badge-region">Europe-focused</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="nonprofit">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg> Cybersecurity help for nonprofits</h2>
    <p class="group-intro">Small organizations often run websites that get exploited and abused. These programs help nonprofits protect their sites and infrastructure — many for free.</p>
    <ul class="resource-list cols">
      <li><a href="https://globalcyberalliance.org/work/gca-cybersecurity-toolkit/gca-cybersecurity-toolkit-for-mission-based-organizations/" rel="noopener noreferrer">GCA Cybersecurity Toolkit for Nonprofits</a><span class="res-desc">A free, curated toolkit of tools and step-by-step guidance built for mission-based organizations.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.cloudflare.com/galileo/" rel="noopener noreferrer">Cloudflare Project Galileo</a><span class="res-desc">Free enterprise-grade website protection (DDoS, WAF, CDN) for qualifying public-interest sites.</span><div class="res-badges"><span class="badge badge-free">Free for eligible orgs</span></div></li>
      <li><a href="https://deflect.ca/" rel="noopener noreferrer">Deflect (eQualitie)</a><span class="res-desc">Free website and DDoS protection built specifically for nonprofits, independent media, and rights groups.</span><div class="res-badges"><span class="badge badge-free">Free for eligible orgs</span></div></li>
      <li><a href="https://protect.ngo/" rel="noopener noreferrer">Protect.ngo (CyberPeace Builders)</a><span class="res-desc">Connects nonprofits with vetted corporate cyber-volunteers for free assessments, hardening, and training.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://www.techsoup.org/" rel="noopener noreferrer">TechSoup</a><span class="res-desc">Deeply discounted and donated software, hardware, and security products for eligible nonprofits.</span><div class="res-badges"><span class="badge">Discounts</span><span class="badge">Eligibility varies</span></div></li>
      <li><a href="https://defendcampaigns.org/" rel="noopener noreferrer">Defending Digital Campaigns</a><span class="res-desc">Free cybersecurity tools and training for political campaigns and committees.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge badge-region">US campaigns only</span></div></li>
    </ul>
  </div>

  <div class="res-group" id="detection">
    <h2><svg class="res-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> Threat intel &amp; detection (for practitioners)</h2>
    <p class="group-intro">For the more technical defenders: community detection content and IDOD's own analysis.</p>
    <ul class="resource-list cols">
      <li><a href="{{ '/blog/' | url }}">IDOD blog</a><span class="res-desc">Plain-language translations of threat intel into concrete defensive steps.</span><div class="res-badges"><span class="badge badge-free">Free</span></div></li>
      <li><a href="https://github.com/SigmaHQ/sigma" rel="noopener noreferrer">SigmaHQ</a><span class="res-desc">A community repository of generic Sigma detection rules.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
      <li><a href="https://github.com/Yara-Rules/rules" rel="noopener noreferrer">YARA Rules</a><span class="res-desc">Curated YARA signatures for malware and threat hunting.</span><div class="res-badges"><span class="badge badge-free">Free</span><span class="badge">Open source</span></div></li>
    </ul>
  </div>

  <div class="callout callout-warm" role="note" style="margin-top: var(--space-4)">
    <p><strong>Know a resource that belongs here?</strong> This directory grows through the community. <a href="{{ '/contact/' | url }}">Suggest an addition</a> and help others find it.</p>
  </div>

  </div>
</section>
