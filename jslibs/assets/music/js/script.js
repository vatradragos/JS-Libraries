var audio = new Audio("assets/music/music/music.mp3");

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

mybutton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function(){
  
  $(".modais").iziModal({
    history: false,
    iframe : true,
    fullscreen: true,
    headerColor: '#000000',
    group: 'group1',
    loop: true
  });
  
})