/* Wiz iDM — shared light/dark toggle for design-system guideline cards.
   Applies [data-theme] to <html>, persists to localStorage('wiz-theme'),
   and syncs across every card/iframe via the storage event — flip one,
   they all flip. Drop <script src=".../theme-toggle.js"></script> into a card. */
(function () {
  var KEY = 'wiz-theme';
  var theme = localStorage.getItem(KEY) || 'light';

  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (document.body) document.body.setAttribute('data-theme', t);
  }
  apply(theme);

  function build() {
    apply(theme);
    var wrap = document.createElement('div');
    wrap.setAttribute('data-theme-toggle', '');
    wrap.style.cssText =
      'position:fixed;top:10px;right:10px;z-index:99999;display:inline-flex;gap:2px;' +
      'padding:3px;border-radius:999px;background:var(--grey-30);' +
      'box-shadow:var(--ring-hairline);font-family:var(--font-ui,sans-serif);' +
      '-webkit-user-select:none;user-select:none;';

    var opts = [
      { v: 'light', g: '\u2600' },   // ☀
      { v: 'dark', g: '\u263E' },    // ☾
    ];
    var btns = {};
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = o.g;
      b.title = o.v === 'light' ? 'Light mode' : 'Dark mode';
      b.style.cssText =
        'width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;' +
        'border:none;border-radius:999px;cursor:pointer;font-size:13px;line-height:1;' +
        'background:transparent;color:var(--grey-80);transition:background .12s,color .12s;';
      b.addEventListener('click', function () { set(o.v); });
      btns[o.v] = b;
      wrap.appendChild(b);
    });

    function paint() {
      opts.forEach(function (o) {
        var on = theme === o.v;
        btns[o.v].style.background = on ? 'var(--surface-card,#fff)' : 'transparent';
        btns[o.v].style.color = on ? 'var(--brand-blue-70)' : 'var(--grey-70)';
        btns[o.v].style.boxShadow = on ? 'var(--shadow-card)' : 'none';
      });
    }
    function set(t) {
      theme = t;
      localStorage.setItem(KEY, t);
      apply(t);
      paint();
    }
    window.__wizSetTheme = set;
    window.__wizPaintTheme = paint;
    document.body.appendChild(wrap);
    paint();
  }

  // Sync when another card changes the theme
  window.addEventListener('storage', function (e) {
    if (e.key === KEY && e.newValue) {
      theme = e.newValue;
      apply(theme);
      if (window.__wizPaintTheme) window.__wizPaintTheme();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
