$(document).ready(function() {

  $('.like-button').on('click', function(ev) {

      let data = {
        resourceid: ev.delegateTarget.dataset.res_id,
<<<<<<< HEAD
        // userid: loggedInUserId
        userid: 1
=======
>>>>>>> 86ea1e724e0581e26a79c99a92e4f78e807a13ed
      };

      $.post(`/resources/${data.resourceid}/likes`, data);
      $(ev.delegateTarget).children('i').toggleClass('far');
      $(ev.delegateTarget).children('i').toggleClass('fas');
  });
})
