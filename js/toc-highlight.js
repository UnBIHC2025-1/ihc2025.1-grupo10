document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main.main-content section[id]');
  const tocLinks = document.querySelectorAll('.toc ul li a');

  function onScroll() {
    const scrollPos = window.scrollY || window.pageYOffset;

    let currentSectionId = sections[0].id; 

    for (const section of sections) {
      const sectionTop = section.offsetTop - 120;
      if (scrollPos >= sectionTop) {
        currentSectionId = section.id;
      }
    }

    tocLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // ativa no carregamento
});
