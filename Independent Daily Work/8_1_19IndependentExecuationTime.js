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