var spotsTaken = [] //The game board starts empty

, playing = false //A game is not inititially being played

, newGame = false //Detecting a new game prevents players from switching difficulties mid-game

, winner = false //The game ends when there is a winner

, turn = 1 //First turn 

//Map the ids in the view to their "magic" values
, squareNumberToCellValue = {
    "square-one": 8,
    "square-two": 1,
    "square-three": 6,
    "square-four": 3,
    "square-five": 5,
    "square-six": 7,
    "square-seven": 4,
    "square-eight": 9,
    "square-nine": 2
};

//Starts a new game and makes it active
function startGame() {
    if (newGame == false) {
        newGame = true;
        playing = true;
    };
};

function runGame(cellValue) {
    //'playing' is checked before every move so that the game ends after there is a winner
    if (playing) { 
        playerTurn(cellValue);
    };
    if (playing) {
        compTurn();
    };
    if (playing) {
        tieCheck();
    };
};

function tieCheck() {
    if (spotsTaken.length > 8) { //If nine spots are taken, the board is full and it's a tie
        gameOver("Cat's game!");
    };
};

//Run after a winner or tie is determined
function gameOver(message) {
    playing = false; //Prevent another turn
    winner = true; //End the game
    $("#winner").prepend("<h2>" + message + "</h2>"); //Append message to document

    setInterval(function() {
        $("#winner").toggleClass('blinking'); //Flash that message playfully
    }, 900);
};

//This function is called to reset the game
function reloadIfWinner() {
    if (winner == true) {
        location.reload();
    };
};

//Each square's id is mapped to its "magic value". This function allows the "magic value" to return the id as well.
function getKey(object, value) {
    for (var key in object) {
        if (object[key] == value) {
            return key;
        };
    };
    return null;
};