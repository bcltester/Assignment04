//STEP 1
const halfNumber = function(num) {
    var newNum = parseFloat(num) / 2;
    console.log(`%cHalf of ${num} is ${newNum.toFixed(1)}.`,`color: magenta;`);
    return newNum;
}
halfNumber(17.597);


//STEP 2

const squareNumber = function(num) {
    let squared = num * num;
    console.log(`%cThe result of squaring the number ${num} is ${squared}.`, `font-size: 1.6em; color: green;`);
    return squared;
}
squareNumber(13);

//STEP 3

const percentOf = function(num1, num2) {
    let result = num1 / num2 * 100;
    console.log(`%c${num1} is ${result.toFixed(2)}% of ${num2}.`, `font-size: 2em; color: blue;`);
    return result;
}
percentOf(42.19, 89.2929);
//STEP 4

const findModulus = (num1, num2) => {
    let mod = num1 % num2;
    console.log(`%c${mod} is the modulus of ${num1} and ${num2}.`, `font-size: 1.4em; color: red;`);
    return mod;
}
findModulus(5, 2);

//STEP 5

const summer = function(arg) {
    let fin = 0;
    for (let i = 0; i < arguments.length; i++) {
        fin += parseFloat(arguments[i]);
    }
    return fin;
}
console.log(`%c${summer(7, 30, 45)} is the sum total.`, `font-size: 1.2 em; color: #f8cc11;`);