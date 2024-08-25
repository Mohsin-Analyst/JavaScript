// map method

const temp = [2,3,4,5,8];

// it takes a callback fnc to work 


// func that multiply the number by 7
let func = function(number){
    return number * 7;
}


// taking a callback fnc to perform the function on the given list of array
let see = temp.map(func)
console.log(see)


// .map always returns an array in nature 
// it is conventional to return the data instead of consol.log while using the map method.
