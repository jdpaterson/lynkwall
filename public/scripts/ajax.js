$(document).ready(function() {
  $('.like-button').on('click', function(ev) {
      //console.log(ev.delegateTarget.dataset.res_id);
      let data = {
        resourceid: ev.delegateTarget.dataset.res_id,
        userid: 1
      };

      $.post(`/resources/${data.resourceid}/likes`, data);

      $(ev.delegateTarget).children('i').toggleClass('far');
      $(ev.delegateTarget).children('i').toggleClass('fas');

  });
})
