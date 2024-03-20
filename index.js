// var coll = document.getElementById("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

$('.menu-icon').click(function(){
  $('.main-menu').animate({width: 'toggle'});
});

$('.explore-arrow-icon').click(function(){
  $('.main-menu').animate({width: 'toggle'});
});