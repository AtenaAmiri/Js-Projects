let wordList = [
  {
    word: "python",
    hint: "Programming language",
  },
  {
    word: "guitar",
    hint: "A musical instrument",
  },
  {
    word: "aim",
    hint: "A purpose or intention",
  },
  {
    word: "venus",
    hint: "Planet of our solar system",
  },
  {
    word: "gold",
    hint: "A yellow precious metal",
  },
  {
    word: "ebay",
    hint: "Online shopping site",
  },
  {
    word: "golang",
    hint: "Programming language",
  },
  {
    word: "coding",
    hint: "Related to programming",
  },
  {
    word: "matrix",
    hint: "Science fiction movie",
  },
  {
    word: "bugs",
    hint: "Related to programming",
  },
  {
    word: "avatar",
    hint: "Epic science fiction film",
  },
  {
    word: "gif",
    hint: "A file format for image",
  },
  {
    word: "mental",
    hint: "Related to the mind",
  },
  {
    word: "map",
    hint: "Diagram represent of an area",
  },
  {
    word: "island",
    hint: "Land surrounded by water",
  },
  {
    word: "hockey",
    hint: "A famous outdoor game",
  },
  {
    word: "chess",
    hint: "Related to a indoor game",
  },
  {
    word: "viber",
    hint: "A social media app",
  },
  {
    word: "github",
    hint: "Code hosting platform",
  },
  {
    word: "png",
    hint: "A image file format",
  },
  {
    word: "silver",
    hint: "Precious greyish-white metal",
  },
  {
    word: "mobile",
    hint: "An electronic device",
  },
  {
    word: "gpu",
    hint: "Computer component",
  },
  {
    word: "java",
    hint: "Programming language",
  },
  {
    word: "google",
    hint: "Famous search engine",
  },
  {
    word: "venice",
    hint: "Famous city of waters",
  },
  {
    word: "excel",
    hint: "Microsoft product for windows",
  },
  {
    word: "mysql",
    hint: "A relational database system",
  },
  {
    word: "nepal",
    hint: "Developing country name",
  },
  {
    word: "flute",
    hint: "A musical instrument",
  },
  {
    word: "crypto",
    hint: "Related to cryptocurrency",
  },
  {
    word: "tesla",
    hint: "Unit of magnetic flux density",
  },
  {
    word: "mars",
    hint: "Planet of our solar system",
  },
  {
    word: "proxy",
    hint: "Related to server application",
  },
  {
    word: "email",
    hint: "Related to exchanging message",
  },
  {
    word: "html",
    hint: "Markup language for the web",
  },
  {
    word: "air",
    hint: "Related to a gas",
  },
  {
    word: "idea",
    hint: "A thought or suggestion",
  },
  {
    word: "server",
    hint: "Related to computer or system",
  },
  {
    word: "svg",
    hint: "A vector image format",
  },
  {
    word: "jpeg",
    hint: "A image file format",
  },
  {
    word: "search",
    hint: "Act to find something",
  },
  {
    word: "key",
    hint: "Small piece of metal",
  },
  {
    word: "egypt",
    hint: "A country name",
  },
  {
    word: "joker",
    hint: "Psychological thriller film",
  },
  {
    word: "dubai",
    hint: "Developed country name",
  },
  {
    word: "photo",
    hint: "Representation of person or scene",
  },
  {
    word: "nile",
    hint: "Largest river in the world",
  },
  {
    word: "rain",
    hint: "Related to a water",
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
button.addEventListener("click", () => {
  window.location.reload();
});
document.addEventListener("keydown", () => typingInput.focus());
typingInput.addEventListener("input", initGame);
