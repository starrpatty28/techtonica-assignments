//Namespace is a container for set of identifiers, functions, methods and all that. It gives a level of direction to its contents so that it will be well distinguished and organized.

//Namespacing doesn’t allow us to pollute our code base and makes it cleaner by grouping our code logically and avoiding unexpected and expected collision.

//Namespac example
//Here ‘MYAPPLICATION‘ is acted as a JavaScript namespace and the only global object which contains all other items.

var MYAPPLICATION = {
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var p = new MYAPPLICATION.product(100);
        alert(this.calculateTax(p.getCost()));
    }
}

//********************************************

//Hoisting

//Hoisting is JavaScript's default behavior of moving declarations to the top.

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x 

//********************************************

//Arity or function.prototype.length

//The length property indicates the number of parameters expected by the function.

console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

//********************************************

//Anonymous

//The function below is actually an anonymous function (a function without a name). Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

var x = function (a, b) {return a * b};
var z = x(4, 3);


//********************************************

//Closure

//A closure is the combination of a function and the lexical environment within which that function was declared.

//Exmple of closure

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();


//********************************************

//Currying

//Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

//import or load lodash
var abc = function(a, b, c) {
    return a + b + c;
  };
   
  var curried = _.curry(abc);
  var addBy2 = curried(2);
  console.log(addBy2(0,0));
  // => 2
  console.log(addBy2(1,1));
  // => 4
  console.log(curried(4)(5)(6));
  // => 15


  //********************************************

  //Pragma

  //Pragma is short for pragmatic information. In plain English, pragmatic is an adjective that means sensible and practical. In programming, pragma refers to the code that consist of useful information on how a compiler or interpreter or assembler should process the program.

//It does not contribute anything to the programming language itself and its syntax may vary. They only affect the compiler behavior. JavaScript also has few pragmas, one of them is strict.

'use strict';

//By the above pragma, the JavaScript code will be executed in strict mode. In strict mode, bad syntax isn't allowed, hoisting isn't done, silent errors are shown, etc. It helps in writing a more secure and optimized JavaScript code.