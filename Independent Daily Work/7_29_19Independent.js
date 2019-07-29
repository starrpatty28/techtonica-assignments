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
