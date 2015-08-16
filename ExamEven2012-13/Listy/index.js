var inputOne = ["def var1 [1, 2, 6, 8]",
/*"def var2 sum[1, 5, -10, 20]",
"def var3 max[5, 2, 4, var2, 2]",
"def var5 avg[var1]",*/
"def var6 sum[var1, var1, 1]"
];

var inputTwo = ["def var1[1, 2, 3 ,4]",
"def var2 sum[var1, 20, 70]",
"def var3 min[var1]",
"avg[var2, var3]"
];

var inputThree = ["def func sum[5, 3, 7, 2, 6, 3]",
"def func2 [5, 3, 7, 2, 6, 3]",
"def func3 min[func2]",
"def func4 max[5, 3, 7, 2, 6, 3]",
"def func5 avg[5, 3, 7, 2, 6, 3]",
"def func6 sum[func2, func3, func4 ]",
"sum[func6, func4]"
];

var inputFour = ["def func sum[1, 2, 3, -6]",
"def newList [func, 10, 1]",
"def newFunc sum[func, 100, newList]",
"[newFunc]"
];

function Solve(input) {

    var len = input.length;
    var variables = [];

    for (var i = 0; i < len; i++) {

        var lenOfLine = input[i].length;
        var currentSymbol = "";
        var currentLine = input[i];
        var inFunction = false;
        var inDefinition = false;
        var operator = "";
        var listOfNumbers = [];
        var currentVar = "";
        var memoryOfOperator = "";
        var currentVariableValue = "";
        var result = 0;

        for (var j = 0; j < lenOfLine; j++) {

            currentSymbol = currentLine[j];

            if (currentSymbol !== " " && currentSymbol !== "[" && currentSymbol !== "]" && currentSymbol !== ",") {

                currentVar += currentSymbol;

            }
            else {

                if (isNumber(currentVar)) {

                    listOfNumbers.push(parseInt(currentVar));

                }
                else if (inDefinition === true && currentVar === "def") {

                    variables[currentVar] = "";
                    currentVariableValue = currentVar;

                }
                else if (currentVar === "def") {

                    inDefinition = true;

                }
                else if (isMathFunction(currentVar) === true) {

                    if (inFunction === true) {

                        operator = currentVar;
                        variables[memoryOfOperator] = "";
                        currentVariableValue = memoryOfOperator;

                    }
                    else {

                        inFunction = true;
                        operator = currentVar;
                        memoryOfOperator = currentVar;

                    }

                }
                else if (currentVariableValue !== "" && currentVar !== "") {

                    listOfNumbers.push(currentVar);

                }
                else if (inDefinition === true && operator === "" && currentVar !== "") {

                    currentVariableValue = currentVar;
                    variables[currentVariableValue] = "";

                }

                currentVar = "";

            }

        }

        var sum = 0;

        switch (operator) {
            case "sum":

                result = deepSum(listOfNumbers, variables, sum);

                if (inDefinition === true && currentVariableValue !== "") {

                    variables[currentVariableValue] = result;

                }

                break;
            case "max":

                result = deepMax(listOfNumbers, variables);

                if (inDefinition === true && currentVariableValue !== "") {

                    variables[currentVariableValue] = result;

                }

                break;
            case "min":

                result = deepMin(listOfNumbers, variables);

                if (inDefinition === true && currentVariableValue !== "") {

                    variables[currentVariableValue] = result;

                }

                break;
            case "avg":

                sum = deepSum(listOfNumbers, variables);
                result = deepSum / listOfNumbers.length;

                if (inDefinition === true && currentVariableValue !== "") {

                    variables[currentVariableValue] = result;

                }

                break;
            case "":

                result = listOfNumbers;

                if (inDefinition === true && currentVariableValue !== "") {

                    variables[currentVariableValue] = result;

                }

                break;

        }

    }

    function deepSum(listOfNumbers, variables) {

        var sum = 0;

        for (var i = 0; i < listOfNumbers.length; i++) {

            if (isNumber(listOfNumbers[i]) === true) {

                sum += listOfNumbers[i];

            }
            else {



                if (isNumber(variables[listOfNumbers[i]]) === true) {

                    sum += variables[listOfNumbers[i]];

                }
                else {

                    sum += deepSum(variables[listOfNumbers[i]], variables);

                }

            }

        }

        return sum;

    }

    function deepMax(listOfNumber, variables) {

        var max = 0;

        for (var i = 0; i < listOfNumbers.length; i++) {

            if (isNumber(listOfNumber[i]) === true) {

                if (max < listOfNumber[i]) {

                    max = listOfNumber[i];

                }

            }
            else {

                if (isNumber(variables[listOfNumber[i]]) === true) {

                    if (max < variables[listOfNumber[i]]) {

                        max = variables[listOfNumber[i]];

                    }

                }
                else {

                    var isDeepMax = deepMax(variables[listOfNumber[i]], variables)

                    if (max < isDeepMax) {

                        max = isDeepMax;

                    }

                }
            }

        }

        return max;

    }

    function deepMin(listOfNumbers, variables) {

        var min = 0;

        for (var i = 0; i < listOfNumbers.length; i++) {

        }

        if (isNumber(listOfNumbers[i]) === true) {

            if (min > listOfNumbers[i]) {

                min = listOfNumbers[i];

            }

        }
        else {

            if (isNumber(variables[listOfNumbers[i]]) === true) {

                if (min > variables[listOfNumbers[i]]) {

                    min = variables[listOfNumbers[i]];

                }
                else {

                    var isDeepMin = deepMax(variables[listOfNumbers[i]], variables);

                    if (min > isDeepMin) {

                        min = isDeepMin;

                    }

                }

            }

        }

        return min;

    }

    function isNumber(symbol) {

        if (symbol === "") {

            return false;

        }

        return symbol == Number(symbol);

    }
    function isMathFunction(func) {

        switch (func) {

            case "sum":

                return true;

                break;
            case "avg":

                return true;

                break;
            case "min":

                return true;

                break;
            case "max":

                return true;

                break;
            default:

                return false;

                break;
        }

    }

    return result;

}

console.log(Solve(inputOne));