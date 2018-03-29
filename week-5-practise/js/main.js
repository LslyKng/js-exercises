//blue button//

var myBtn = document.querySelector("#blueBtn");

myBtn.addEventListener("click", function() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = `#588fbd`;

  var donateBtn = document.querySelector("#donate");
  donateBtn.style.backgroundColor = `#ffa500`;

  var volunteerBtn = document.querySelector("#volunteer");
  volunteerBtn.style.backgroundColor = `black`;
  volunteerBtn.style.color = "white";
});

//orange button//

var myBtn = document.querySelector("#orangeBtn");

myBtn.addEventListener("click", function() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = `#f0ad4e`;

  var donateBtn = document.querySelector("#donate");
  donateBtn.style.backgroundColor = `#5751fd`;

  var volunteerBtn = document.querySelector("#volunteer");
  volunteerBtn.style.backgroundColor = `#31b0d5`;
  volunteerBtn.style.color = "white";
});

//green button//
var myBtn = document.querySelector("#greenBtn");

myBtn.addEventListener("click", function() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = `#87ca8a`;

  var donateBtn = document.querySelector("#donate");
  donateBtn.style.backgroundColor = `black`;

  var volunteerBtn = document.querySelector("#volunteer");
  volunteerBtn.style.backgroundColor = `black`;
  volunteerBtn.style.color = "#8c9c08";
});

// var background = document.querySelector("#bgrChangeBtn");

// background.addEventListener("click", function() {
//   var jumbotron = document.querySelector(".jumbotron");
//   jumbotron.style.backgroundColor = "blue";
// });
