//create variables to reference timer elements 
var startElement = document.querySelector(".startButton");
var timeElement = document.querySelector(".timer");
var questionDiv = document.querySelector(".main")
var titleDiv = document.querySelector("#quizTitle");
var questionEl = document.querySelector("#questionP");

// titleDiv.textContent = "Coding Quiz Challenge";
// questionEl.textContent = "Try to answer all the questions correctly. Keep your eye on th time. Watch out! Answering wrong makes time go faster";

//when start button is clicked, call fucntions to run timer and and load question page
function startQuiz() {
    startElement.addEventListener("click", function(){
        beginCountDown();
        // <!-- call function to load questions-->
        handleQuestions();
        console.log("start button pushed")
    });
}
startQuiz();

//create variable that holds value for count down time (countDown)
var countDown = 75;
//write function to begin countdown (beginCountDown)
function beginCountDown() {
//set arguments for beginCountDown function (function, interval in milliseconds)
//declare variable to reference function that will decrement time
    var timerInterval = setInterval(function() {
//decrement countDown
        countDown--;
//change text content to display count down decrement
        timeElement.textContent =  "Time remaining: " + countDown;
//check is count down has expired
//if countDown has expired, clear and run score page
        if(countDown === 0) {
         
          clearInterval(timerInterval);
        }
    
      }, 1000);

}

// console.log(beginCountDown());
//create variables to append into html
var newQuestion = document.createElement("h2");
var multipleChoiceOptions = document.createElement("ul");


//create function to be called when start button is clicked to load questions page
function handleQuestions(){
//when start button is clicked, change contents of div class main
    questionDiv.textContent = "Change to a question example"
//text content changes to h2 element stating question
    newQuestion.textContent ="This is a new quesation example"
    questionDiv.appendChild(newQuestion);
//iterate through questions array to change questions 
//append new div into div class main (div class answers)
//append ul element into div class answers
//append li elements to dvi class answers ul to load mutliple choice responses
    multipleChoiceOptions.textContent = "multiple choice options go here"
    questionDiv.appendChild(multipleChoiceOptions);
//iterate through answers array to change multiple choice responses
};
//create click event to deteremine which answers user has selected 
//if answer selected in correct, alert correct and increment score
//else alert wrong and decrement countDown
//when quiz is complete (all questions answered/time runs out) display score
//prompt user for initials
//set value of score and intials in highscore page
