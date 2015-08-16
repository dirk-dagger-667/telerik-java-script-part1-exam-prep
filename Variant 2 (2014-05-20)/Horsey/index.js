var input = ['3 5',
  '54561',
  '43328',
  '52388',
];

function Solve(input) {

    var rowsCols = toNumber(input[0]);
    var numberRows = rowsCols[0];
    var numberCols = rowsCols[1];
    var dirField = directionsField(input);
    var numField = numberField(numberRows,numberCols);
    var escaped;
    var row = numberRows - 1;
    var col = numberCols - 1;
    var counter = 0;
    var sum = 0;

    while (true) {

        if (row < 0 || row >= numberRows || col < 0 || col >= numberCols) {

            escaped = true;
            break;

        }
        else if (dirField[row][col] === "v") {

            escaped = false;
            break;

        }

        counter++;
        sum += numField[row][col];

        if (dirField[row][col] === "1") {

            dirField[row][col] === "v";
            row -= 2;
            col += 1;

        }
        else if (dirField[row][col] === "2") {

            dirField[row][col] === "v";
            row -= 1;
            col += 2;

        }
        else if (dirField[row][col] === "3") {

            dirField[row][col] === "v";
            row += 1;
            col += 2;

        }
        else if (dirField[row][col] === "4") {

            dirField[row][col] === "v";
            row += 2;
            col += 1;

        }
        else if (dirField[row][col] === "5") {

            dirField[row][col] === "v";
            row += 2;
            col -= 1;

        }
        else if (dirField[row][col] === "6") {

            dirField[row][col] === "v";
            row += 1;
            col -= 2;

        }
        else if (dirField[row][col] === "7") {

            dirField[row][col] === "v";
            row -= 1;
            col -= 2;

        }
        else if (dirField[row][col] === "8") {

            dirField[row][col] === "v";
            row -= 2;
            col -= 1;

        }

    }

    if (escaped === true) {

        console.log("Go go Horsy! Collected " + sum + " weeds");

    }
    else {

        console.log("Sadly the horse is doomed in " + counter + " jumps");

    }

    function directionsField(input) {

        var len = input.length;
        var dirField = [];

        for (var k = 1; k < len ; k++) {

            dirField[k - 1] = input[k].split("");

        }

        return dirField;

    }

    function numberField(rows, cols) {

        var matrice = [];
        var counter = 0;


        for (var i = 0; i < rows; i++) {

            matrice[i] = [];

            for (var j = 0; j < cols; j++) {

                matrice[i][j] = Math.pow(2,i) - j;

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



