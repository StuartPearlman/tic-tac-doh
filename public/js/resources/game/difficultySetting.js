var difficulty = localStorage.getItem('difficulty') || 'easy' //Check for a cached difficulty or default to 'easy'

function selectDifficulty(level) {
    if (newGame == false) {
        difficulty = level; //Set the difficulty to the selected level
        $("li > button").attr("class", "pure-button inactive"); //"Gray out" the difficulty buttons
        $("#" + level).attr("class", "pure-button" + " " + level); //Colorize the selected level
        localStorage.setItem('difficulty', level); //Cache the difficulty level
    };
    reloadIfWinner(); //Reload the game if this function is called after a winner is determined
};

function previousDifficulty() {
    selectDifficulty(difficulty);
};