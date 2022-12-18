var readLineSync = require('readline-sync');
var score = 0;

function welcome(){
  var userName = readLineSync.question("What's your name? ");
  console.log("Welcome "+ userName+ " Get ready for the quiz");
  console.log();
}

//data structure for high scores
var highScores = [{
  name: "Ansh Gupta",
  score:10,
},{
  name: "Daenarys",
  score:9,
},{
  name: "Anubhav Bansal",
  score:8,
}];

//data structure for questions
var questions = [{
  question: "Ned Stark died in season?(answer in alphabets) ",
  answer: "one"
},{
  question: "Who laid the dispute between the Starks and the Lannisters that lead to the war? ",
  answer: "Petyr Baelish"
},{
  question: "Who was the real father of Joffery Baratheon? ",
  answer: "Jaime Lannister"
},{
  question: "Second name of Oberyn Martell? ",
  answer: "Red Viper"
},{
  question: "Who killed Tywin Lannister? ",
  answer: "Tyrion Lannister"
},{
  question: "How many Unsullied were under queen Daenarys command?(answer in alphabets) ",
  answer: "eight thousand"
},{
  question :"How many dragons did she had?(answer in alphabets) ",
  answer: "three"
},{
  question: "Who betrayed Robb stark? ",
  answer: "Lord Bolton"
},{
  question: "Who was the master of the Second Sons? ",
  answer: "Dario Naharis"
},{
  question: "What weapon was used to kill the White Walkers? ",
  answer: "Dragon glass"
}];

function play(question,answer){
var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct Answer");
    score=score+1;
  }
  else{
    console.log("Wrong Answer");
    }
  console.log("Your current score is "+score);
    console.log("_____________");
  
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}

  //function to display the scores
  function displayScore(){
    console.log();
    console.log("You scored - "+score);
    console.log("These are the high scores, if you surpassed them, then ping me up");
    for(var i=0; i<highScores.length; i++){
        var currentScores = highScores[i]
        console.log(currentScores.name);
        console.log(currentScores.score);
      }
    }
  
  welcome();
  game();
  displayScore();
  