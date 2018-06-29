$(document).ready(function() {

  $('.like-button').on('click', function(ev) {

      let data = {
        resourceid: ev.delegateTarget.dataset.res_id,
      };

      $.post(`/resources/${data.resourceid}/likes`, data);
      $(ev.delegateTarget).children('i').toggleClass('far');
      $(ev.delegateTarget).children('i').toggleClass('fas');
  });
})
