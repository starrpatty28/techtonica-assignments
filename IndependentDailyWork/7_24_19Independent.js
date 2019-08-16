//Independent Work for 7/24/19

function calculate(num1,operator,num2){      //function taking in 3 arguments 
    var equation = '';  
                         //empty variable
     equation = eval(num1+operator+num2);    //variable = eval(evaluates if its a string)
     return equation                         //return the equation variable 
    
    }
    console.log(calculate(3, '+', 7));      //call the function and give it numbers for the arg

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

   
   
   
   
    var array = ['lion', 'tiger', 'bears', 'cheetah', 'puma'];  //an array of animals

    function printCuteAnimals(array){          //function that takes in a array
      if(Array.isArray(array)) {       //checkk if the array is an array if not it wont run
        console.log(array);           //print out the arry
        console.log(array.length);    //print out its length
        console.log(array.pop());    //remove the last item in the array
        console.log(array.length);  //print the array new length since you took off last one
        var newArray = ['duck', 'turtle', 'rhino'];  //create a new array (for adding to old array)
        lastArray = array.concat(newArray);  //lastArray will now be the old array with the new animals from NewArra added to it (concat)
        console.log(lastArray);    //print newArray (it should have new animals on it) 
    
      }
      return lastArray;
    }
    printCuteAnimals(array);  //call the function, if the function is no an array it will not even run.

    https://www.w3schools.com/jsref/jsref_concat_array.asp
    https://www.w3schools.com/jsref/jsref_pop.asp



