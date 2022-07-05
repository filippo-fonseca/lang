var fs = require("fs");

let returnIt = "";

let setLimit = 1;

for (let i = 0; i < setLimit; i++) {
  // Verbs
  var randomVerb = function (words) {
    let readME = fs.readFileSync("dictionary/verbs.txt", "utf8");
    let wordArr = readME.split(", ");

    words = words > wordArr.length ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++) {
      let newRandom;
      do {
        let rand = Math.floor(Math.random() * wordArr.length);
        newRandom = wordArr[rand];
      } while (randWords.includes(newRandom));

      randWords.push(newRandom);
    }
    return randWords.join(", ");
  };
  // Nouns
  var randomNoun = function (words) {
    let readME = fs.readFileSync("dictionary/nouns.txt", "utf8");
    let wordArr = readME.split(", ");

    words = words > wordArr.length ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++) {
      let newRandom;
      do {
        let rand = Math.floor(Math.random() * wordArr.length);
        newRandom = wordArr[rand];
      } while (randWords.includes(newRandom));

      randWords.push(newRandom);
    }
    return randWords.join(", ");
  };

  // Articles
  var randomArt = function (words) {
    let readME = fs.readFileSync("dictionary/articles.txt", "utf8");
    let wordArr = readME.split(", ");

    words = words > wordArr.length ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++) {
      let newRandom;
      do {
        let rand = Math.floor(Math.random() * wordArr.length);
        newRandom = wordArr[rand];
      } while (randWords.includes(newRandom));

      randWords.push(newRandom);
    }
    return randWords.join(", ");
  };

  // Articles 2
  var randomArt2 = function (words) {
    let readME = fs.readFileSync("dictionary/art2.txt", "utf8");
    let wordArr = readME.split(", ");

    words = words > wordArr.length ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++) {
      let newRandom;
      do {
        let rand = Math.floor(Math.random() * wordArr.length);
        newRandom = wordArr[rand];
      } while (randWords.includes(newRandom));

      randWords.push(newRandom);
    }
    return randWords.join(", ");
  };

  // Adjectives
  var randomAdj = function (words) {
    let readME = fs.readFileSync("dictionary/adjectives.txt", "utf8");
    let wordArr = readME.split(", ");

    words = words > wordArr.length ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++) {
      let newRandom;
      do {
        let rand = Math.floor(Math.random() * wordArr.length);
        newRandom = wordArr[rand];
      } while (randWords.includes(newRandom));

      randWords.push(newRandom);
    }
    return randWords.join(", ");
  };

  function combineIt() {
    let nounPhrase =
      randomArt2(1) + " " + randomAdj(1) + " " + randomNoun(1) + " ";
    let verbPhrase =
      randomVerb(1) +
      " " +
      randomArt(1) +
      " " +
      randomAdj(1) +
      " " +
      randomNoun(1) +
      ". ";

    return nounPhrase + verbPhrase;
  }

  returnIt = returnIt + combineIt();

  const getMarkovVariation = () => {
    const markovChain = {};
    const textArr = returnIt.split(" ");
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].toLowerCase().replace(/[\W_]/, "");
      if (!markovChain[word]) {
        markovChain[word] = [];
      }
      if (textArr[i + 1]) {
        markovChain[word].push(
          textArr[i + 1].toLowerCase().replace(/[\W_]/, "")
        );
      }
    }
    const words = Object.keys(markovChain);
    let word = words[Math.floor(Math.random() * words.length)];
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result += word + " ";
      let newWord =
        markovChain[word][Math.floor(Math.random() * markovChain[word].length)];
      word = newWord;
      if (!word || !markovChain.hasOwnProperty(word))
        word = words[Math.floor(Math.random() * words.length)];
    }
    console.log("MARKOV: " + result);
  };

  getMarkovVariation();
}

returnIt = "ORIGINAL: " + returnIt + ".";

console.log(returnIt);
