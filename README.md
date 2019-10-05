# PickleCore

*PickleCore* is a Jekyll theme developed by [Reece Dunham](https://github.com/RDIL) ([for his site](https://rdil.rocks)) and [Param Thakkar](https://github.com/paramt).

## Installation

First, download it by adding it to your `Gemfile`:

```ruby
gem "picklecore"
```

run bundler:

```shell
$ bundler
```

and then apply it in your `_config.yml`:

```yaml
theme: picklecore
```

and it should apply.

## Deploying

### GitHub Pages

Unfortunately, PickleCore is not whitelisted as a GitHub pages theme, so you can't use it by simply applying the theme. You will need to set up some kind of pipeline that bulids the site into raw HTML/CSS/JS and deploy that off the `gh-pages` branch.

### Netlify

Netlify is perfect for deploying PickleCore. The setup is quite easy - just set the command as `bundler exec jekyll build` and set the deploy folder to `_site`!

## Customization

PickleCore is (probably) the most customizable theme out in the Jekyllverse. Here is a list of keys you can put in your `_config.yml` and what they do:

* `name` - the name of the site (main title)
* `webmanifest` - link to a `manifest.json` or a file with the `.webmanifest` extension (used by Google for web apps, link must be relative to the root page of the site)
* `description` - description of the site (for metadata)
* `url` - the URL of your site when hosted in production

## Applying Theme Components

The PickleCore theme allows you to apply some nice looking components that match with the theme via `includes`.

### Cards

![A card](https://raw.githubusercontent.com/RDIL/PickleCore/images/card-example.png)

A card (shown above) can be applied by adding the following to any page with [Front Matter](https://jekyllrb.com/docs/front-matter/) on it:

```html
<!-- Note: you can put as many cards as you want in each card container, but all cards NEED to be in a container -->
<div class="cards">
  <!-- In this container, render a card -->
  {% include components/card.html cardtitle="My Card" cardbody="The text of the card!" %}
</div>
```
