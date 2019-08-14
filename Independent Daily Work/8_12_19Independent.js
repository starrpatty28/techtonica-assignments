
// Independent Practice
// Go through the tutorial at https://regexone.com. Do at least lessons 1-10. This isn't Javascript specific, but it will help you understand how to match text with regular expressions.
// Write a function that takes a word and returns true if the word ends with tonica
// Write a function expression that takes a string replaces all instances of symantec with semantic?
// Write a function that takes a string and deletes all words that end in ing?
// Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
// Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]


// Write a function that takes a word and returns true if the word ends with tonica

function regEx(string){
    var regex = /tonica$/;
    var result = regex.test(string);
     return result;
    }
    console.log(regEx('techtonica'));

// Write a function expression that takes a string replaces all instances of symantec with semantic?

// Write a function expression that takes a string replaces all instances of symantec with semantic?

function replace(string) {

    let newWord = "I love symantec";
  
    let regExToSearchFor = /symantec/;
  
    let newWord2 = "semantic";
  
    let myNewStr = newWord.replace(regExToSearchFor, newWord2)
    return myNewStr;
  }
  console.log(replace('myNewStr'));
  