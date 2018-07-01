function createObj(arrInput){
  var obj = [];
  for( let i = 0; i < arrInput.length; i++){
    let id = arrInput[i].id;
    let value = arrInput[i].name;
    let newObj = {};
    newObj[id] = value;
    obj.push(newObj);
  }
  return obj;
 }

 function getUrlPreview(url){
   request(`http://api.linkpreview.net/?key=${urlPreviewKey}&q=${url}`,
     function (error, response, body) {
       const parsed = JSON.parse(body);
       return parsed;
     })
 }

 module.exports = {
   createObj: createObj,
   getUrlPreview: getUrlPreview,
 }
