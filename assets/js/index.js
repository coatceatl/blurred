window.onscroll = function() {myScroll()};

var sticky = document.getElementById("sticky");
var topPos = sticky.offsetTop;
var botPos = sticky.offsetLeft;

function myScroll() {
  if (window.pageYOffset >= topPos) {
    sticky.classList.remove("sticky");
  } if (window.pageYOffset <= botPos) {
    sticky.classList.add("sticky");
  }
}
