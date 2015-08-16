function Solve(inputArray) {

    inputArray = inputArray.map(Number);
    var i;
    var len = inputArray.length;
    var count = 1;


    for (i = 2; i < len; i++) {

        if (inputArray[i - 1] >= inputArray[i]) {

            count++;

        }

    }

    return count;

}

console.log(Solve(inputArray));

var inputArray = ["7", "-1", "20", "70", "1", "23", "15", "17"];