
 
$('.main').empty();

for (var a = [1, 2, 3, 4, 5, 6, 7, 8, 9], i = a.length; i--; ) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    $('.main').append('<div class="box">' + random + '</div>');
}

// more examples
// $('.box').each(function () {
//   var x = Math.floor((Math.random() * 9) + 1);
//   $(this).text(x)
// });

// setInterval(function() {
//   var number = 1 + Math.floor(Math.random() * 9);
//   $('.box').text(number);
// },
// 1000); // every 1 second





