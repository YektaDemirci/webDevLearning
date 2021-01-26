
var numOfDrums = document.querySelectorAll(".drum").length

// Not like 1 shot, but more like; linked for the all time
for(var i=0; i<numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

    var buttonInnerHTML = this.innerHTML;

    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
}

document.addEventListener("keypress",function(event){

  sound(event.key);
  buttonAnimation(event.key);

});


function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;

    default:
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100)
}

// this.style.color="white";
// alert("I got clicked ehehehe!");
// audio.play();
