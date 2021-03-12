$(document).ready(function(){
 

  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
        
  $("#myCarousel").carousel({wrap: false});

  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

/*---------------------------------------------------------------------about----*/

document.querySelector('#about-button').addEventListener('click', toggle)

function toggle(event) {
    if (document.getElementById('about-button').style.display == 'none') {
    event.target.innerText = 'About'
    document.getElementById('about-button').style.display = ''
  } else {
    event.target.innerText = 'About'
    document.getElementById('about-button').style.display = 'none'
  }
}

/*--------------------------------------------------Fullscreen--*/
/*funtion does not work inside carousel div, needs to be linked to a button outside in the main HTML body*/

var elem = document.getElementById("myCarousel");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}


/*---------------------------------------------------audio*/
/*---- A simple audio function that allows the user to click on the chosen image and play an audio file--*/
/*---- Format for inserting audio into HTML element is - onclick="playAudio('#.mp3')"---*/

function playAudio(url) {
  new Audio(url).play().volume=.5;
};

/*---------------------------------------------------quiz*/
/*-------------------------------------------------------*/

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

/*--------adds score with correct answers---*/
Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

/*------starts question--*/
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        var gameOverHTML = "<h1>Thanks for playing!</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
//Create Questions
var questions = [
    new Question("What food does Michael think of in the car?", [ "Bangers and mash", "Chocolate and sweets", "Pudding and mince pies", "Turkey and ham" ], "Pudding and mince pies"),
    new Question("Where did Tom hide his sprouts?", ["His underwear","Tucked away in his socks", "He fed the dog", "He threw them on the floor"], "Tucked away in his socks"),
    new Question("What is Michael's dog's name?", ["Bonzo","Gonzo", "Kermit", "Kate"], "Bonzo"),
    new Question("Who threw their sprouts down the toilet?", ["Kate","Gran", "Michael", "Tom"], "Michael"),
    new Question("Who ate the most sprouts?", ["Tom","Michael", "Bonzo", "Stephanie"], "Bonzo")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();

