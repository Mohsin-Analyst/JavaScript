// function Expression

const myFnc = function(name, age){
    console.log(`My name is : ${name} & i am < ${age} > years old.`);
}

myFnc("Mohsin",22)



const happyBirthDay = function(){
    console.log("Happy Birthday to you.............")
}

happyBirthDay()


const sumThreeNums = (num1,num2,num3) =>{
    return num1 + num2 + num3;
}

const result = sumThreeNums(23,90,54);
console.log(result)


// arrow fnc writing styles

// style 1
const style1 = name =>  console.log(name);
style1("ALI")

// style 2

const style2 = (name,age) => console.log(`my name is ${name} & age is ${age}`);
style2("Mohsin",22)

// style 3
const style3 = (val1) => val1 + 200;
console.log(style3(34))