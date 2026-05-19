function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const nav = document.getElementById('main-nav');
  (id === 'p1' || id === 'p8') ? nav.classList.remove('show') : nav.classList.add('show');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === id);
  });
  window.scrollTo(0, 0);
}
