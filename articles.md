---
layout: page
title: Writings
permalink: "/articles/"
description: My articles

---
<div>
{% for post in site.posts limit:20 %}
        <article class="selected-article--card">
          <div class="selected-article--content">
            <h2><a class="color-change" href="{{ post.url }}">{{ post.title }}</a></h2>
            <p>{{ post.excerpt }}</p>
          </div>
      </article>
{% endfor %}
</div>
