var audio = new Audio("assets/home/music/home.mp3");

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

document.getElementById("menu-button").addEventListener("click", function(){
    document.getElementById("gallery-1").style.display = "grid";
    document.getElementById("gallery-2").style.display = "none";
    document.getElementById("gallery-3").style.display = "none";
    document.getElementById("menu-button").style.border = "none";
    document.getElementById("menu-button").style.transform = "scale(1.2)";
    document.getElementById("menu-button").style.filter = "grayscale(0)";
    document.getElementById("facts-button").style.border = "1px solid #fff";
    document.getElementById("facts-button").style.transform = "scale(1)";
    document.getElementById("facts-button").style.filter = "grayscale(1)";
    document.getElementById("memories-button").style.border = "1px solid #fff";
    document.getElementById("memories-button").style.transform = "scale(1)";
    document.getElementById("memories-button").style.filter = "grayscale(1)";
})

document.getElementById("facts-button").addEventListener("click", function(){
    document.getElementById("gallery-2").style.display = "grid";
    document.getElementById("gallery-1").style.display = "none";
    document.getElementById("gallery-3").style.display = "none";
    document.getElementById("facts-button").style.border = "none";
    document.getElementById("facts-button").style.transform = "scale(1.2)";
    document.getElementById("facts-button").style.filter = "grayscale(0)";
    document.getElementById("menu-button").style.border = "1px solid #fff";
    document.getElementById("menu-button").style.transform = "scale(1)";
    document.getElementById("menu-button").style.filter = "grayscale(1)";
    document.getElementById("memories-button").style.border = "1px solid #fff";
    document.getElementById("memories-button").style.transform = "scale(1)";
    document.getElementById("memories-button").style.filter = "grayscale(1)";
})

document.getElementById("memories-button").addEventListener("click", function(){
    document.getElementById("gallery-3").style.display = "grid";
    document.getElementById("gallery-1").style.display = "none";
    document.getElementById("gallery-2").style.display = "none";
    document.getElementById("memories-button").style.border = "none";
    document.getElementById("memories-button").style.transform = "scale(1.2)";
    document.getElementById("memories-button").style.filter = "grayscale(0)";
    document.getElementById("menu-button").style.border = "1px solid #fff";
    document.getElementById("menu-button").style.transform = "scale(1)";
    document.getElementById("menu-button").style.filter = "grayscale(1)";
    document.getElementById("facts-button").style.border = "1px solid #fff";
    document.getElementById("facts-button").style.transform = "scale(1)";
    document.getElementById("facts-button").style.filter = "grayscale(1)";
})