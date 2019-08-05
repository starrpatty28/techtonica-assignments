// Independent Practice

// Runtime Complexity Exercise 1: Reading code and analyzing runtime

// Read the functions in runtime1-analyzing.js. For each function, figure out:

// What does the function do?
// What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation.
// Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
// When the input size doubles, what would happen to the time it takes to run?


const execTime = (arg, functionName)  => {
    console.time('execution time: ');
    functionName(arg);
    console.timeEnd('execution time: ');
    return functionName(arg);
} 

// Problem #1

const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  }
  execTime([2,4,6,8,10,11,7],mysteryFunction0);

//What does the function do?
    the function is checking for if the array has the favorite number, if it does it will return true, if it does not it will retuen false.

// // What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation.
    The input size is an array with 7 integers

// // Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n

    O(n)

// // When the input size doubles, what would happen to the time it takes to run?
   the execuation time got shorter if the number was in the array. If the 7 was not in the array, the time got longer.


   // Problem #2

   const mysteryFunction1 = function(array) {
    index = 4;
    return array[index];
  }
  execTime([2,4,6,8,2,3,],mysteryFunction1);

// What does the function do?
    the function is looking for index 4
// What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation.
    An array with 7 integers
// Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)

    O(1)
// When the input size doubles, what would happen to the time it takes to run?

    It does not matter because index 4 will always be there

// Problem #3

var mysteryFunction2 = function(n) {
    let primes = []
    for (i = 2; i < n; i++) {
      let factorFound = false;
      for (j = 2; j < n; j++) {
        if (i % j == 0) {
          factorFound = true;
        }
      }
      if (factorFound === false) {
        primes.push(i);
      }
    }
    return primes.length;
  }
 
//Read the following functions. For each one, figure out:
//What does the function do

No matter what is being passed into the function, the number always comes back as 0, I beleive this function is wrong.

//Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)

    I beleive it was an O(n^2) because of the nested loop

//Run the function with a few different input sizes and see how long it takes
  The function is not working
//When the input size doubles, what happens to the time it takes to run?
  The function is not working, I will have to ask about this function.

  // Problem #4

  const mysteryFunction3 = function(array) {
    myLength = array.length;
    if (myLength % 2 == 0) {
      return "even length";
    } else {
      return "odd length";
    }
  }
  
//What does the function do?
  The function takes in an array and if the array length is divisable by 2 with no remainder, it returns true, else return false
//What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation.
  The input size is an array with 6 integers inside. 


//Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
  I say its an O(1) and it was correct

//When the input size doubles, what would happen to the time it takes to run?
execution time: : 0.483ms
after double execution time: : 0.502ms

// Problem #5

var mysteryFunction4 = function(string) {
    let eCount = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'e') {
        eCount++;
      }
    }
    return eCount;
  }

//What does the function do?

//What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation.

//Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)

//When the input size doubles, what would happen to the time it takes to run?