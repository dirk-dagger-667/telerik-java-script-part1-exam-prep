var input = [
    "8",
    "1",
    "6",
    "-9",
    "4",
    "4",
    "-2",
    "10",
    "-1"
]

function Solve(input) {

    var arr = [];
    var sum = 0;
    var currentSum = 0;

    for (var i = 1; i < input.length; i++) {

        arr[i - 1] = parseInt(input[i]);

    }

    for (var j = 0; j < arr.length; j++) {

        for (var k = j; k < arr.length; k++) {

            currentSum += arr[k];

            if (sum < currentSum) {

                sum = currentSum;

            }

        }

        currentSum = 0;

    }

    return sum;

}

console.log(Solve(input));