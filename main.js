
// get all box rows
var arr = document.querySelectorAll('.box');
// loop over box array
arr.forEach( function(el){
  // generate random number
  var x = Math.floor((Math.random() * 9) + 1);
  // pass that number to element node
  el.innerText = x;
});



