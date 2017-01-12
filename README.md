Work in progress.

# Totodile
A wild DOMElement appears!

<img src="http://i.imgur.com/NlxYSAC.gif" />

Totodile is a little JavaScript helper that helps you to create animation of DOMElement when they enter in the viewport.

It uses [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), so make sure to add a [polyfill](https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill).

## Usage
```
new Totodile(HTMLElement | NodeList | Sting [, option = {}]);

```
Totodile can be instanciated with or without new keyword.
The first parameter can be a single `HTMLElement`, `NodeList` or a String selector.

```
new Totodile(document.querySelectorAll('div'), {
  prepare: function(el) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
  },

  run: function(el) {
    el.style.opacity = '1';
  }
});
```

```
new Totodile('.card', {
  threshold: 0.5,
  delay: 200,
  stagger: 100,

  prepare: function(el) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
  },

  run: function(el) {
    el.style.opacity = '1';
  }
});
```

```
new Totodile(document.querySelector('.card'), {
  delay: 0,
  treshold: 0,
  stagger: 200,

  prepare: function(el) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
  },

  run: function(el) {
    el.style.opacity = '1';
  }
});

```
