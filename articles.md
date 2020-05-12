---
layout: page
title: Writings
permalink: "/articles/"
description: I’m a designer with over 10 years of experience who solves challenges through design thinking and these are my thoughts on various subjects.

---
<div class="selected-articles">
{% for post in site.categories.articles limit:20 %}
        <article class="selected-article--card">
          <div class="selected-article--content">
            <span class="date">{{ post.date | date: "%-d %B %Y"}}</span>
            <h2><a class=" " href="{{ post.url }}">{{ post.title }}</a></h2>
            <p>{{ post.excerpt }}</p>
          </div>
      </article>
{% endfor %}
</div>
