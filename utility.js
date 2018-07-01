
  function createObj(users, comments){

    let obj = {};
    for( let i = 0; i < users.length; i++){      
      console.log(users[i]);
      obj[ users[i].id ] = {        
          userName: users[i].name,          
        }
    }
console.log(obj);
    for (let i = 0; i < comments.length; i++){
      
      obj[comments[i].user_id].commentText = comments[i].comment_text;
    }
    console.log(obj)
    return obj;
   }

   module.exports = {
    createObj : createObj
   }