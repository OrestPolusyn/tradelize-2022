import vars from '../_vars'

const chartBtn = [...vars.graphRadio]

const graphBox = vars.graph

if (graphBox) {
  // const optionsArea = {
  //   chart: {
  //     type: 'area',
  //   },
  //   dropShadow: {
  //     enabled: true,
  //     enabledOnSeries: [0, 1, 2],
  //     top: -10,
  //     left: 0,
  //     blur: 20,
  //     color: '#fbcab7',
  //     opacity: 0.35,
  //   },
  // }

  // const optionsBar = {
  //   chart: {
  //     type: 'bar',
  //   },
  //   fill: {
  //     type: 'solid'
  //   },
  //   plotOptions: {
  //     bar: {
  //       colors: {
  //         ranges: [{
  //           from: -99999999,
  //           to: 0,
  //           color: '#cd6c6c',
  //           borderColor: '#cd6c6c'
  //         }, {
  //           from: 0,
  //           to: 999999999,
  //           color: '#5d73ca',
  //           borderColor: '#5d73ca'
  //         }]
  //       },
  //     }
  //   },
  // }

  // let options = {
  //   chart: {
  //     height: 310,
  //     width: '100%',
  //     zoom: {
  //       enabled: false,
  //     },
  //     type: 'area',
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       enabled: true,
  //       shadeIntensity: 0.4,
  //       opacityFrom: 1,
  //       opacityTo: 0,
  //       stops: [30, 100, 110],
  //     },
  //     colors: ['#b3c3ff', 'rgba(64, 106, 255, 0)'],
  //   },
  //   stroke: {
  //     show: true,
  //     curve: 'smooth',
  //     colors: ['#406aff'],
  //     width: 1,
  //     dashArray: 0,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  //   grid: {
  //     padding: {
  //       left: 10,
  //       top: 0,
  //       bottom: 0,
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       offsetX: -15,
  //       formatter: (value) => value.toFixed(0) + '%',
  //     },
  //   },
  //   series: [{
  //     name: 'graph',
  //     data: [0, -10 - 20, 30, 50, 50],
  //   }, ],
  //   xaxis: {
  //     categories: [
  //       '1 Dec',
  //       '8 Dec',
  //       '16 Dec',
  //       '31 Dec',
  //       '05 Jan',
  //       '14 Jan',
  //       '21 Jan',
  //       '28 Jan',
  //       '05 Feb',
  //     ],
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  // }

  // const chart = new ApexCharts(graphBox, options)

  // chart.render()

  // if (chartBtn.length > 0) {
  //   chartBtn.forEach((element) => {
  //     element.addEventListener('change', (e) => {
  //       if (element.dataset.type === 'bar') {
  //         chart.updateOptions(optionsBar)
  //       } else {
  //         chart.updateOptions({
  //           chart: {
  //             type: 'area',
  //           }
  //         })
  //       }
  //     })
  //   })
  // }
}
