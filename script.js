const fs = require('fs');

// GLOBAL VARIABLE
let counter = 0;
let enteringBasementIndex;
fs.readFile('./input.txt', (err, data) => {
    console.time('time');
    if (err) {
        console.log('errorrrr');
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] == '40'){
                counter += 1;
            } else if (data[i] == '41') {
                counter -= 1;
            }
            
            // Question 2 below
            if (counter === -1) {
                //console.log('Entered basement at : ', i)
                enteringBasementIndex = i;
                break;
            }
        }
        console.timeEnd('time');
        console.log('Entered basement at : ', enteringBasementIndex);
        console.log('Counter: ',counter);
    }
})

// before coding:
// given my input (file with characters). What are the necessary steps to return the output y(which floor santa is on)

// 1. iterate through the file
// 2. if index[i] is equal to '(' THEN counter += 1
// 3. If index[i] is equal to ')' THEN counter -= 1
// 4. print output