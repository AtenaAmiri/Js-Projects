let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImg = randomNumber1 + ".png";
let randomImageSource = "/Dice/images/" + randomImg;
let img1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImg2 = randomNumber2 + ".png";
let randomImageSource2 = "/Dice/images/" + randomImg2;
let img2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
