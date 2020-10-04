// const Person = (name, birthYear) => {
//     let bYear = new Date();
//     bYear.setFullYear(birthYear);

//     let now = new Date();

//     //private
//     const leftToLive = () => 
//         Number(bYear.getFullYear()) + 75 - (Number(now.getFullYear()));

//     //private
//     const capitalizeName = () => 
//         name.toUpperCase();
    
//     //public because of return statement
//     const phrase = ()  =>
//        console.log(
//            "Hello " + capitalizeName()+ ", " + "you have " + leftToLive() + " years left to live"
//        );
    
//     return { phrase };
// }

// leetie = Person("leetie", 1993);

//leetie.phrase();

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
}
  
const Nerd = (name) => {
    //set nerd prototype to Person object    
    const prototype = Person(name);

    const doSomethingNerdy = () => console.log('nerd stuff')
    return Object.assign({}, prototype, {doSomethingNerdy})
    // return {sayName, doSomethingNerdy}
  }
  
const jeff = Nerd('jeff')
  
// jeff.sayName() //my name is jeff
// jeff.doSomethingNerdy() // nerd stuff

//IIFE practice
// define function and call it immediately. doesnt work if you dont add the () on line 57? 'wraps the factory function in an IIFE'
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add, sub, mul, div
    };
})();
console.log(calculator.add(5, 1));
// function declaration is function myFunction() {}
//function expression is assigning to variable, ie let myFunction = function() {}

//functions can be assigned to an objects property
// --- var myObj = { myFunction: function() { logic here } }

//anything within parentheses is part of an expression
// -- (function () { --logic here-- })
//anything after ! operator is part of an expression
// -- !function() { --logic here-- }
let myVar = !function() {
    console.log("What is going on?!?")
}
console.log(myVar);

(function() {
    console.log("This function is immediately invoked because of the function call syntax '()' at the end");
    //not explicitly naming it avoid taking up a name in the global namespace
})();


//you can pass arguments to an IIFE
let name = "leetie";

(function(arg) {
    console.log(arg);
})(name); //name variable passed in here

//MODULE DESIGN PATTERN

// from article
// * commonly used as singleton style objects where only one instance exists
// (function() {
//     'use strict';
//     // Your code here
//     // All function and variables are scoped to this function
//   })();
  
//exporting module. assign module to variable that you can use to call module methods
let myModule = (function() {
    'use strict';

    let _privateProp = "Top secret prop being accessed in private method";

    function _privateMethod() {
        console.log(_privateProp);
    }
    return {
        publicMethod: function() {
            console.log("This is a public method because it's being returned!");
            _privateMethod();
            // you could make this function an IIFE too :-) by wrapping it in parens and dropping the parens from the 
            //call on line 110
        }
    }
})();

myModule.publicMethod();

// wont work because this method is not being returned and is private
// myModule._privateMethod();

// 'the benefit of the revealing module pattern is that we can look at the bottom of our modules and quickly 
//see what is publicly available for use