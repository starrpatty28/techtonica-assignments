// Exercise 1. Declare a variable called animal and give it a value of your choice

var animal = "Lion";


// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"

var animal = 'lion'; //Global Variable

function animalValue (animal) {

if (animal === 'lion') {
  console.log('Im scared!');
  } else if (animal === 'dog') {
  console.log('So cute');
  } else if (animal === 'frog') {
  console.log('Ribbit ribbit');
  } else {
  console.log('Just another animal')
  }
}
animalValue('cat'); 
animalValue('lion');
animalValue('dog');
animalValue('frog');


// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 

var person1Age = 17;  //Global Variable
var person2Age = 16;

function personAge(person1Age, person2Age) {

  if (person1Age < 18 && person2Age < 18 ) {   
    console.log('You are both children');
  } else {
    console.log('Atleast one adult here');
  }

} 
 personAge(18,22); 
 personAge(15,14);


// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)

   // Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)

for(var i = 20; i >= 10; i -= 1) { 
    console.log(i);
} 
//i starts at 20, if i(20) is less than or equal to 10, minus 1 from 20 each time unil you get to 10 


// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)

var i = 5;
while (i < 51) {
  console.log(i);
  i += 5;
}

 // var i starts at 5
 //while i(5) is less than 51, first print that number (5) = console.log
 //next take the printed number (5) and and add 5 each time it goes through the loop. Once the loop goes through it reaches 50 (it will not go over 50)

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavor 

    var flavors = [chocolate, vanilla, cherry];   //array


// Exercise 7. Update the second element of the array to be a different value.

    flavors[1]='butterscotch';  // your second item 'vanilla' is now being changed to butterscotch
    console.log(flavors); // show the new flavors

    
//The splice operation will remove 1 item, starting at position 1 in the array (i.e. 3452), and will replace it with the new item 1010. 



// Exercise 8. Add 2 more items to the array
 
    var flavors = ['chocolate', 'vanilla', 'cherry'];
    
    flavors.splice(2, 0, "sherbert", "mint");
    console.log(flavors);

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together

    var int1 = 0
    var int2 = 0
    var int3 = 0

    function multiply(int1,int2,int3) {
  
    console.log (int1*int2*int3)

    }
    multiply(2,4,6);

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:

// 1 odd
// 2 even
// 3 odd
// 4 even

function oddOrEven(int) {
    for (let i = 1; i <= int; i++) {  //i starts at 1, if i is less than or equal to (int) keep going, add 1 each time
      if (i % 2 === 0) {            // if i is divided by a number and has no remainder, it is even
        console.log( i + ' is Even');  // write the even number from the loop
      } else if (i % 2 !== 0) {     // if i is divided by a number and has a remainder 'not equal' then its an odd number
        console.log( i + ' is Odd')    // write the odd number from the loop
      }
    }
    
  }
  oddOrEven(10);
  

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)

    var pet = { 
        animal:"dog", 
        age:"5",
    };


// Exercise 12. Print the pet's age

    console.log(pet['age']);


// Exercise 13. Update pet's age to be a different value

    pet.age = "25";

// Exercise 14. In the comments below, write a sentence  explaining what each of the following data types are.
// String = is used for storing and manipulating text. You can use single or double text but they have to match. 
// Number = Numbers are regular numbers. You can use decimals and. If you add quotes to numbers, they are now stings.
// Boolean = True or False Value
// Array = You can store multiple values in a array (in one variable)
// Object = JavaScript objects are containers for named values called properties or methods
// undefined = It means the variable has been declared but not defined.

//Exercise 15 Add. a new file to the $PATH environmental variable

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 


    How are the devices on the internet physically connected to each other?
    How is information physically transmitted from device to device?
    How does one device find another it’s trying to communicate with? IP Address
    What methods do devices on the internet use to communicate? radio waves

    The internet is like the mail service but instead of boxes it ships binary. Today we physically connect to the internet with Electricty, Light, and Radio.The information transmitted  from one device to another us using bandwidth. Bandwidth is measured by Bit Rate: a number of bits that can send over a period of time. When one device find another it’s trying to communicate with it uses it IP Address. Devices on the internet use electricty, Light, and Radio. to communicate?  

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.


// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.


