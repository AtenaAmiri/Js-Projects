let wordList = [
  {
    word: "python",
    hint: "programming language",
  },
  {
    word: "guitar",
    hint: "a musical instrument",
  },
  {
    word: "aim",
    hint: "a purpose or intention",
  },
  {
    word: "venus",
    hint: "planet of our solar system",
  },
  {
    word: "gold",
    hint: "a yellow precious metal",
  },
  {
    word: "ebay",
    hint: "online shopping site",
  },
  {
    word: "golang",
    hint: "programming language",
  },
  {
    word: "coding",
    hint: "related to programming",
  },
  {
    word: "matrix",
    hint: "science fiction movie",
  },
  {
    word: "bugs",
    hint: "related to programming",
  },
  {
    word: "avatar",
    hint: "epic science fiction film",
  },
  {
    word: "gif",
    hint: "a file format for image",
  },
  {
    word: "mental",
    hint: "related to the mind",
  },
  {
    word: "map",
    hint: "diagram represent of an area",
  },
  {
    word: "island",
    hint: "land surrounded by water",
  },
  {
    word: "hockey",
    hint: "a famous outdoor game",
  },
  {
    word: "chess",
    hint: "related to a indoor game",
  },
  {
    word: "viber",
    hint: "a social media app",
  },
  {
    word: "github",
    hint: "code hosting platform",
  },
  {
    word: "png",
    hint: "a image file format",
  },
  {
    word: "silver",
    hint: "precious greyish-white metal",
  },
  {
    word: "mobile",
    hint: "an electronic device",
  },
  {
    word: "gpu",
    hint: "computer component",
  },
  {
    word: "java",
    hint: "programming language",
  },
  {
    word: "google",
    hint: "famous search engine",
  },
  {
    word: "venice",
    hint: "famous city of waters",
  },
  {
    word: "excel",
    hint: "microsoft product for windows",
  },
  {
    word: "mysql",
    hint: "a relational database system",
  },
  {
    word: "nepal",
    hint: "developing country name",
  },
  {
    word: "flute",
    hint: "a musical instrument",
  },
  {
    word: "crypto",
    hint: "related to cryptocurrency",
  },
  {
    word: "tesla",
    hint: "unit of magnetic flux density",
  },
  {
    word: "mars",
    hint: "planet of our solar system",
  },
  {
    word: "proxy",
    hint: "related to server application",
  },
  {
    word: "email",
    hint: "related to exchanging message",
  },
  {
    word: "html",
    hint: "markup language for the web",
  },
  {
    word: "air",
    hint: "related to a gas",
  },
  {
    word: "idea",
    hint: "a thought or suggestion",
  },
  {
    word: "server",
    hint: "related to computer or system",
  },
  {
    word: "svg",
    hint: "a vector image format",
  },
  {
    word: "jpeg",
    hint: "a image file format",
  },
  {
    word: "search",
    hint: "act to find something",
  },
  {
    word: "key",
    hint: "small piece of metal",
  },
  {
    word: "egypt",
    hint: "a country name",
  },
  {
    word: "joker",
    hint: "psychological thriller film",
  },
  {
    word: "dubai",
    hint: "developed country name",
  },
  {
    word: "photo",
    hint: "representation of person or scene",
  },
  {
    word: "nile",
    hint: "largest river in the world",
  },
  {
    word: "rain",
    hint: "related to a water",
  },
];
const inputs = document.querySelector(".inputs");
const button = document.querySelector("button");
const hint = document.querySelector(".hint span");
const guessLeft = document.querySelector(".guess-left span");
const typingInput = document.querySelector(".typing-input");
const wrongLetter = document.querySelector(".wrong-letter span");
let word;
let maxGuesses;
let incorrect = [];
let correct = [];
function randomWord() {
  // getting random object from wordList
  let length = wordList.length;
  let ranObj = wordList[Math.floor(Math.random() * length)];
  word = ranObj.word; // getting word if random object
  maxGuesses = 10; // by default maxGuesses value is 8
  console.log(word);
  //show the hint of the word
  hint.innerHTML = ranObj.hint;
  // guessLeft.innerHTML = maxGuesses;
  // create inputs tag according to the word length
  let html = "";
  for (let i = 0; i < word.length; i++) {
    //= >>> +=
    html += `<input type="text" disabled />`;
  }
  inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
  let key = e.target.value;
  //valid uer pressed key id alphabet character or number
  //strict user from typing same key twice
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrect.includes(` ${key} `) &&
    !correct.includes(key) &&
    key !== ""
  ) {
    console.log(key);
    if (word.includes(key)) {
      //if user letter found in the word
      for (let i = 0; i < word.length; i++) {
        //showing matched letter in the input value
        if (word[i] === key) {
          correct.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrect.push(` ${key} `);
    }
  }
  guessLeft.innerHTML = maxGuesses;
  //show wrong letter
  wrongLetter.innerText = incorrect;
  //empty the input tag once entered any key
  typingInput.value = "";
  setTimeout(() => {
    if (correct.length === word.length) {
      alert(`Congrats 😍 ! You found the word ${word}.`);
    } else if (maxGuesses < 1) {
      alert("Game Over 🤕 !");
      for (let i = 0; i < word.length; i++) {
        //show all letters in the input
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 1000);
}
//get random word on button click
button.addEventListener("click", randomWord);
document.addEventListener("keydown", () => typingInput.focus());
typingInput.addEventListener("input", initGame);
