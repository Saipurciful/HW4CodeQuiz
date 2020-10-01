// target the Id from scores.HTML (ul and buttons)
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// addEventListener to "clear high scores" button 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// convert text from local storage into JS object
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
// create loop for allScores and li for initials input from user
if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// addEventListener to "goBack" button when click link back to HW4.html page
goBack.addEventListener("click", function () {
    window.location.replace("/hw4.html");
});