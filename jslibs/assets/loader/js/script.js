function play() {
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("btn-container").style.display = "none";
    document.getElementById("load-container").style.display = "block";

    setTimeout(function(){ 
        window.open("index.html", "_self"); 
      }, 55000);
  }