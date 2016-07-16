var Totodile = function(el, opt) {
  if (!(this instanceof Totodile)) {
    return new Totodile(el, opt);
  }

  if (typeof el === 'string') {
    el = document.querySelectorAll(el);
  }

  if (!el) {
    return;
  }

  if (!el.length) {
    el = [el];
  }

  this.el = el;
  this.opt = assign({
    delay: 0,
    treshold: 0,
    stagger: 200,
    staggerOrder: function(a, b) {
      return a.boundingClientRect.top - b.boundingClientRect.top ||
             a.boundingClientRect.left - b.boundingClientRect.left;
    },
    prepare: function() {},
    run: function() {}
  }, opt);

  this.observer = new IntersectionObserver(this.onEnter.bind(this), {
    treshold: this.opt.treshold
  });

  for (var i = 0; i < this.el.length; i++) {
    var current = this.el[i];

    this.observer.observe(current);
    this.opt.prepare(current);
  }
};

Totodile.prototype.onEnter = function(entries, observer) {
  var _this = this;

  entries.sort(this.opt.staggerOrder);

  for (var i = 0; i < entries.length; i++) {
    var target = entries[i].target;
    var delay = (this.opt.stagger * i) + this.opt.delay;

    window.setTimeout((function(t) {
     return function() {
      _this.opt.run.call(_this, t);
     }
    })(target), delay);

    observer.unobserve(target);
  }
};

function assign(obj, props) {
  var newObj = Object.create(obj);

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      newObj[prop] = props[prop];
    }
  }

  return newObj;
};
