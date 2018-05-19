// letters to choose from

var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// We have a the starting scores

var wins = 0;
var loss = 0;
var guesses = 9;
var remainingGuesses = 9;
var letterLog = [];
var letterFor = null;

// figure out the computer's letter choice

var computerLetter = choices[Math.floor(Math.random() * choices.length)];

// 9 guesses left for player
// changing the user-guess by getting the id from html

var changeRemaining = function () {
    document.querySelector('#user-guess').innerHTML = "Guesses left: " + remainingGuesses;
};

var changeAvailableLeft = function () {
    this.letterFor = this.choices[Math.floor(Math.random() * this.choices.length)];
};

// Have to display the letters that the player tried

var updateGuessesSoFar = function () {
    document.querySelector('#user-log').innerHTML = "Your Guesses so far: " + letterLog.join(', ');
};

// RESET

var reset = function () {
    remainingGuesses = 9;
    letterLog = [];

    changeAvailableLeft();
    changeRemaining();
    updateGuessesSoFar();
}

changeAvailableLeft();
changeRemaining();

//player presses key.. what happens?

document.onkeyup = function (event) {
    remainingGuesses--;
    var player = String.fromCharCode(event.keyCode).toLowerCase();

    letterLog.push(player);
    changeRemaining();
    updateGuessesSoFar();

    if (remainingGuesses > 0) {
        if (player == letterFor) {
            wins++;
            document.querySelector('#user-win').innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (remainingGuesses == 0) {
        // Then we will loss and we'll update the html to display the loss 
        loss++;
        document.querySelector('#user-loss').innerHTML = "Losses: " + loss;
        // Then we'll call the reset. 
        reset();
    }
};

