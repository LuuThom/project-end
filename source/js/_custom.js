$(function () {
  $('.datetimepicker').datetimepicker();
  //slider
  $('#slide1').slider({
    formatter: function (value) {
      return 'Current value: ' + value;
    }
  });
  $("#slide2").slider({});

  $('#slide3, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9').each(function (index, element) {
    $(this).slider({
      reversed: true
    })

  });
  // Js scrollbar notifi
  function scrollbar(element) {
    var listScroll = document.querySelectorAll(element);
    for (var i = 0; i < listScroll.length; i++) {
      new PerfectScrollbar(listScroll[i], {
        wheelPropagation: false
      });
    }
  }

  scrollbar(".js-list, .js-chat-section, .js-list, .sidebar-nav")

  // Js scrollbar chat
  // var pt = new PerfectScrollbar('.js-chat-section');

  // show sidebarRight

  $(document).on('mouseup', function (e) {
    if (document.getElementsByClassName('js-settings')[0].contains(e.target)) {
      $('.js-sidebar-show').toggleClass('sidebar-show');

    }
    else {
      var container = $('.js-sidebar-show');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.js-sidebar-show').removeClass('sidebar-show');
      }
    }
  });

  // scroll to top
  var scrollTop = $('.js-scrollTop');
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).fadeIn();

    } else {
      $(scrollTop).fadeOut();
    }

  });
  $(scrollTop).click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
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

  // countup
  $('.number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    var _suffix = $(this).data('suffix') ? $(this).data('suffix') : '';
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    },
      {
        duration: 3000,
        step: function (func) {
          if (_suffix.length > 0) {
            $(this).text(parseFloat(func).toFixed(size) + `${_suffix}`);
          } else {
            $(this).text(parseFloat(func).toFixed(size));
          }
        }
      });
  });


  // custom file

  $('input[multiple="multiple"]').each(function (index, element) {
    var $this = $(this);
    $this.change(function (e) {
      e.preventDefault();
      $this.next().find('span').eq(0).html(this.value.split("\\").pop());
    });
  });


  $(document).on('click', function (event) {
    if (!$(event.target).closest('.dropdown-select').length) {
      $('.option-list, .search-box').hide();
    }
  });
  $('.select').click(function (event) {
    //$('.option-list, .search-box').hide();
    $(this).closest('.dropdown-select').find('.option-list, .search-box').toggle();
    $('.option-list a').click(function () {
      var select = $(this).text();
      $(this).closest('.dropdown-select').children('.select').text(select);
      $('.option-list, .search-box').hide();
    });
  });
  //Search
  $('.seach-control').keyup(function () {
    var val = $(this).val().toLowerCase();
    var list = $(this).closest('.dropdown-select').find('li')
    list.each(function () {
      var text = $(this).text().toLowerCase();
      if (text.indexOf(val) == -1) {
        $(this).hide();
      }
      else {
        $(this).show();
      }

    })

  });

});
