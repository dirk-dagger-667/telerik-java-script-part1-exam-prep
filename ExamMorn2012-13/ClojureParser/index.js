function Solve(input) {

    var finalResult;
    var len = input.length;
    var functions = [];

    for (var i = 0; i < len; i++) {

        var currentRow = input[i].trim();
        var operator;
        var parameters = [];
        var nestedParams = [];
        var currentFunctionName = "";
        var nestedOperator = "";
        var currentDigit = "";
        var currentNewFunction = "";
        var inCommand = false;
        var inNestedCommand = false;

        for (var j = 0; j < currentRow.length; j++) {

            var currentSymbol = currentRow[j];

            if (currentSymbol === " " || currentSymbol === ")") {

                if (currentFunctionName !== "") {

                    if (functions[currentFunctionName] || functions[currentFunctionName] === 0) {

                        var functionResult = functions[currentFunctionName];

                        if (inNestedCommand === true) {

                            nestedParams.push(functionResult);

                        }
                        else {

                            parameters.push(functionResult);

                        }

                    }
                    else {

                        currentNewFunction = currentFunctionName;

                    }

                    currentFunctionName = "";

                }

                if (currentDigit !== "") {

                    if (inNestedCommand === true) {

                        nestedParams.push(parseInt(currentDigit));

                    }
                    else {

                        parameters.push(parseInt(currentDigit));

                    }

                    currentDigit = "";

                }

                if (currentSymbol === ")" && currentNewFunction !== "") {

                    var result;

                    if (inNestedCommand === true) {

                        result = calculate(nestedOperator, nestedParams);

                    }
                    else {
                        
                        result = calculate(operator, parameters);

                    }

                    if (result === "Error") {

                        return "Division by zero! At Line: " + (i + 1);

                    }

                    if (currentNewFunction !== "def") {

                        functions[currentNewFunction] = result;

                    }

                    currentNewFunction = "";

                }

                if (currentSymbol === ")" && inNestedCommand === true) {

                    var nestedResult = calculate(nestedOperator, nestedParams);
                    parameters.push(nestedResult);
                    nestedParams = [];
                    nestedOperator = "";
                    inNestedCommand = false;
                }
                
                continue;

            }

            if (currentSymbol == "(") {

                if (inCommand === true) {

                    inNestedCommand = true;

                }
                else {
                    
                    inCommand = true;

                }
                
                continue;

            }

            if (isMathOperator(currentSymbol)) {

                if (currentSymbol === "-" && j + 1 < currentRow.length && isNumber(currentRow[j + 1])) {

                    currentDigit += currentSymbol;

                }
                else {
                    
                    if (inNestedCommand === true) {

                        nestedOperator = currentSymbol;

                    }
                    else {

                        operator = currentSymbol;

                    }
                    
                }

                continue;

            }

            if (isNumber(currentSymbol)) {

                if (currentFunctionName !== "") {

                    currentFunctionName += currentSymbol;

                }

                currentDigit += currentSymbol;
                continue;

            }

            currentFunctionName += currentSymbol;

        }

        finalResult = calculate(operator, parameters);

        if (finalResult == "Error") {

            return "Division by zero! At Line: " + (i + 1);

        }
    }

    return finalResult;

    function calculate(operator, parameters) {

        if (parameters.length === 1) {

            return parameters[0];

        }

        var result = parameters[0];

        for (var k = 1; k < parameters.length; k++) {

            switch (operator) {
                case "+":

                    result += parameters[k];

                    break;
                case "-":

                    result -= parameters[k];

                    break;
                case "*":

                    result *= parameters[k];

                    break;
                case "/":

                    if (parameters[k] === 0) {

                        return "Error";

                    }

                    result /= parameters[k];
                    result = parseInt(result);

                    break;
            }

        }

        return result;

    }

    function isMathOperator(symbol) {

        if (symbol === "+" || symbol === "-" || symbol === "/" || symbol === "*") {

            return true;

        }
        else {

            false

        }

    }

    function isNumber(symbol) {

        if (symbol === " ") {

            return false;

        }
        else {

            return symbol == Number(symbol);

        }

    }

}

//var firstTest = [
    //"(    +    1      2)",
    //"(+ 5 (- 22 7) 1)",
    /*"(-     42     -2)",
    "(- 42)",
    "(/ 2)",
    "(/ 10 3)",
    "(/ 50 0)",
    "(/ 10 3 2)",
    "(def NewFunc 5)"
];*/
var secondTest = [
    "(def myFunc 5)",
    "(def myNewFunc (+  myFunc  myFunc 2))",
    "(def MyFunc (* 2  myNewFunc))",
    "(/   MyFunc  myFunc)"
];
/*var thirdTest = [
    "(def func 10)",
    "(def newFunc (+  func 2))",
    "(def sumFunc (+ func func newFunc 0 0 0))",
    "(* sumFunc 2)"
];
var fourthTest = [
    "(def func (+ 5 2))",
    "(def func2 (/  func 5 2 1 0))",
    "(def func3 (/ func 2))",
    "(+ func3 func)"
];*/

//console.log(Solve(firstTest));
console.log(Solve(secondTest));
//console.log(Solve(thirdTest));
//console.log(Solve(fourthTest));