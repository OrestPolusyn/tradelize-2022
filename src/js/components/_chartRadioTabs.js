const radioChart = [...document.querySelectorAll('.chart-tabs .radio')]
const radioChartContent = [...document.querySelectorAll('.chart-donut')]


if (radioChart.length > 0) {
  radioChart.forEach(element => {
    element.addEventListener('change', () => {
      const target = element.dataset.chart;

      radioChartContent.forEach(element => {
        element.classList.remove('chart-donut-active')
      })

      document.querySelectorAll(`[data-chart-target="${target}"]`).forEach(element => {
        element.classList.add('chart-donut-active');
      });
    })
  })
}
