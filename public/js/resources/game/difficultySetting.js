var easy = true

, medium = false

, hard = false

, difficulty = localStorage.getItem('difficulty');

function easySetting() {
    if (newGame == false) {
        easy = true;
        $(".easy").css('background', 'rgb(28, 184, 65)');
        medium = false;
        $(".medium").css('background', 'gray');
        hard = false;
        $(".hard").css('background', 'gray');
        $(".subheading").replaceWith("<h2 class='subheading'>The game you can win.</h2>");
        localStorage.setItem('difficulty', 'easy');
    };
};

function mediumSetting() {
    if (newGame == false) {
        easy = false;
        $(".easy").css('background', 'gray');
        medium = true;
        $(".medium").css('background', 'rgb(223, 117, 20)');
        hard = false;
        $(".hard").css('background', 'gray');
        $(".subheading").replaceWith("<h2 class='subheading'>The game you might win.</h2>");
        localStorage.setItem('difficulty', 'medium');
    };
};

function hardSetting() {
    if (newGame == false) {
        easy = false;
        $(".easy").css('background', 'gray');
        medium = false;
        $(".medium").css('background', 'gray');
        hard = true;
        $(".hard").css('background', 'rgb(202, 60, 60)');
        $(".subheading").replaceWith("<h2 class='subheading'>The game you won't win.</h2>");
        localStorage.setItem('difficulty', 'hard');
    };
};

function previousDifficulty() {
    if (difficulty == 'easy') {
        easySetting();
    };
    if (difficulty == 'medium') {
        mediumSetting();
    };
    if (difficulty == 'hard') {
        hardSetting();
    };
};