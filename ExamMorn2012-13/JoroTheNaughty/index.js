var inputArgs = ["6 7 3", "0 0", "2 2", "-2 2", "3 -1"];

function Solve(input) {

    var NMJ = input[0].split(" ").map(Number);
    var rows = NMJ[0];
    var cols = NMJ[1];
    var numberOfJumps = NMJ[2];
    var counterOfJupms = 0;


    var startingPost = input[1].split(" ").map(Number);
    var currentRow = startingPost[0];
    var currentCol = startingPost[1];
    var jumpingField = createMatrice(rows, cols);
    var sum = 0;
    var jumps = 0;
    var result;
    var usedFields = {};

    for (var k = 0; k < rows*cols; k++) {
        
        for (var l = 1; l <= numberOfJumps; l++) {

        }

    }


    function createMatrice(rows, cols) {

        var counterOfMatrice = 1;
        var matrice = [];

        for (var i = 0; i < rows; i++) {

            matrice[i] = [];

            for (var j = 0; j < cols; j++) {

                matrice[i][j] = counterOfMatrice++;

            }

        }

        return matrice;

    }

    


}
