var readlineSync = require("readline-sync");
var score = 0;

// welcome user ....................................................
var user = readlineSync.question("What is your name?");
console.log("Welcome " + user + "to--How well do you know me!");

// play quiz function...............................................
function Quiz(question, answer) {
  var uanswer = readlineSync.question(question);

  if (uanswer.split(" ").join("").toUpperCase() === answer.split(" ").join("").toUpperCase()) {
    console.log("you are right!");
    score++;
  } else {
    console.log("you are wrong!");
  }
  console.log("current score:" + score);
  console.log("_________________");
}

// question stack...................................................
var ques = [{
  question: "What is my full name?",
  answer: "Jugesh Raghav"
},
{
  question: "Where do I live?",
  answer: "Delhi"
},
{
  question: "Namemy favourite city.",
  answer: "Rajasthan"
},
{
  question: "Name my favourite bird.",
  answer: "Peacock"
},
{
  question: "What is my favourite color?",
  answer: "sea green"
}]


for (var i = 0; i < 5; i++) {
  Quiz(ques[i].question, ques[i].answer);
}



console.log("final score: ", score);

