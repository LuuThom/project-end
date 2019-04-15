import PerfectScrollbar from "perfect-scrollbar";

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
  // Js crollbar notifi
  var scroll = document.querySelector('.js-list-notifi');
  var ps = new PerfectScrollbar(scroll);
  const ps = new PerfectScrollbar('.js-list-notifi', {
    wheelPropagation: false,
  });

  // sparkline
  $('#spark1').sparkline([0,5,3,7,5,10,3,6,10], { 
    type:'line',
    pointDot: false,
    spotColor: false,
    minSpotColor: false,
    maxSpotColor: false,
    highlightLineColor: 'blue',
    highlightSpotColor: 'blue',
    fillColor: false,
    width: '85',
    height: '35',
  });
  $('#spark2').sparkline([5,8,7,10,9,10,8,6,4,6,8,7,6,8], { 
    type:'bar', barColor:'#fbbc05',
    pointDot: false,
    spotColor: false,
    minSpotColor: false,
    maxSpotColor: false,
    fillColor: false,
    highlightColor: '#fbbc05',
    width: '81',
    height: '35',
  });
  $('#spark3').sparkline([2,3,4,5,4,3,2,3,4,5,4,3,2,3,4,5,4,3,2], { 
    type:'discrete', lineColor: '#007f00',
    pointDot: false,
    spotColor: false,
    minSpotColor: false,
    maxSpotColor: false,
    fillColor: false,
    highlightColor: '#007f00',
    width: '85',
    height: '35',
  });
  $('#spark4').sparkline([0,5,3,7,5,10,3,6,10], { 
    type:'line',
    lineColor: 'red',
    pointDot: false,
    spotColor: false,
    minSpotColor: false,
    maxSpotColor: false,
    fillColor: false,
    highlightSpotColor: 'red',
    width: '85',
    height: '35',
    lineHeight: '10',
  });
  
  // countup
  $('#number').counterUp({
    delay: 10,
    time: 1000
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