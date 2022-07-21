AOS.init();

var audio = new Audio("assets/feedback/music/feedback.mp3");

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

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
});

function color1(event) {
  document.getElementById("symbol-1").style.color = "#571913";
  document.getElementById("symbol-2").style.color = "#fff";
  document.getElementById("symbol-3").style.color = "#fff";
}

function color2(event) {
  document.getElementById("symbol-1").style.color = "#fff";
  document.getElementById("symbol-2").style.color = "#571913";
  document.getElementById("symbol-3").style.color = "#fff";
}

function color3(event) {
  document.getElementById("symbol-1").style.color = "#fff";
  document.getElementById("symbol-2").style.color = "#fff";
  document.getElementById("symbol-3").style.color = "#571913";
}

if (typeof(Storage) !== "undefined") {
  document.getElementById("user").innerHTML = localStorage.getItem("firstname");
  } else {
  document.getElementById("user").innerHTML = "visitor";
  }

function send(event) {
  document.getElementById("feedback-container").style.display = "none";
  document.getElementById("thanks-container").style.display = "block";
}