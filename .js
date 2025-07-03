  <script>
    function updateDonutChart() {
      const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
      const total = checkboxes.length;
      const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
      const percent = Math.round((checked / total) * 100);

      const segment = document.querySelector('.donut-segment');
      const text = document.querySelector('.donut-text');

      const strokeValue = `${percent} ${100 - percent}`;
      segment.setAttribute('stroke-dasharray', strokeValue);
      text.textContent = `${percent}%`;

      // Cor dinâmica
      let color = 'red';
      if (percent >= 80) color = 'green';
      else if (percent >= 50) color = 'orange';
      segment.setAttribute('stroke', color);
    }

    document.addEventListener('DOMContentLoaded', () => {
      const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
      checkboxes.forEach(cb => cb.addEventListener('change', updateDonutChart));
      updateDonutChart();
    });
  </script>
