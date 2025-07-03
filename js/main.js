document.addEventListener('DOMContentLoaded', () => {
  fetch('partials/donutChart.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('donut-placeholder').innerHTML = html;
      updateDonutChart(); // Chama após injetar o HTML
    });

  const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
  checkboxes.forEach(cb => cb.addEventListener('change', updateDonutChart));
  updateDonutChart();
});
