(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll('[data-language-link]').forEach(link => {
    link.addEventListener('click', () => {
      const destination = new URL(link.href);
      destination.hash = window.location.hash;
      link.href = destination.href;
    });
  });

  const links = [...document.querySelectorAll('.side-nav a')];
  const topLinks = [...document.querySelectorAll('.top-nav a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if (!('IntersectionObserver' in window)) return;

  const visible = new Set();
  const updateActiveSection = () => {
    const current = sections.find(section => visible.has(section.id));
    if (!current) return;
    links.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    topLinks.forEach(link => link.classList.toggle('nav-active', link.hash === '#' + current.id));
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });
    updateActiveSection();
  }, {rootMargin: '-100px 0px -35% 0px', threshold: 0});
  sections.forEach(section => observer.observe(section));
})();
