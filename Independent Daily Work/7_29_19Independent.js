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

