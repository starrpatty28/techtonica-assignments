//Testing Mindset

//Exercises
/*
Exercises:
A function that takes in two numbers and returns true if the first number is larger  than the second number. Otherwise, it should return false.

A function that takes in an array of numbers, and returns the third number in the array.

A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).

A function that takes in a number, and prints the word "Hello" that many times.
*/




/* A function that takes in two numbers and returns true if the first number is larger  than the second number. Otherwise, it should return false.
*/
function largerNumber (int1, int2) {  //created a function to take in 2 integers

    if (int1 > int2) {               // if int1 is greater than int2 print true
        return true;
    } else if (int1 < int2) {       // else if int1 is less than int2 print false
        return false;
    } else if (int1 === int2) {    // else if int2 & int 2 are the same print Same number
        return "Same number";
    } else {
      return "Nice Try";          // if you print anything else, print nice try
    }
}
largerNumber(3, 4);
largerNumber(10, 9);
largerNumber(5,5);
largerNumber('Hey girl');


/* 
A function that takes in an array of numbers, and returns the third number in the array.
*/


function arrayOfNumbers (array) {      //function that takes in an array
    var array = [2,4,6,8,10];          //local array inside the function 
  
    return array[3];                  //return the 3 (index) of the array (0,1,2,3)
  }
  arrayOfNumbers(array);             // calling the function
  
  var array = [2,4,6,8,10];         // the global array


  /* 
A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).
*/

function check(min, max, target) {
    if (target > min && target < max) {
        return true;
      
    } else {
      
       return false;
    }
}
check(1, 2, 3);;


/* 
A function that takes in a number, and prints the word "Hello" that many times.
*/


function echoHello(int) {
    for (i=1; i <= int; i++) {
    var str = "Hello";
    console.log(str);
  
      }
  
  }
  echoHello(5);


//Group Solution: Alicia, Noi, Shauna
//Facilator: Lo
//write a function that takes in an array of the 0-5 of the people in the friend group and then based on who says they're interested, return an array of the people who will actually go to the movies.

//Write the Suedo Code in order of the

function movieNight (names) {    // create an function that accepts an array
    let attending =[];          // a place where the attendee will go
    
    //if David is in the name array, add David to the attending array
    
    if (names.includes('David')) {       
      attending.push('David');
      console.log(attending);
    } 
    
    //If Alex is in the name array and if David is in the attaending, add Alex to the attending array 
    
    if (names.includes('Alex') && attending.includes('David')) {
        attending.push('Alex');
        console.log(attending);
    }
    //if Ming is in the names array and if Priya is in the name array and David is NOT in the names/attending array, add Ming to the attending party
    
    if (names.includes('Ming') && names.includes('Priya') && attending.includes('David') === false) {
        attending.push('Ming');
        console.log(attending);
    }
    
    //if priya is in names array, and ming is in the attending array, add priya to the attending array
    
    if (names.includes('Priya') && attending.includes('Ming')) {
        attending.push('Priya');
        console.log(attending);
    }
    
    //if Breanna is in the names array, and if there are 2 or more items in the attaending array, add Breana to the attending array
    
    if (names.includes('Breanna') && attending.length >= 2) {
        attending.push('Breanna');
        console.log(attending);
    }
    
      return attending;
    }
    
    //movieNight(['David','Alex']); //expect ['David', 'Alex']
    //movieNight(['Ming','Priya', 'Alex']); //expect ['Ming','Priya']
    //movieNight(['Ming','Breanna', 'Alex']); //expeect []
    //movieNight(['Ming','Priya', 'David']); //expect ['David']
    movieNight(['David','Alex', 'Breanna']); //expect ['David', 'Alex', Breanna]
    
    
    
