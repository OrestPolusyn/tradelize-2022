import vars from '../_vars'
import ApexCharts from 'apexcharts'

const chartBtn = [...vars.graphRadio]

const graphBox = vars.graph

if (graphBox) {
  const optionsArea = {
    chart: {
      type: 'area',
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      top: -10,
      left: 0,
      blur: 20,
      color: '#fbcab7',
      opacity: 0.35,
    },
    borderColor: '#406aff',
  }

  const optionsBar = {
    chart: {
      type: 'bar',
    },
    fill: {
      type: 'solid',
      gradient: {
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    borderColor: '#5d73ca',
  }

  let options = {
    chart: {
      height: 310,
      width: '100%',
      zoom: {
        enabled: false,
      },
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        enabled: true,
        shadeIntensity: 0.4,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [30, 100, 110],
      },
      colors: ['#b3c3ff', 'rgba(64, 106, 255, 0)'],
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: ['#406aff'],
      width: 1,
      dashArray: 0,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 10,
        top: 0,
        bottom: 0,
      },
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: (value) => value.toFixed(0) + '%',
      },
    },
    series: [{
      name: 'graph',
      data: [0, -10 - 20, 30, 50, 50],
    }, ],
    xaxis: {
      categories: [
        '1 Dec',
        '8 Dec',
        '16 Dec',
        '31 Dec',
        '05 Jan',
        '14 Jan',
        '21 Jan',
        '28 Jan',
        '05 Feb',
      ],
      axisTicks: {
        show: false,
      },
    },

    borderColor: '#406aff',
  }

  const chart = new ApexCharts(graphBox, options)

  chart.render()

  // if (chartBtn.length > 0) {
  //   chartBtn.forEach((element) => {
  //     element.addEventListener('click', (e) => {
  //       const graphSwitch = e.currentTarget
  //     })
  //   })
  // }
}
