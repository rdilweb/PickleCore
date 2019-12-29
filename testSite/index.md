---
layout: default-with-sidebar
title: EXAMPLE PAGE
---

# Index

Hi!

------

<div class="cards">
    {% include components/card.html cardtitle="Hello" cardbody="from card world" %}
</div>

------

<button>I am a BUTTON (big surprise right?)</button>

------

*italics*
**bold**

------

{% for post in site.posts %}
<a href="{{ post.url | relative }}">I wrote a post once</a>
{% endfor %}
