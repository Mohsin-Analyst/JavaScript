// reduce method
// it takes a callback fnc to perform the operation
const numbers = [120,90,78,66,34];


const sum = function (accumulator, currentvalue){
    return accumulator + currentvalue;
}

var check = numbers.reduce(sum)
console.log(check)

const sub = function (accumulator, currentvalue){
    return accumulator - currentvalue;
}

var check = numbers.reduce(sub)
console.log(check)

const mul = function (accumulator, currentvalue){
    return accumulator * currentvalue;
}

var check = numbers.reduce(mul)
console.log(check)

const div = function (accumulator, currentvalue){
    return accumulator / currentvalue;
}

var check = numbers.reduce(div)
console.log(check)

