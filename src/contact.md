---
layout: base.njk
title: Contact
description: "Reach In Defense of Defenders directly over encrypted channels — Proton Mail or Signal. No web forms, no third parties handling your message."
templateEngineOverride: njk,md
---

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow">Contact</span>
      <h1>Reach out — privately, and directly.</h1>
      <p class="hero-lead">Whether you need security help, want to suggest a resource, or just want to connect, here are two ways to reach me. Both are end-to-end encrypted.</p>
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container prose">
    <div class="callout callout-warm" role="note">
      <p><strong>A note on safety:</strong> For anything sensitive or high-risk, please use <strong>Signal</strong> — it's end-to-end encrypted and keeps the least metadata. Proton Mail is also encrypted (fully so between Proton accounts). Either way, share only what you're comfortable sharing, and there's no pressure to reveal your identity.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid-2">
      <article class="card feature">
        <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
        <h3>Email (Proton Mail)</h3>
        <p>Best for suggestions, general questions, and non-urgent requests. Encrypted end-to-end when you write from another Proton account.</p>
        <p><a class="btn btn-primary" href="mailto:indefenseofdefenders@proton.me">indefenseofdefenders@proton.me</a></p>
      </article>
      <article class="card feature warm">
        <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></span>
        <h3>Signal (recommended for sensitive matters)</h3>
        <p>End-to-end encrypted with minimal metadata. In Signal, start a new message and search for the username below.</p>
        <p><code style="font-size:1.05rem; padding:0.35rem 0.7rem;">idod.01</code></p>
      </article>
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container prose">
    <div class="callout" role="note">
      <span class="eyebrow">Encrypt your email (optional)</span>
      <h2 style="margin-top:0">PGP public key</h2>
      <p>Writing from a non-Proton account and want the message encrypted end-to-end anyway? Use my PGP key. Always confirm the fingerprint below matches before you trust a copy of the key.</p>
      <p><strong>Fingerprint:</strong><br>
      <code style="display:inline-block; margin-top:0.35rem; font-size:0.95rem; letter-spacing:0.02em;">AC10 2D3D 17F4 19EF 3003&nbsp;&nbsp;AD02 CC01 D39B 99DD C2EC</code></p>
      <p><a class="btn btn-ghost" href="{{ '/assets/idod-pgp-publickey.asc' | url }}" download>Download public key (.asc)</a></p>
    </div>
  </div>
</section>

<section class="section band">
  <div class="container prose">
    <span class="eyebrow">What helps</span>
    <h2>Getting to the point faster</h2>
    <p>You don't need any technical detail to reach out — that's my job. But if it's easy, a sentence or two on who you are (an organization, a journalist, an individual), what's going on, and how urgent it is helps me point you in the right direction quickly.</p>
    <p>If you're in an active emergency, please also use the <a href="{{ '/resources/#emergency' | url }}">rapid-response resources</a> in parallel — they're staffed to respond around the clock.</p>
    <p class="field-hint" style="font-size:0.9rem">By design, there's no web form here: your message goes straight to me over an encrypted channel, not through an outside service that could read or log it.</p>
  </div>
</section>
