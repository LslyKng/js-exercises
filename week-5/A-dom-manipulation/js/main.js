// click button changes jumbotron colour//

var background = document.querySelector("#bgrChangeBtn");

background.addEventListener("click", function() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "blue";
});

//click alert button brings up text//

var myBtn = document.querySelector("#alertBtn");

myBtn.addEventListener("click", function() {
  alert("Welcome!");
});

//click add text button adds test to jumbotron//
var newText = document.querySelector("#addTextBtn");

newText.addEventListener("click", function(event) {
  var newParagraph = document.createElement("p");
  newParagraph.innerText = "Beautiful code Rares!";

  var jumbotron = document.querySelector("#jumbotron-text");
  jumbotron.appendChild(newParagraph);
  event.preventDefault();
});
