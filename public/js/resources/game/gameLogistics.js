var randFirstPlayer = Math.random()

, spotsTaken = []

, playing = false

, newGame = false

, winner = false

, turn = 1

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

function startGame() {
    if (newGame == false) {
        newGame = true;
        playing = true;
    };
};

function runGame(cellValue) {
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
    if (spotsTaken.length > 8) {
        gameOver("Cat's game!");
    };
};

function gameOver(message) {
    playing = false;
    winner = true;
    $("#winner").prepend("<h2>" + message + "</h2>");

    setInterval(function() {
        $("#winner").toggleClass('blinking');
    }, 900);
};

function reloadIfWinner() {
    if (winner == true) {
            location.reload();
    };
};

function getKey(object, value) {
    for (var key in object) {
        if (object[key] == value) {
            return key;
        };
    };
    return null;
};