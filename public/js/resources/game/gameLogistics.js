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
    $("#start").text("Play again?");
    $("#winner").prepend("<h2>" + message + "</h2>");
    setInterval(function() {
        $("#winner").toggleClass('blinking');
    }, 700);
};