// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  } else if(typeof obj === 'number'){
    return  obj + ""
  } else if(typeof obj === 'boolean'){
    return obj.toString();
  } else if(obj === null){
    return "null";
  } else if(typeof obj === 'function'){
    return;
  } else if(typeof obj === 'undefined'){
    return;
  }
  var JSONHolder = [];
  if(Array.isArray(obj)){
    if(obj.length){
      for(var i = 0; i < obj.length; i++){
          JSONHolder.push(stringifyJSON(obj[i]));
      }
    } else {
      return "[]";
  }
    return "[" + JSONHolder + "]";

  } else {
    if(Object.keys(obj).length){
      var output = '';
      for(var prop in obj){
        if(typeof obj[prop] === 'function' || typeof obj[prop] === 'undefined'){
          output += '{}';
          return output;
        }
        output += '"' + prop + '":' + stringifyJSON(obj[prop]) +  ',';

  }
      return '{' + output.slice(0,-1) + '}';
    } else {
      return '{}';
    }

  }
};
