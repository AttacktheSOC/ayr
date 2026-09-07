---
layout: base.njk
title: Blog
description: "IDOD analysis on attacks against civil society, operational security, and practical, plain-language threat response for defenders."
templateEngineOverride: njk,md
---

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow">The blog</span>
      <h1>Attacks on civil society, explained without the jargon.</h1>
      <p class="hero-lead">Analysis of the threats facing human rights defenders and the organizations that protect them — what's happening, who's targeted, and the practical steps you can take.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="callout" role="note" style="margin-bottom: var(--space-4)">
      <p><strong>The blog is just getting started.</strong> In-depth analysis on the threats facing civil society is being written now — expect more here soon. Have a topic you'd like covered? <a href="{{ '/contact/' | url }}">Suggest one</a>.</p>
    </div>
    {% if collections.posts and collections.posts.length %}
    <ul class="post-list">
      {% for post in collections.posts %}
      <li>
        <h3><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
        <p class="meta">
          <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
          {% if post.data.readTime %} · {{ post.data.readTime }} min read{% endif %}
          {% for tag in post.data.tags %}{% if tag != "posts" %} · <span class="tag">{{ tag }}</span>{% endif %}{% endfor %}
        </p>
        {% if post.data.excerpt %}<p>{{ post.data.excerpt }}</p>{% endif %}
      </li>
      {% endfor %}
    </ul>
    {% else %}
    <div class="callout"><p>No posts yet — the first pieces are on the way. Check back soon, or <a href="{{ '/contact/' | url }}">suggest a topic</a>.</p></div>
    {% endif %}
  </div>
</section>
