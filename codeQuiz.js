// 1. Array variable with objects that contained quiz details
var questions =[ {
    title : "Inside which HTML element do we put the JavaScript?",
    choices: [
         "<javascript></javascript>", 
         "<js></js>" , 
         "<script></script>", 
         "<head></head>"],
    answer: "<script></script>"
    },
    {
    title: "How do you write 'Hello World' in an alert box?",
    choices: [
         "alert ('Hello World')", 
         "msgBox ('Hello World')", 
         "alertBox ('Hello World')", 
         "Alert ('Hello World'"],
    answer: "alert ('Hello World')"
    },
    {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: [
         "onchange", 
         "onmouseclick", 
         "onmouseover", 
         "onclick"],
    answer: "onclick"
    },
    {
    title: "How do you declare a Javascript variable?",
    choices: [
         "v carName;", 
         "var carName;", 
        "variable carName;", 
        "all of them are correct"],
    answer: "var carName;"
    },
    {
    title: "What is the correct syntax for referring to an external script called 'index.js'?",
    choices: [
        "<script name = 'index.js>'", 
        "<script href ='index.js>", 
        "<script src ='index.js'>", 
        "<script = 'index.js'>" ],
    answer: "<script src ='index.js'>"
    },
    ];
    
    // 2. Create empty variables for score and questionIndex
    var score = 0;
    var questionIndex = 0;
    
    // 3. using .querySelector to target Id from HTML and assign to variable
    var currentTime = document.querySelector("#currentTime");
    var timer = document.querySelector("#startQuiz");
    var questionsDiv = document.querySelector("#quizBox");
    var wrapper = document.querySelector("#box");
    
    // 4. Create variable for function when click
    var secondsLeft = 75;
    var holdInterval = 0;
    var penalty = 10;
    var ulCreate = document.createElement("ul");
    
    // 5. create .addEventListener when click button, timer start to countdown
    timer.addEventListener("click", function () {
        
        if (holdInterval === 0) {
            holdInterval = setInterval(function () {
                secondsLeft--;
                currentTime.textContent = "Time: " + secondsLeft;
    
                if (secondsLeft <= 0) {
                    clearInterval(holdInterval);
                    allDone();
                    currentTime.textContent = "Time's up!";
                }
            }, 1000);
        }
        render(questionIndex);
    });
    
    // 6. create function render to display multiple choice questions
    
    function render(questionIndex) {
        questionsDiv.setAttribute("id", "question");
        // Clears existing data 
        questionsDiv.innerHTML = "";
        ulCreate.innerHTML = "";
        // For loops to loop through all info in array
        for (var i = 0; i < questions.length; i++) {
            // Appends question title 
            var userQuestion = questions[questionIndex].title;
            var userChoices = questions[questionIndex].choices;
            questionsDiv.textContent = userQuestion;
        }
        // New forEach for question choices
        userChoices.forEach(function (newItem) {
            var listItem = document.createElement("li");
            listItem.textContent = newItem;
            questionsDiv.appendChild(ulCreate);
            ulCreate.appendChild(listItem);
            listItem.addEventListener("click", (compare));
        })
    }
    // 7. create function compare to compare user selected answer with corrected answer and if else condition.
    function compare(event) {
        var element = event.target;
    
        if (element.matches("li")) {
    
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
            // Correct condition 
            if (element.textContent == questions[questionIndex].answer) {
                score++;
                // Correct condition 
                createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            } else {
                // Will deduct 10 seconds off secondsLeft for wrong answers
                secondsLeft = secondsLeft - penalty;
                createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
            }
    
        }
        // 8. create if/else condition when questionIndex loop finish running 
        questionIndex++;
    
        if (questionIndex >= questions.length) {
            // declare information in Game over page when the game is over
            allDone();
            createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
        } else {
            render(questionIndex);
        }
        questionsDiv.appendChild(createDiv);
    
    }
    // 9. create function gameOver,create Element and set attribute
    function allDone() {
        questionsDiv.innerHTML = "";
        currentTime.innerHTML = "";
    
        // Heading:
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "Game Over!"
    
        questionsDiv.appendChild(createH1);
    
        // Paragraph
        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");
    
        questionsDiv.appendChild(createP);
    
        // 10. convert time remaining to scores
        if (secondsLeft >= 0) {
            var timeRemaining = secondsLeft;
            var createP2 = document.createElement("p");
            clearInterval(holdInterval);
            createP.textContent = "Your final score is: " + timeRemaining;
    
            questionsDiv.appendChild(createP2);
        }
    
        // 11. create variable for Label, input, submit button
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
    
        questionsDiv.appendChild(createLabel);
    
        // input
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        createInput.setAttribute("id", "initials");
        createInput.textContent = "";
    
        questionsDiv.appendChild(createInput);
    
        // submit
        var createSubmit = document.createElement("button");
        createSubmit.setAttribute("type", "submit");
        createSubmit.setAttribute("id", "Submit");
        createSubmit.textContent = "Submit";
    
        questionsDiv.appendChild(createSubmit);
    
        // 12. create .addEventListener when click, to submit user's input initials and scores.
        createSubmit.addEventListener("click", function () {
            var initials = createInput.value;
    
            if (initials === null) {
    
                console.log("No value entered!");
    
            } else {
                var finalScore = {
                    initials: initials,
                    score: timeRemaining
                }
                console.log(finalScore);
                var allScores = localStorage.getItem("allScores");
                if (allScores === null) {
                    allScores = [];
                } else {
                    allScores = JSON.parse(allScores);
                }
                allScores.push(finalScore);
                var newScore = JSON.stringify(allScores);
                localStorage.setItem("allScores", newScore);
                // Travels to final page
                window.location.replace("./scores.html");
            }
        });
    
    }
    