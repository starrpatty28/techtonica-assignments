//Loops

//ForLoops
    // We use ForLoops when we want to execute a chunk of code a certain amount of times

    // for (let I = 0; I < 10; I++)

    // 1. for (let i = 0,   First we initialize the counter variable

    // 2. i < 10;   The loop will run each time the condition is true (as long as I is less than 10, this loop will keep running

    // 3. I++  This is stating to add 1 to the vale of the variable each time it goes around

    // “For each iteration, beginning with i = 0, run this code if i is less than 10, incrementing i by 1”

    for (let i = 0; i < 10; i++) {
        console.log('I saw' + i + "deer");
    }
                // I saw 0 deer
                // I saw 1 deer
                // I saw 2 deer
                // I saw 3 deer
                // I saw 4 deer
                // I saw 5 deer
                // I saw 6 deer
                // I saw 7 deer
                // I saw 8 deer
                // I saw 9 deer


    for (let i = 0; i < 10;i += 2) {
         console.log('I saw' + i + "deer");
     }
//This time were itriting through the code by 2

                // I saw 0 deer
                // I saw 2 deer
                // I saw 4 deer
                // I saw 6 deer
                // I saw 8 deer

    for (let i = 0; i < 10;i += 2) {
         console.log('I saw' + i + "deer");
     }

     //This time were i will start at 10, run this code if i is > (greaterthan) than 0, (keep subtracting) then minus 2 from i each time

     for (let i = 10; i > 0;i -= 2) {
        console.log('I saw ' + i + " deer");
     } 
                //  I saw 10 deer
                //  I saw 8 deer
                //  I saw 6 deer
                //  I saw 4 deer
                //  I saw 2 deer



// Looping over Arrays

let states =['CA', 'PA', 'VA'];

for (let i = 0; i < states.length; i++) {
  console.log('I love ' + states[i]);
}

//i starts at 0; As long as i is (lessthan) states length run the loop; each time looped add 1 to it (were indexing into States with i = so MD will be 0, VA will be 1, CA will be 2


 // ***************************************************************************



//FreeCode Camp Example
// for ([initialization], [condition], [final expression])

var ourArray = [];
for(var i = 0; i < 5; i++) {
   // if(i > 2)break;
    ourArray.push(i);
}
console.log(ourArray);

//First were going to create an array outside the ForLoop and set it as an empty array
//Then we have the FoorLoop, while i is less than 5, we will keep running the FoorLoop
//Each time it itirates through the ForLoop it is pushing that number into the empty array called 'ourArray'
//You can also use a break statement to break out of a Loop early (if i is more than 2, break out the loop)
    //why would you want to break: say if you had a function that didnt return anything. If you have a game and the player game freezes you can have in that function "if games freezes-break" then the funtion will not run and return to the begining


    //Its also common to loop through an Array

    var arr = [1,2,3,4,5,6];

    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
     }

                    //  1
                    //  2
                    //  3
                    //  4
                    //  5
                    //  6

//i starts at 0, if i is less than the array length, then we will keep going through the array, once we get to the end of the array we will be done wihh the FoorLoop

//Looping through nested ForLoops: using two ForLoops to go through both sets

var arrAY = [
    [1,2], [3,4], [5,6], [7,8]
];

//loop through each item in the outer array

for(let i = 0; i < arrAY.length; i++) { 
    //loop through each sub-array

    for(let j = 0; j < arrAY[i].length; j++) {
        console.log([i][j]);
    }
}
                                    // 1
                                    // 2
                                    // 3
                                    // 4
                                    // 5
                                    // 6
                                    // 7
                                    // 8

//We have an array and inside the array we have 3 other arrays. In the first for loop the index represents the arrays inside the main array, so it would be [1,2]=0, [3,4]=1, [5,6]=3, [7,8]=4, Next were going to go inside each (small) array index, while j[i] is less than the length of the whole array(Big) its going to console each number. Now were going to console.log each item in the first array. The 1st Forloop got me the length and the second forloop got me the number
//its going to do the first for loop first then go inside the first sub array, then return back up to the first for loop and move to the next Sub array, then retur back up etc

// ****************************************************************************

//While Loops

//when we want to execute code while something is true, must increment (+) and decrement(-) a variable in the chunk of code that get executed each time the loops runs
        //Otherwise we get stuck in an infinent loop

                        let myArray = [];
                        let i = 0;
                        while (i <5) {
                            myArray.push();
                            i++
                        }
                        console.log(myArray);

//I create an empty array called 'myArray', then I cretae an variable [initialization], then I create my whileloop with the [condition] inside and will run while the condition is true and stop when false, then I am pushing i(number) back into the array, then right under the condition is the [final expression] and will be adding 1 each time i. The we print the whole array after the while loop has been ran.
        //if I didnt have my final expression [i++] then i would always be zero and it will keep ruuning and become an infinate loop

                        var age = 5;

                        while(age < 10) {
                             console.log('Your age is less than 10');
                         }
                          console.log('You are now over 10');;


 // ****************************************************************************

 //CodeAcademy Leeson for ForLoops

//  1. Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.

                            for (let i = 5; i <= 10; i++) {
                                console.log(i);
                            }
                            

//  2.Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
                            for (let counter = 3; counter >= 0; counter--){
                                console.log(counter);
                            }

//  3. Write a for loop that iterates through our vacationSpots array using i as the iterator variable. Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.                   

                const vacationSpots = ['Bali', 'Paris', 'Tulum'];

                for (let i = 0; i < vacationSpots.length; i++){
                console.log('I would love to visit ' + vacationSpots[i]);
                }
                                    
// 1. Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends. 

            var bobsFollowers = ['Alicia', 'Shay', 'Michael', 'Kim'];

// 2. Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.

            var tinasFollowers = ['Alicia', 'Shay', 'Tasha'];

// 3. Create a third variable named mutualFollowers and set it to an empty array.
                var mutualFollowers = []; 

//  4. Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

                 for (let i = 0; i < bobsFollowers.length; i++) {
                     for (let j = 0; j < tinasFollowers.length; j++) {
                        if (bobsFollowers[i] === tinasFollowers[j]) {
                            mutualFollowers.push(bobsFollowers[i]);
                        }
                     }
                }



//While Loop CodeAcademy

                 const cards = ['diamond', 'spade', 'heart', 'club'];

                let currentCard 
                
                while (currentCard !== 'spade') {
                 currentCard = cards[Math.floor(Math.random() * 4)]; 
                  console.log(currentCard);
                }


//A do...while statement says to do a task once, and then keep doing it until a specified condition is no longer met


//Independance Practice

// Techtonica staff will assign pairs.

// Open REPL.it.

// Activity 1 - Vacation Time!

// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

    function printVacations (arrays) {

        for (let i = 0; i < arrays.length; i++) {
            console.log(arrays[i][0] + ' really wants to go to ' + arrays[i][1]);
        }
        } 
        printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]);
  
  
  
  //My function is taking an arrays
  //My function is spitting out a sentence with the array index
  
  //Game Plan
  //Create the function to accept an array
  // Create a Forloop to go through the array length
  //console.log the sentence
    //how to get the names and states by themselves
  
        //[i] gives me the first array going through the loop
        //[0] gives me the index which is the names
  //At the end it gives me the array and index of 1 which is the states


   // ****************************************************************************

// Activity 2 - Vacation Choices

// Follow the prompt for Activity #1, but use this format for the input array instead:

[ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

function printVacations (arrays) {

    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays.length; j++) 
        
        console.log(arrays[i][0] + ' is willing to go ' + arrays[i][1]);
      }
    } 
    printVacations([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ])
  
  
  //Follow the prompt for Activity #1, but use this format for the input array instead:
  
  // [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]
  
  // The output should look similar to this:
  
  // Tammy is willing to go to Tahiti, Bali or Hawaii.
  // Erin is willing to go to Banff, Alberta, Canada or Iceland.
  // Janet is willing to go to London or Hogwarts. 
  
  //another for loop and a if else statement
  
  //will go over tomorrow

 
  
  // ***************************************************************************

  //HackerRank Challenge

//Objective

//In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

//Task

//Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// Input Format

// Locked stub code in the editor reads string  from stdin and passes it to the function.

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// function isVowel(char){
//     const vowels = ['a','e','i','o','u'];
//     for(let i = 0; i<vowels.length; i++){
//       if(char === vowels[i]){
//         return true;
//       }
//     }
//     return false;
//   }
//   function vowelsAndConsonants (s){
//     for(let i = 0; i <s.length; i++){
//       if(isVowel(s[i])){
//         console.log(s[i]);
//       }
//     }
//     for(let i = 0; i <s.length; i++){
//       if(!isVowel(s[i])){
//         console.log(s[i]);
//       }
//     }
//   }
//   vowelsAndConsonants('alicia'); 
  