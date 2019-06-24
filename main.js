var randomNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
randomNum.forEach(myFunction);

function myFunction(item) {
  document.getElementById("random-box").innerHTML =
  Math.floor(Math.random() * item);
}



