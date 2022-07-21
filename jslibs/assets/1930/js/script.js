var audio = new Audio("assets/1930/music/1930.mp3");

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