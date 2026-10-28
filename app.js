(function () {
  var KEY = 'helperChecklist.v1';
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { state = {}; }
  var btns = document.querySelectorAll('#checklist button');
  function render() {
    var done = 0;
    btns.forEach(function (b) {
      var on = !!state[b.dataset.k];
      b.classList.toggle('is-done', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) done++;
    });
    document.getElementById('bar').style.width = (done / btns.length * 100) + '%';
    document.getElementById('progress-text').textContent =
      done === btns.length ? 'All done! Welcome to the crew 🎉' : done + ' of ' + btns.length + ' done';
  }
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      state[b.dataset.k] = !state[b.dataset.k];
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
      render();
    });
  });
  document.querySelectorAll('.flip').forEach(function (f) {
    f.addEventListener('click', function () {
      var on = f.classList.toggle('is-flipped');
      f.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  });
  render();
})();
