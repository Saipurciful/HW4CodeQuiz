# HW4CodeQuiz
## About The Code Quiz Assignment.
This assignment is about building a timed coding quiz  (on basic JavaScript fundamental) with multiple-choice questions. It's also stores high scores. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I created. 
## How the app works?
* When a user clicks the <button>Start Quiz</button> button, the app will present the user with multiple-choice questions, and the timer will start counting down.

<img src= "./images/start.png"><br>

<img src= "./images/question.png"><br>
* If the user clicks a wrong answer, the timer will be deleted 10 seconds.

<img src= "./images/wrong answer.png"><br>
* After the user answered all the questions, the time remaining is the user's score .
* After the user answered all the questions or the timer reaches 0, the game is over.
* After the user answered all the questions, the app will present the user with <strong style="color: purple;">"Game Over!"</strong> page which will show the user's scores and the user will be able to input their initials to be stored along with their scores.

<img src= "./images/gameOver.png"><br>
* After the user clicks <button>submit</button> button in <strong style="color: purple;">Game Over!</strong> page, the app will present <strong style="color: purple;">Highscores</strong> page which will show the user the previous submitted scores and initials. The page also has <button>Clear High Score </button>button and <button>Go Back</button> button

<img src= "./images/highscores.png"><br>
          - <button>Clear high Score</button> button, if the user clicks this button, it will clear all previous submitted scores and initials on the page. 

<img src="./images/clearScores.png"><br>
          - <button>Go Back</button> button, if the user clicks this button, the app will take the user back to the start page which contains <button>Start Quiz</button> button to start a new game. This page also contains ***View Highscores*** link, when clicked, the app will show the user <strong style="color: purple;">Highscores</strong> page.