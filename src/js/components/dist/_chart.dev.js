"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var profileTotal = _toConsumableArray(document.querySelectorAll('.chart-donut'));

var profileRows = _toConsumableArray(document.querySelectorAll('.donut-table-row'));

if (profileTotal) {
  // $(function () {
  //   $(".chart-donut-contract").drawDoughnutChart([{
  //       title: "binance",
  //       value: 5,
  //       color: "#3262c0"
  //     },
  //     {
  //       title: "bitmex",
  //       value: 22,
  //       color: "#154ebc"
  //     },
  //     {
  //       title: "bybit",
  //       value: 15,
  //       color: "#1142a3"
  //     },
  //     {
  //       title: "crypto.com",
  //       value: 8,
  //       color: "#0d388c"
  //     },
  //     {
  //       title: "kucoin",
  //       value: 6,
  //       color: "#0a3079"
  //     }, {
  //       title: "whitebit",
  //       value: 4,
  //       color: "#072560"
  //     }
  //   ]);
  //   $(".chart-donut-spot").drawDoughnutChart([{
  //       title: "binance",
  //       value: 5,
  //       color: "#3262c0"
  //     },
  //     {
  //       title: "bitmex",
  //       value: 22,
  //       color: "#154ebc"
  //     },
  //     {
  //       title: "bybit",
  //       value: 15,
  //       color: "#1142a3"
  //     },
  //     {
  //       title: "crypto.com",
  //       value: 8,
  //       color: "#0d388c"
  //     },
  //     {
  //       title: "kucoin",
  //       value: 6,
  //       color: "#0a3079"
  //     }, {
  //       title: "whitebit",
  //       value: 4,
  //       color: "#072560"
  //     }
  //   ]);
  //   $(".chart-donut-exchange").drawDoughnutChart([{
  //       title: "binance",
  //       value: 5,
  //       color: "#3262c0"
  //     },
  //     {
  //       title: "bitmex",
  //       value: 22,
  //       color: "#154ebc"
  //     },
  //     {
  //       title: "bybit",
  //       value: 15,
  //       color: "#1142a3"
  //     },
  //     {
  //       title: "crypto.com",
  //       value: 8,
  //       color: "#0d388c"
  //     },
  //     {
  //       title: "kucoin",
  //       value: 6,
  //       color: "#0a3079"
  //     }, {
  //       title: "whitebit",
  //       value: 4,
  //       color: "#072560"
  //     }
  //   ]);
  // });
  var chartDonut = function chartDonut($, undefined) {
    $.fn.drawDoughnutChart = function (data, options) {
      var $this = this,
          W = $this.width(),
          H = $this.height(),
          centerX = W / 2,
          centerY = H / 2,
          cos = Math.cos,
          sin = Math.sin,
          PI = Math.PI,
          settings = $.extend({
        segmentShowStroke: true,
        segmentStrokeColor: "transparent",
        segmentStrokeWidth: 0,
        baseColor: "transparent",
        baseOffset: 4,
        edgeOffset: 10,
        //offset from edge of $this
        percentageInnerCutout: 60,
        animation: true,
        animationSteps: 40,
        animationEasing: "easeInOutExpo",
        animateRotate: true,
        tipOffsetX: -8,
        tipOffsetY: -45,
        tipClass: "chart-donut-tooltip",
        summaryTitleClass: "chart-donut-title",
        summaryNumberClass: "chart-donut-number",
        beforeDraw: function beforeDraw() {},
        afterDrawed: function afterDrawed() {},
        onPathEnter: function onPathEnter(e, data) {},
        onPathLeave: function onPathLeave(e, data) {}
      }, options),
          animationOptions = {
        linear: function linear(t) {
          return t;
        },
        easeInOutExpo: function easeInOutExpo(t) {
          var v = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          return v > 1 ? 1 : v;
        }
      },
          requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();

      settings.beforeDraw.call($this);
      var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this),
          $paths = [],
          easingFunction = animationOptions[settings.animationEasing],
          doughnutRadius = Min([H / 2, W / 2]) - settings.edgeOffset,
          cutoutRadius = doughnutRadius * (settings.percentageInnerCutout / 100),
          segmentTotal = 0; //Draw base doughnut

      var baseDoughnutRadius = doughnutRadius + settings.baseOffset,
          baseCutoutRadius = cutoutRadius - settings.baseOffset;
      $(document.createElementNS('http://www.w3.org/2000/svg', 'path')).attr({
        "d": getHollowCirclePath(baseDoughnutRadius, baseCutoutRadius),
        "fill": settings.baseColor
      }).appendTo($svg); //Set up pie segments wrapper

      var $pathGroup = $(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
      $pathGroup.attr({
        opacity: 0
      }).appendTo($svg); //Set up tooltip

      var $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide(),
          tipW = $tip.width(),
          tipH = $tip.height(); //Set up center text area

      var summarySize = (cutoutRadius - (doughnutRadius - cutoutRadius)) * 2,
          $summaryNumber = $('<span class="' + settings.summaryNumberClass + '">' + +'</span>').appendTo($this);

      for (var i = 0, len = data.length; i < len; i++) {
        segmentTotal += data[i].value;
        $paths[i] = $(document.createElementNS('http://www.w3.org/2000/svg', 'path')).attr({
          "stroke-width": settings.segmentStrokeWidth,
          "stroke": settings.segmentStrokeColor,
          "fill": data[i].color,
          "data-order": i + 1
        }).appendTo($pathGroup).on("mouseenter", pathMouseEnter).on("mouseleave", pathMouseLeave).on("mousemove", pathMouseMove);
      } //Animation start


      animationLoop(drawPieSegments); //Functions

      function getHollowCirclePath(doughnutRadius, cutoutRadius) {
        //Calculate values for the path.
        //We needn't calculate startRadius, segmentAngle and endRadius, because base doughnut doesn't animate.
        var startRadius = -1.570,
            // -Math.PI/2
        segmentAngle = 6.2831,
            // 1 * ((99.9999/100) * (PI*2)),
        endRadius = 4.7131,
            // startRadius + segmentAngle
        startX = centerX + cos(startRadius) * doughnutRadius,
            startY = centerY + sin(startRadius) * doughnutRadius,
            endX2 = centerX + cos(startRadius) * cutoutRadius,
            endY2 = centerY + sin(startRadius) * cutoutRadius,
            endX = centerX + cos(endRadius) * doughnutRadius,
            endY = centerY + sin(endRadius) * doughnutRadius,
            startX2 = centerX + cos(endRadius) * cutoutRadius,
            startY2 = centerY + sin(endRadius) * cutoutRadius;
        var cmd = ['M', startX, startY, 'A', doughnutRadius, doughnutRadius, 0, 1, 1, endX, endY, //Draw outer circle
        'Z', //Close path
        'M', startX2, startY2, //Move pointer
        'A', cutoutRadius, cutoutRadius, 0, 1, 0, endX2, endY2, //Draw inner circle
        'Z'];
        cmd = cmd.join(' ');
        return cmd;
      }

      ;

      function pathMouseEnter(e) {
        var order = $(this).data().order - 1;
        $tip.text(data[order].title).fadeIn(200);
        settings.onPathEnter.apply($(this), [e, data]);
      }

      function pathMouseLeave(e) {
        $tip.hide();
        settings.onPathLeave.apply($(this), [e, data]);
      }

      function pathMouseMove(e) {
        $tip.css({
          top: e.pageY + settings.tipOffsetY,
          left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
        });
      }

      function drawPieSegments(animationDecimal) {
        var startRadius = -PI / 2,
            //-90 degree
        rotateAnimation = 1;
        if (settings.animation && settings.animateRotate) rotateAnimation = animationDecimal; //count up between0~1

        drawDoughnutText(animationDecimal, segmentTotal);
        $pathGroup.attr("opacity", animationDecimal); //If data have only one value, we draw hollow circle(#1).

        if (data.length === 1 && 4.7122 < rotateAnimation * (data[0].value / segmentTotal * (PI * 2)) + startRadius) {
          $paths[0].attr("d", getHollowCirclePath(doughnutRadius, cutoutRadius));
          return;
        }

        for (var i = 0, len = data.length; i < len; i++) {
          var segmentAngle = rotateAnimation * (data[i].value / segmentTotal * (PI * 2)),
              endRadius = startRadius + segmentAngle,
              largeArc = (endRadius - startRadius) % (PI * 2) > PI ? 1 : 0,
              startX = centerX + cos(startRadius) * doughnutRadius,
              startY = centerY + sin(startRadius) * doughnutRadius,
              endX2 = centerX + cos(startRadius) * cutoutRadius,
              endY2 = centerY + sin(startRadius) * cutoutRadius,
              endX = centerX + cos(endRadius) * doughnutRadius,
              endY = centerY + sin(endRadius) * doughnutRadius,
              startX2 = centerX + cos(endRadius) * cutoutRadius,
              startY2 = centerY + sin(endRadius) * cutoutRadius;
          var cmd = ['M', startX, startY, //Move pointer
          'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY, //Draw outer arc path
          'L', startX2, startY2, //Draw line path(this line connects outer and innner arc paths)
          'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2, //Draw inner arc path
          'Z' //Cloth path
          ];
          $paths[i].attr("d", cmd.join(' '));
          startRadius += segmentAngle;
        }
      }

      function drawDoughnutText(animationDecimal) {
        $summaryNumber.css({
          opacity: animationDecimal
        });
      }

      function animateFrame(cnt, drawData) {
        var easeAdjustedAnimationPercent = settings.animation ? CapValue(easingFunction(cnt), null, 0) : 1;
        drawData(easeAdjustedAnimationPercent);
      }

      function animationLoop(drawData) {
        var animFrameAmount = settings.animation ? 1 / CapValue(settings.animationSteps, Number.MAX_VALUE, 1) : 1,
            cnt = settings.animation ? 0 : 1;
        requestAnimFrame(function () {
          cnt += animFrameAmount;
          animateFrame(cnt, drawData);

          if (cnt <= 1) {
            requestAnimFrame(arguments.callee);
          } else {
            settings.afterDrawed.call($this);
          }
        });
      }

      function Max(arr) {
        return Math.max.apply(null, arr);
      }

      function Min(arr) {
        return Math.min.apply(null, arr);
      }

      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      function CapValue(valueToCap, maxValue, minValue) {
        if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
        if (isNumber(minValue) && valueToCap < minValue) return minValue;
        return valueToCap;
      }

      return $this;
    };
  };

  window.addEventListener('load', function () {
    profileTotal.forEach(function (element) {
      var total = element.dataset.total;
      if (element.dataset.chartTarget === 'contracts' && element.querySelector('.chart-donut-number')) element.querySelector('.chart-donut-number').innerText = total;
      if (element.dataset.chartTarget === 'currencies' && element.querySelector('.chart-donut-number')) element.querySelector('.chart-donut-number').innerText = total;
      if (element.dataset.chartTarget === 'exchanges' && element.querySelector('.chart-donut-number')) element.querySelector('.chart-donut-number').innerText = total;
    });
  });
  chartDonut(jQuery);

  window.onload = function () {
    var profileDonutItem = _toConsumableArray(document.querySelectorAll('.chart-donut-box path '));

    if (profileRows.length > 0) {
      profileRows.forEach(function (element) {
        element.addEventListener('mouseover', function (e) {
          var rowDonut = e.currentTarget.dataset.donut;
          document.querySelectorAll("[data-order=\"".concat(rowDonut, "\"]")).forEach(function (element) {
            element.classList.add('chart-donut-hover');
          });
        });
      });
      profileRows.forEach(function (element) {
        element.addEventListener('mouseleave', function (e) {
          document.querySelectorAll("[data-order]").forEach(function (element) {
            element.classList.remove('chart-donut-hover');
          });
        });
      });
    }

    if (profileDonutItem.length > 0) {
      profileDonutItem.forEach(function (element) {
        element.addEventListener('mouseover', function (e) {
          var rowItem = e.currentTarget.dataset.order;
          document.querySelectorAll("[data-donut=\"".concat(rowItem, "\"]")).forEach(function (element) {
            element.classList.add('hovered');
          });
        });
      });
      profileDonutItem.forEach(function (element) {
        element.addEventListener('mouseleave', function (e) {
          document.querySelectorAll("[data-donut]").forEach(function (element) {
            element.classList.remove('hovered');
          });
        });
      });
    }
  };
}