// This game is run on the concept of a "magic square". 
// Each box is assigned a value and three of these values only add up to fifteen 
// if they are present in a winning combination (diagonal, horizontal, vertical).
// Running tallies of players' combinations are also kept to determine a winner with
// one lookup. 
//
// Magic square:
//      8|1|6
//      3|5|7
//      4|9|2

//Pure JS has no 'require relative'. This function is one way to address that:
function load(script) {
    document.write('<script src=/js/logicCore/' + script + ' ' + 'type=text/javascript></script>');
};

//Load all dependencies
load("game/gameLogistics.js");
load("game/difficultySetting.js");
load("comp/compLogic.js");
load("comp/compStrategies.js");
load("player/playerLogic.js");

$(document).ready(function() {

    //Check for a previously set difficulty
    previousDifficulty(); 

    //Alternate first turns
    if ((difficulty == 'hard') || (Math.random() <= 0.5)) {
        compTurn();
    };

    //Click on a difficulty setting
    $("li > button").click(function() {
        reloadIfWinner(); //Button is repurposed to reset the game if the game is over
        selectDifficulty(event.target.id); //Choose difficulty based player selection
    });

    //Click on cell (tic-tac-toe square)
    $("td").click(function(event) {
        reloadIfWinner(); //Cells are repurposed to reset the game if the game is over
        startGame(); // Start an active game

        var cellValue = squareNumberToCellValue[event.target.id]; //"Magic square" values from the diagram above are mapped to innocuous ids in the view

        if (spotsTaken.indexOf(cellValue) == -1 && playing) { //Check that the spot is open and a game is in progress

            runGame(cellValue);
        };
        
        //The three methods that follow track player choices and the AI responds with unique strategies for each. 
        playerFirstCorner(); 

        playerFirstSide();

        playerOppositeSide();
    });
});