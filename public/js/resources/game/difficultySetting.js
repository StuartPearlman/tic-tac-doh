var difficulty = localStorage.getItem('difficulty') || 'easy'

function selectDifficulty(level) {
    if (newGame == false) {
        difficulty = level;
        $("li > button").attr("class", "pure-button inactive");
        $("#" + level).attr("class", "pure-button" + " " + level);
        localStorage.setItem('difficulty', level);
    };
    reloadIfWinner();
};

function previousDifficulty() {
    selectDifficulty(difficulty);
};