//Switch Statements

//Switch Statements: if we need to execute variious bits of code depending on whether the expressions is true or false. We can use an if-else but what is you need to have 20 if-else, that would be a lot of code. That is where the Switch statement comes in.

//switch = Keyword
//(car) = the thing to evualate
//cases = various scenarious (if else, if else
//break = when the case has been met, dont run anymore
// default = if does not meet any case, this is the last resort

//My example of an 'if else' statement

var myCar = 'mercedes';

if (car === 'toyota') {
    console.log('toyota is a great car');
} else if (myCar === 'chevy') {
    console.log('chevy is the most car');
} else if (myCar === 'honda') {
    console.log('honda cars are good on gas');
} else if (myCar === 'buick') {
    console.log('buick cars have a lot of space');
} else if (myCar === 'yukon') {
    console.log('yukon cars are very pricey');
} else {
  console.log('You need to get a new car');
} 

//My example of a Switch Case Statement

switch(myCar) {
    case 'toyota':
    console.log('toyota is a great car');
    break

    case 'chevy':
    console.log('chevy is the most car');
    break 

    case 'honda':
    console.log('honda cars are good on gas');
    break 
    
    case 'buick':
    console.log('buick cars have a lot of space');
    break 
    
    case 'yukon':
    console.log('yukon cars are very pricey');
    break 
    
    default:
        console.log('You need to get a new car');
}
