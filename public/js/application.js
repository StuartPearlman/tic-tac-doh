$(document).ready(function() {

    var turn = 0

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
        
        var cell_value = parseInt(event.target.id);
        
        if (turn % 2 == 0) {
            
            $("#" + cell_value).text("X");
            
            if (pairs1[15 - cell_value]) {
                alert("Player One Wins!")
            };

            for (var k = 1; k < 10; k++) {
                if ((taken1[k]) && (k + cell_value < 15)) {
                    pairs1[k + cell_value] = true;
                };
            };
            
            taken1[cell_value] = true;

        } else {
            
            $("#" + cell_value).text("O");

            if (pairs2[15 - cell_value]) {
                alert("Player Two Wins!")
            };

            for (var k = 1; k < 10; k++) {
                if ((taken2[k]) && (k + cell_value < 15)) {
                    pairs2[k + cell_value] = true;
                };
            };
            
            taken2[cell_value] = true;
        };

        turn += 1;
    });
});
