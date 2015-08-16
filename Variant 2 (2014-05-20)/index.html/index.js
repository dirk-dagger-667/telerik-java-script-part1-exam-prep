var input = ["20",
"11",
"200",
"300"
];

var input2 = ["110",
"19",
"29",
"39"
];

function Solve(input) {

    var inputToNumbers = input.map(Number);
    var totalMoney = inputToNumbers[0];
    var price1 = inputToNumbers[1];
    var price2 = inputToNumbers[2];
    var price3 = inputToNumbers[3];

    var maxPossCakesPrice1 = (totalMoney / price1) | 0;
    var maxPossCakesPrice2 = (totalMoney / price2) | 0;
    var maxPossCakesPrice3 = (totalMoney / price3) | 0;

    var bestSumOfMoney = 0;
    var currentSum = 0;

    for (var i = 0; i <= maxPossCakesPrice3; i++) {

        for (var j = 0; j <= maxPossCakesPrice2; j++) {

            for (var l = 0; l <= maxPossCakesPrice1; l++) {

                currentSum = (i * price3) + (j * price2) + (l * price1);

                if ((currentSum > bestSumOfMoney) && (currentSum <= totalMoney)) {

                    bestSumOfMoney = currentSum;

                }

            }

        }

    }

    return bestSumOfMoney;
}

console.log(Solve(input2));
