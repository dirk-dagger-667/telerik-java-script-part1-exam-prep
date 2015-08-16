var input = [
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"]

function Solve(input) {

    var rowsCols = toNumber(input[0]);
    var numberRows = rowsCols[0];
    var numberCols = rowsCols[1];
    var numberField = numberField(numberRows, numberCols);
    var directionsField = directionsField(input);
    var counter = 0;
    var sum = 0;
    var startingPosition = toNumber(input[1]);
    var row = startingPosition[0];
    var col = startingPosition[1];
    var escaped;

    while (true) {

        if (row < 0 || row >= numberRows || col < 0 || col >= numberCols ) {
            
            escaped = true;

        }
        else if (directionsField[row][col] === "v") {

            escaped = false;

        }

        if (escaped === true) {

            console.log("out " + sum);
            break;

        }
        else if (escaped === false) {

            console.log("lost " + counter);
            break;

        }

        counter++;
        sum += numberField[row][col];

        if (directionsField[row][col] === "l") {

            directionsField[row][col] = "v";
            col--;

        }
        else if (directionsField[row][col] === "r") {

            directionsField[row][col] = "v";
            col++;
            
        }
        else if (directionsField[row][col] === "u") {

            directionsField[row][col] = "v";
            row--;

        }
        else if (directionsField[row][col] === "d") {

            directionsField[row][col] = "v";
            row++;

        }

    }

    function directionsField(input) {

        var len = input.length;
        var dirField = [];

        for (var k = 2; k < len ; k++) {

            dirField[k - 2] = input[k].split("");

        }

        return dirField;

    }

    function numberField(rows, cols) {

        var matrice = [];
        var counter = 1;


        for (var i = 0; i < rows; i++) {

            matrice[i] = [];

            for (var j = 0; j < cols; j++) {

                matrice[i][j] = counter++;

            }

        }

        return matrice;

    }

    function toNumber(string) {

        var arr = string.split(" ").map(Number);
        return arr;

    }

}

Solve(input);
