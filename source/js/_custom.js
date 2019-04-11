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
