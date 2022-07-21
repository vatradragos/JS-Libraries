AOS.init();

var audio = new Audio("assets/bio/music/bio.mp3");

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

function show1(event) {
    document.getElementById("info-card-1").style.width = "50%";
    document.getElementById("info-1").style.display = "block";
    document.getElementById("info-1").style.width = "100%";
}

function show2(event) {
    document.getElementById("info-card-2").style.width = "50%";
    document.getElementById("info-2").style.display = "block";
    document.getElementById("info-2").style.width = "100%";
}

function show3(event) {
    document.getElementById("info-card-3").style.width = "50%";
    document.getElementById("info-3").style.display = "block";
    document.getElementById("info-3").style.width = "100%";
}

function show4(event) {
    document.getElementById("info-card-4").style.width = "50%";
    document.getElementById("info-4").style.display = "block";
    document.getElementById("info-4").style.width = "100%";
}

function show5(event) {
    document.getElementById("info-card-5").style.width = "50%";
    document.getElementById("info-5").style.display = "block";
    document.getElementById("info-5").style.width = "100%";
}

function show6(event) {
    document.getElementById("info-card-6").style.width = "50%";
    document.getElementById("info-6").style.display = "block";
    document.getElementById("info-6").style.width = "100%";
}

function show7(event) {
    document.getElementById("info-card-7").style.width = "50%";
    document.getElementById("info-7").style.display = "block";
    document.getElementById("info-7").style.width = "100%";
}

function show8(event) {
    document.getElementById("info-card-8").style.width = "50%";
    document.getElementById("info-8").style.display = "block";
    document.getElementById("info-8").style.width = "100%";
}