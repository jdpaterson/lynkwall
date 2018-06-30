$(document).ready(function() {
  /*$.get('/api/v1/categories', (data) => {
    const categories = data;
  });*/


  $('.like-button').on('click', function(ev) {

      let data = {
        resourceid: ev.delegateTarget.dataset.res_id,
        // userid: loggedInUserId
        userid: 1
      };

      $.post(`/resources/${data.resourceid}/likes`, data);
      $(ev.delegateTarget).children('i').toggleClass('far');
      $(ev.delegateTarget).children('i').toggleClass('fas');
  });
})
