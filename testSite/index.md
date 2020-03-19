---
layout: default
title: EXAMPLE PAGE
---

# Index

Hi!

{% include components/card.html cardtitle="Hello 1" cardbody="from card world" %}
{% include components/card.html cardtitle="Hello 2" cardbody="from card world" %}
{% include components/card.html cardtitle="Hello 3" cardbody="from card world" %}

------

*italics*
**bold**

------

{% for post in site.posts %}
* <a href="{{ post.url | relative }}">I wrote a post once</a>
{% endfor %}
