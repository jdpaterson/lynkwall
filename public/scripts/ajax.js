$(document).ready(function(){
  $('.like-button').children('.fas').hide();
  $('.like-button').on('click', function(ev){
    let resourceId = ev.delegateTarget.dataset.res_id;
    /*$.ajax(`/${res_id}/likes`, {
          method: 'POST',
      }).done(function(){
        $('#new-tweet').hide(200);
        getTweets();
      });*/
    $(ev.delegateTarget).children('.far').hide();
    $(ev.delegateTarget).children('.fas').fadeIn();
  });
})
