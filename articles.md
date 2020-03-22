---
layout: page
title: Writings - Carlos Sousa Product Designer
permalink: "/articles/"
description: My articles

---
<div>
{% for post in site.posts limit:20 %}
        <article class="selected-article--card">
          <div class="selected-article--content">
            <span class="date"><small>{{ post.date | date: "%-d %B %Y"}}</small></span>
            <h2><a class="color-change" href="{{ post.url }}">{{ post.title }}</a></h2>
            <p>{{ post.excerpt }}</p>
          </div>
      </article>
{% endfor %}
</div>
