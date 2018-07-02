function createCommentsObj(users, comments){
  const userObj = {};
  const commentsObj = {};

  for( let i = 0; i < users.length; i++){
    userObj[users[i].id] = users[i].name
  }

  for (let comment of comments){
    commentsObj[comment.comment_id] = {
      commentText : comment.comment_text,
      userName : userObj[comment.user_id],
    }
    console.log(commentsObj);
  }

  console.log('OBJ:', commentsObj);
  return commentsObj;
 }

 function getUrlPreview(url){
   request(`http://api.linkpreview.net/?key=${urlPreviewKey}&q=${url}`,
     function (error, response, body) {
       const parsed = JSON.parse(body);
       return parsed;
     })
 }

 module.exports = {
   createCommentsObj: createCommentsObj,
   getUrlPreview: getUrlPreview,
 }
