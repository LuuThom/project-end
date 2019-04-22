 // sparkline
 $('#spark1').sparkline([0, 5, 3, 7, 5, 10, 3, 6, 5, 10], {
  type: 'line',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  lineColor: '#4285f4',
  highlightLineColor: '#4285f4',
  highlightSpotColor: '#4285f4',
  fillColor: false,
  width: '85',
  height: '35',
  lineWidth: 1.15
});
$('#spark2').sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8], {
  type: 'bar',
  barColor: '#fbbc05',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  fillColor: false,
  highlightColor: '#fbbc05',
  width: '81',
  height: '35',
  barWidth: 3,
  barSpacing: 3,
  chartRangeMin: 0,
});
$('#spark3').sparkline([2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 4, 5], {
  type: 'discrete',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  fillColor: false,
  width: "85",
  height: "35",
  lineHeight: 20,
  lineColor: '#007f00',
  highlightColor: '#007f00',
  xwidth: 18
});
$('#spark4').sparkline([2, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
  type: 'line',
  lineColor: '#e12717',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  fillColor: false,
  highlightSpotColor: '#e12717',
  width: '85',
  height: '35',
  lineWidth: 1.15
});

function chartcustom(id) {
  if ($(id).length){
    $.plot($(id), [{
      data: [
        [1, 35],
        [2, 60],
        [3, 40],
        [4, 65],
        [5, 45],
        [6, 75],
        [7, 35],
        [8, 40],
        [9, 60]
      ],
      // showLabels: !0,
      // label: "Purchases",
      // labelPlacement: "below",
      // canvasRender: !0,
      // cColor: "#FFFFFF"
    }, {
      data: [
        [1, 20],
        [2, 40],
        [3, 25],
        [4, 45],
        [5, 25],
        [6, 50],
        [7, 35],
        [8, 60],
        [9, 30]
      ],
      showLabels: !0,
      label: "Plans",
      labelPlacement: "below",
      canvasRender: !0,
      cColor: "#FFFFFF"
    }, {
      data: [
        [1, 35],
        [2, 15],
        [3, 20],
        [4, 30],
        [5, 15],
        [6, 18],
        [7, 28],
        [8, 10],
        [9, 30]
      ],
      showLabels: !0,
      label: "Services",
      labelPlacement: "below",
      canvasRender: !0,
      cColor: "#FFFFFF"
    }], {
        series: {
          lines: {
            show: !0,
            lineWidth: 0,
            fill: !0,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          fillColor: "rgba(0, 0, 0, 1)",
          shadowSize: 0,
          curvedLines: {
            apply: !0,
            active: !0,
            monotonicFit: !0
          }
        },
        legend: {
          show: !1
        },
        grid: {
          show: !0,
          margin: {
            top: 20,
            bottom: 0,
            left: 0,
            right: 0
          },
          labelMargin: 0,
          minBorderMargin: 0,
          axisMargin: 0,
          tickColor: "rgba(0,0,0,0.05)",
          borderWidth: 0,
          hoverable: !0,
          clickable: !0
        },
        tooltip: {
          show: !0,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: !1
        },
        colors: ["#4386f4", "#81adf8", "#a2c3fa"],
        xaxis: {
          tickFormatter: function () {
            return ""
          },
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0,
          tickLength: 0
        },
        yaxis: {
          tickFormatter: function () {
            return ""
          },
          ticks: 4,
          tickDecimals: 0
        }
      })
  }
  
}

function chart_pie(id) {
  if ($(id).length > 0) {
    $.plot($(id), [{
      label: "Services",
      data: 33
    }, {
      label: "Standard Plans",
      data: 33
    }, {
      label: "Services",
      data: 33
    }],
    {
      series: {
        pie: {
          radius: .75,
          innerRadius: .58,
          show: !0,
          highlight: {
            opacity: .1
          },
          label: {
            show: !1
          }
        }
      },
      grid: {
        hoverable: !0
      },
      legend: {
        show: !1
      },
      colors: ['#34A853', '#FBBC05', '#4285F4']
    })
  }
}
 // bar chart
 function barChart(id) {
  if ($(id).length) {
    $.plot($(id), [{
      label: "Page Views",
      data: [
        [0, 7],
        [1, 13],
        [2, 17],
        [3, 20],
        [4, 26],
        [5, 37],
        [6, 35],
        [7, 28],
        [8, 38],
        [9, 38],
        [10, 32],
        [11, 25]
      ]
    }, {
      label: "Unique Visitor",
      data: [
        [0, 15],
        [1, 10],
        [2, 15],
        [3, 25],
        [4, 30],
        [5, 29],
        [6, 25],
        [7, 33],
        [8, 45],
        [9, 43],
        [10, 38],
        [11, 36]
      ]
    }], {
        series: {
          bars: {
            order: 2,
            align: "center",
            show: !0,
            barWidth: .3,
            lineWidth: .7,
            fill: !0,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          shadowSize: 2
        },
        legend: {
          show: !1
        },
        grid: {
          margin: 0,
          show: !1,
          labelMargin: 10,
          axisMargin: 500,
          hoverable: !0,
          clickable: !0,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 0
        },
        tooltip: {
          show: !0,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: !1
        },
        colors: ["#4386f4", "#acc9fa"],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 4,
          tickDecimals: 0
        }
      })
      $(id).bind("plothover", function (event, pos, item) {
        var _width = $(".tooltip-chart").width();
        if (item) {
          $(".tooltip-chart").css({
            top: item.pageY - 60,
            left: item.pageX - _width / 2
          }).fadeIn(200)
        } else {
          $(".tooltip-chart").hide()
        }
      })
  }
}
