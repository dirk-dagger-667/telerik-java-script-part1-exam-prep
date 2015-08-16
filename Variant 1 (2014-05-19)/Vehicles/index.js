var input = "7";

function Sovle(input) {

    var allWheels = parseInt(input[0]);
    var maxPossibleTrucks = (allWheels / 10) | 0;
    var maxPossibileCars = (allWheels / 4) | 0;
    var maxPossbileTrikes = (allWheels / 3) | 0;
    var counter = 0;
    var allPossibleWheels;

    for (var i = 0; i <= maxPossibleTrucks; i++) {

        for (var j = 0; j <= maxPossibileCars; j++) {

            for (var k = 0; k <= maxPossbileTrikes; k++) {

                allPossibleWheels = (i * 10) + (j * 4) + (k * 3);

                if (allPossibleWheels === allWheels) {

                    counter++;

                }

            }

        }

    }

    return counter;

}


console.log(Sovle(input));