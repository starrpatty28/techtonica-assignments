//Intro to Testing

//Software Testing: the process of executing a program application with the intent of finding software bugs
    //Testing protects against future problems, living documentation, forced you to think about if a user tries to abouse the software
//Different Test
    //Unit Testing=>Integrating Testing=>System Testing=>Acceptance Testing

//Unit Test: can test a single function
//Integration Test: Various pieces of code working together (many units at once), does the unit test still past when different functions are working together (3 functions)

//System Test: The process of testing an integrated system ti verify it meets specified requirements (if a bunch of functions combined together in order to work as one)

//Acceptance Test: Usses the product like the users would, evualating the compliance, does it meet the clients expectations fir userability.

//First I started with a simple 

                    var sum = function(a) {
                    
                        return a;
                    };
                    sum(1);

//Then I added different things to make the function bigger

                    var sum = function(a,b) {
                        if(a === 5 && b === 10) {
                        return a + b;
                        }
                    };
                    sum(5,10);

//Then I added a different sum to see if the function will past and it didnt, the reason was the if statement. I then commented out my

                var sum = function(a,b) {
                    if(a === 5 && b === 10) {
                    return " a + b, Great Job!"
                    } else {
                    return "Please enter 5 and 10 only."
                    }
                 };
                sum('hello', 'world');
                sum(5,10;)

                
                    


















// [Challenge 1] - Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.

// Resluts 
// input               value  
// metersToInches(0);    0
// metersToInches(0);    39.37010
// metersToInches(0);    59.05515
// metersToInches(0);    614.17356


//The function that takes in a input of numbers (of meters)
//The function spits out the numbers given and converts them to inches

//Game plan
//Create a function that takes in integers
//Create variables (with the conversion) to convert your numbers to inches
//create another varaible that contains the conversion with the message
//console.log your answer



function metersToInches () {


}
metersToInches();


// ****************************************************************************

// [Challenge 2] - Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

//The function takes in an number (arg)....it should take in a string and num
//The function spits out a string that number of times 

//Game Plan
//Create a for loop