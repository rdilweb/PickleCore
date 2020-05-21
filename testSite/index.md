---
layout: default
title: EXAMPLE PAGE
sidebar: true
---

# Index

Hi!

<div class="columns">
{% include components/startcard.html %}
<h3>Card 1</h3>

Hello from cardworld
{% include components/endcard.html %}

{% include components/startcard.html %}
<h3>Card 2</h3>

Hello from cardworld
{% include components/endcard.html %}

{% include components/startcard.html %}
<h3>Card 3</h3>

Hello from cardworld
{% include components/endcard.html %}
</div>

------

*italics*
**bold**

------

{% for post in site.posts %}
* <a href="{{ post.url | relative }}">I wrote a post once</a>
{% endfor %}
