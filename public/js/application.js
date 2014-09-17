$(document).ready(function() {

    var turn = 0

    var gameArray = []

    var taken1 = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    }

    var pairs1 = {
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false
    }

    var taken2 = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    }

    var pairs2 = {
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false
    }

    $("td").click(function(event) {

        var cellValue = parseInt(event.target.id);

        if (gameArray.indexOf(cellValue) == -1) {

            if (turn % 2 == 0) {

                $("#" + cellValue).text("X");

                if (pairs1[15 - cellValue]) {
                    location.reload();
                    alert("Player One Wins!");
                };

                for (var k = 1; k < 10; k++) {
                    if ((taken1[k]) && (k + cellValue < 15)) {
                        pairs1[k + cellValue] = true;
                    };
                };

                taken1[cellValue] = true;

            } else {

                $("#" + cellValue).text("O");

                if (pairs2[15 - cellValue]) {
                    location.reload();
                    alert("Player Two Wins!");
                };

                for (var k = 1; k < 10; k++) {
                    if ((taken2[k]) && (k + cellValue < 15)) {
                        pairs2[k + cellValue] = true;
                    };
                };

                taken2[cellValue] = true;
            };

            turn += 1;
            gameArray.push(cellValue);
            console.log(gameArray);
        };
    });
});