---
layout: page
title: Writings
permalink: "/articles/"
description: I’m a designer with over 10 years of experience who solves challenges through design thinking and these are my thoughts on various subjects.

---
<div class="selected-articles">
<article class="selected-article--card">
          <div class="selected-article--content">
            <span class="date">26 April 2024</span>
            <h2><a class=" " href="https://www.nagarro.com/en/blog/ai-accelerate-product-innovation-process">How AI can help you accelerate your product innovation process</a></h2>
            <p>This article explores how an innovation strategy, and a structured approach can help in that journey. We explain what digital product innovation is, the different types of it, and the process for managing it successfully.</p>
          </div>
      </article>
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
