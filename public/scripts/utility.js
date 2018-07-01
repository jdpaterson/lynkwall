
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

   module.exports = createObj;