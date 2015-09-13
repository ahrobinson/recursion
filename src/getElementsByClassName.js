// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
    var matches = [];
    var doc = document;
    function recursive(docNodes){
      /*traverse element childNodes. Non-elements have classList, but is undefined
      so you must check for that or you will get a TypeError
      */
      for(var i = 0; i < docNodes.childNodes.length; i++){
        if(docNodes.childNodes[i].classList !== undefined && docNodes.childNodes[i].classList.contains(className)){
          matches.push(docNodes.childNodes[i]);
        }
        /*If childNodes have childNodes and they are not undefined, traverse those.
        Note: childNodes accesses both elements and non-elements. The non-elements
        have nodes as well but they are undefined so you must check for that.
        */
        if(docNodes.childNodes[i].childNodes[0] !== undefined){
          recursive(docNodes.childNodes[i]);
        }
      }
    }
    //when you pass in a className, it starts the search with the document
    recursive(doc);
    console.log(matches);
    return matches;
};
