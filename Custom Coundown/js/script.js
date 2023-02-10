const countdownForm = document.getElementById("countdownForm");
const inputContainer = document.getElementById("input-container");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
console.log(countdownDate + "!!!!!");
//Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
//Take Values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  //Get number version of current date,updateDom
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
}
//Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
