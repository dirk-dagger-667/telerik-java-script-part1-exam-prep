var input = ['3 5',
  'dr dl dr ur ul',
  'dr dr ul ur ur',
  'dl dr ur dl ur'
];

function Solve(input) {

    var rowsCols = toNumber(input[0]);
    var numberRows = rowsCols[0];
    var numberCols = rowsCols[1];
    var dirField = directionsField(input);
    var numField = numberField(numberRows, numberCols);
    var escaped;
    var row = 0;
    var col = 0;
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

        if (dirField[row][col] === "dr") {

            dirField[row][col] === "v";
            row += 1;
            col += 1;

        }
        else if (dirField[row][col] === "ur") {

            dirField[row][col] === "v";
            row -= 1;
            col += 1;

        }
        else if (dirField[row][col] === "ul") {

            dirField[row][col] === "v";
            row -= 1;
            col -= 1;

        }
        else if (dirField[row][col] === "dl") {

            dirField[row][col] === "v";
            row += 1;
            col -= 1;

        }

    }

    if (escaped === true) {

        console.log("succeeded with " + sum);

    }
    else {

        console.log("failed at (" + row + ", " + col + ")");

    }

    function directionsField(input) {

        var len = input.length;
        var dirField = [];

        for (var k = 1; k < len ; k++) {

            dirField[k - 1] = input[k].split(" ");

        }

        return dirField;

    }

    function numberField(rows, cols) {

        var matrice = [];
        var counter = 0;


        for (var i = 0; i < rows; i++) {

            matrice[i] = [];

            for (var j = 0; j < cols; j++) {

                matrice[i][j] = Math.pow(2, i) + j;

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