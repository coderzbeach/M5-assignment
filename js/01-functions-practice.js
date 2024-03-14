//STEP 1
function halfNumber(number) {
    var result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

//STEP 2
function squareNumber(number) {
    var result = number * number ;
    console.log("Square of " + number + " is " + result + ".");
    return result;
}

//STEP 3
function percentOf(number1, number2) {
    var percent = (number1 / number2) * 100;
    console.log(number1 + " is " + percent + "% of " + number2 + ".");
    return percent;
}

//STEP 4
function findModulus(number1, number2) {
    var modulus = (number1 % number2);
    console.log(modulus + " is the modulus of " + number1 + "and " + number2 + ".");
    return modulus;
}
