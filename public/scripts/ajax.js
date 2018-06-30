$(document).ready(function() {

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
})
