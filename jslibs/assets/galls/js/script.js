var audio = new Audio("assets/galls/music/galls.mp3");

function play(event) {
  audio.play();
  document.getElementById("play").style.transform = "scale(1.3)";
  document.getElementById("pause").style.transform = "scale(0.9)";
};

function pause(event) {
  audio.pause();
  document.getElementById("pause").style.transform = "scale(1.3)";
  document.getElementById("play").style.transform = "scale(0.9)";
};

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  
  itemSelector: '.grid-item',
  columnWidth: 200
});

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

document.getElementById("button-1-1").addEventListener("click", function(){
  document.getElementById("header-container").style.display = "none";
  document.getElementById("header-hr").style.display = "none";
  document.getElementById("galls-container-1").style.display = "none";
  document.getElementById("footer-hr").style.display = "none";
  document.getElementById("footer-section").style.display = "none";
  document.getElementById("galls-container-2").style.display = "block";
})

document.getElementById("button-1-2").addEventListener("click", function(){
  document.getElementById("header-container").style.display = "none";
  document.getElementById("header-hr").style.display = "none";
  document.getElementById("galls-container-1").style.display = "none";
  document.getElementById("footer-hr").style.display = "none";
  document.getElementById("footer-section").style.display = "none";
  document.getElementById("galls-container-2").style.display = "block";
})

document.getElementById("button-2-1").addEventListener("click", function(){
  document.getElementById("galls-container-2").style.display = "none";
  document.getElementById("galls-container-1").style.display = "block";
  document.getElementById("header-container").style.display = "block";
  document.getElementById("header-hr").style.display = "block";
  document.getElementById("galls-container-1").style.display = "block";
  document.getElementById("footer-hr").style.display = "block";
  document.getElementById("footer-section").style.display = "block";
  
})

document.getElementById("button-2-2").addEventListener("click", function(){
  document.getElementById("galls-container-2").style.display = "none";
  document.getElementById("galls-container-1").style.display = "block";
  document.getElementById("header-container").style.display = "block";
  document.getElementById("header-hr").style.display = "block";
  document.getElementById("galls-container-1").style.display = "block";
  document.getElementById("footer-hr").style.display = "block";
  document.getElementById("footer-section").style.display = "block";
  
})