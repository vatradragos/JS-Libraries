var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "assets/index/music/index.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})

const questions = [
    { question: 'Your First Name' },
    { question: 'Your Last Name' },
    { question: 'Your Email', pattern: /\S+@\S+\.\S+/ },
    { question: 'Create A Password', type: 'password' }
  ];
  
  const shakeTime = 100;
  const switchTime = 200;
  
  let position = 0;
  
  const formBox = document.querySelector('#form-box');
  const nextBtn = document.querySelector('#next-btn');
  const prevBtn = document.querySelector('#prev-btn');
  const inputGroup = document.querySelector('#input-group');
  const inputField = document.querySelector('#input-field');
  const inputLabel = document.querySelector('#input-label');
  const inputProgress = document.querySelector('#input-progress');
  const progress = document.querySelector('#progress-bar');
  
  document.addEventListener('DOMContentLoaded', getQuestion);
  
  nextBtn.addEventListener('click', validate);
  
  inputField.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
      validate();
    }
  });
  
  function getQuestion() {
    inputLabel.innerHTML = questions[position].question;
    inputField.type = questions[position].type || 'text';
    inputField.value = questions[position].answer || '';
  
    progress.style.width = (position * 100) / questions.length + '%';
  
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';
  
    showQuestion();
  }
  
  function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
  }
  
  function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
  }
  
  function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  function validate() {
    if (!inputField.value.match(questions[position].pattern || /.+/)) {
      inputFail();
    } else {
      inputPass();
    }
  }
  
  function inputFail() {
    formBox.className = 'error';
    for (let i = 0; i < 6; i++) {
      setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
      setTimeout(transform, shakeTime * 6, 0, 0);
      inputField.focus();
    }
  }
  
  function inputPass() {
    formBox.className = '';
    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 0);
  
    questions[position].answer = inputField.value;
  
    position++;
  
    if (questions[position]) {
      hideQuestion();
      getQuestion();
    } else {
      hideQuestion();
      formBox.className = 'close';
      progress.style.width = '100%';
      formComplete();
    }
  }

  function formComplete() {
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(
      document.createTextNode(
        `Thanks, ${
          questions[0].answer 
        } !`
      )
    );
    setTimeout(() => {
      formBox.parentElement.appendChild(h1);
      setTimeout(() => (h1.style.opacity = 1), 50);
    }, 1000);
    document.getElementById("button").style.display = "block";
    document.getElementById("button").style.margin = "0 auto";
    document.getElementById("button").style.marginTop = "20px";

    document.getElementById("logo").style.display = "none";
    document.getElementById("table-container").style.display = "block";
    document.getElementById("table-container").style.animationName = "fadeIn";
    document.getElementById("table-container").style.animationDuration = "3s";

    var number = Math.floor(Math.random() * 99);
    var number1 = document.getElementById("number-1");
    var number2 = document.getElementById("number-2");
    number1.innerHTML = number;
    number2.innerHTML = number;

    var fname = localStorage.setItem("firstname", questions[0].answer);
    var lname = localStorage.setItem("lastname", questions[1].answer);
    var email = localStorage.setItem("email", questions[2].answer);
    var password = localStorage.setItem("password", questions[3].answer);
    var d = new Date().toLocaleString();
    var time = localStorage.setItem("time", d);

    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    var mail = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    var date = localStorage.getItem("time");

    document.getElementById("fname").innerHTML = firstname;
    document.getElementById("lname").innerHTML = lastname;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("password").innerHTML = pass;
    document.getElementById("time").innerHTML = date;
  }



document.getElementById("button").addEventListener("click", function(){
  location.href = "home.html";
})

if (typeof(Storage) !== "undefined") {
  localStorage.setItem("firstname", questions[0].answer);
  } else if (typeof(Storage) === firstname) {
    window.open("home.html", "_self"); 
  }