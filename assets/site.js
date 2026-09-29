// Light/dark toggle. The saved choice is applied early by an inline script in <head>.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  if (!btn) return;
  function current() {
    return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function label() {
    var ru = root.lang === 'ru';
    var toDark = current() === 'light';
    btn.setAttribute('aria-label', ru ? (toDark ? 'Тёмная тема' : 'Светлая тема') : (toDark ? 'Dark theme' : 'Light theme'));
    btn.title = btn.getAttribute('aria-label');
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
  label();
})();
