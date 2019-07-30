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

var myCar = 'yukon';

switch(myCar) {
    case 'toyota':
    console.log('toyota is a great car');
    break;

    case 'chevy':
    console.log('chevy is the most car');
    break;

    case 'honda':
    console.log('honda cars are good on gas');
    break; 
    
    case 'buick':
    console.log('buick cars have a lot of space');
    break; 
    
    case 'yukon':
    console.log('yukon cars are very pricey');
    break; 
    
    default:
        console.log('You need to get a new car');
}

// Independent Practice

// Techtonica staff will assign pairs.

// Refer back to the calculator activity from the JavaScript 1 lesson. Refactor your       code to replace your if/else statement(s) with switch statement(s).

//This is my calculator from the last JavaScript 1 lesson

            function calculate(num1,operator,num2){   
                 var equation = '';   
                    equation = eval(num1+operator+num2);    
                
                    return equation                         
                    
                    }
                    console.log(calculate(3, '*', 7));


// Now I have to turn this in to a 'if else' statement because it was not asked the first time so I can visually see how to make my Switch statement (im a visual learner)

                function calculate(num1,operator,num2) {

                    var equation = '';
                
                    if ( operator === '+') {
                        console.log(eval(num1+operator+num2));
                    } else if (operator === '-') {
                        console.log(eval(num1+operator+num2));
                    } else if (operator === '*') {
                        console.log(eval(num1+operator+num2));
                    } else if (operator === '/') {
                        console.log(eval(num1+operator+num2));
                    } else {
                        console.log('You are not using the right operator');
                    }
                    } 
                    calculate(20, '%', 10);

//Next I have to turn my 'if else' statement into a Switch Statement

                function calculate(num1,operator,num2) {

                    switch(operator) {
                            case '+':
                            console.log(eval(num1+operator+num2));
                            break;
                
                            case '-':
                            console.log(eval(num1+operator+num2));
                            break; 
                
                            case '*':
                            console.log(eval(num1+operator+num2));
                            break; 
                
                            case '/':
                            console.log(eval(num1+operator+num2));
                            break;
                
                            default: 
                            console.log('Use another operator');
                    }
                }
                calculate(3, '+', 7);





