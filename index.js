

$('.menu-icon').click(function(){
  $('.main-menu').toggle();
});

$('.explore-arrow-icon').click(function(){
  $('.main-menu').toggle();
});




// modal
var modal1 = document.getElementById("browse-colelction-modal");
// Get the <span> element that closes the modal
var cta = document.getElementsByClassName("cta")[0];
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

cta.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}