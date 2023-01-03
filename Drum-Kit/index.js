let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("/Drum-Kit/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("/Drum-Kit/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("/Drum-Kit/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("/Drum-Kit/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("/Drum-Kit/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("/Drum-Kit/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("/Drum-Kit/sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
