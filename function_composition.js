const R = require("./rambda.min.js");

const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

const splitSentence = (sentence) => {
  return sentence.split("");
};

const extractNumbers = (splittedSentence) => {
  return splittedSentence.filter((char) => {
    return !isNaN(char) && char !== " ";
  });
};

const countWords = R.compose(R.length, extractNumbers, splitSentence);

const result = countWords(sentence);

console.log(result);
