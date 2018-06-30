$(document).ready(function() {

  $('#primary-menu').on(
  'show.zf.dropdownmenu', function() {
    var dropdown = $(this).find('.is-dropdown-submenu');
    dropdown.css('display', 'none');
    dropdown.fadeIn('slow');
  });
  $('#primary-menu').on(
    'hide.zf.dropdownmenu', function() {
      var dropdown = $(this).find('.is-dropdown-submenu');
      dropdown.css('display', 'inherit');
      dropdown.fadeOut('slow');
  });
  $('.has-submenu .menu li').hover(
    function(){
      $(this).css('background-color', '#bababa');
    },
    function(){
      $(this).css('background-color', '#e6e6e6');
    }
)

  $('.like-button').on('click', function(ev) {
      const loggedInUserId = 1;
      let data = {
        resourceid: ev.delegateTarget.dataset.res_id,
        userid: loggedInUserId
        // userid: 1
      };

      $.post(`/resources/${data.resourceid}/likes`, data);
      $(ev.delegateTarget).children('i').toggleClass('far');
      $(ev.delegateTarget).children('i').toggleClass('fas');
  });

  $('.rating input').change(function () {
    var $radio = $(this);
    $('.rating .selected').removeClass('selected');
    $radio.closest('label').addClass('selected');
  });
})
