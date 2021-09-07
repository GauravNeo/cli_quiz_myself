var readLineSync = require("readline-sync");

var userName = readLineSync.question("What's you name mate ? ");
console.log(userName + " !!! Welcome to know DO YOU KNOW GAURAV GAME");
console.log("*******************************************************");


var questions = [
  {
    question : "What is my Surname ? ",
    answer : "Nanda"
  },
  {
    question : "Which company I work in ? ",
    answer : "FIL"
  },
  {
    question : "Am I married ? ",
    answer : "Yes"
  },
  {
    question : "Favourite Color ? ",
    answer : "Blue"
  },
  {
    question : "Current city ? ",
    answer : "Hyderabad"
  },
  {
    question : "Favourite Food ? ",
    answer : "Biryani"
  }
];

var score = 0;
function playGame(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score = score + 1;
    console.log("Correct Answer :) " + " " + "Your Updated Score " + score);
  }else{
    console.log("Wrong Answer :( " + " " + "Your Updated Score " + score);
  }
}

for(var i = 0 ; i< questions.length; i++){
  playGame(questions[i].question, questions[i].answer)
}

console.log("#############################################################");

if(score>=3){
  console.log("Score : " + score + "  .....wooow mate , you know me well");
}else{
  console.log("Score : " + score + "  .....lets catch up soon");
}

console.log("#############################################################");

