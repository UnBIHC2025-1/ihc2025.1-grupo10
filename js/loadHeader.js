window.addEventListener('load', () => {

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  fetch('partials/header.html')
    .then(response => response.text())
    .then(html => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      headerPlaceholder.innerHTML = html;

      const toggle = headerPlaceholder.querySelector('.theme-toggle');
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    });
});
