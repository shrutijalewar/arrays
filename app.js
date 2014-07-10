var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('This is blue text.'));

console.log(chalk.blue.bgRed.bold("Hola"));

var evens = [2,4,6,8,10,12,14,16,18,20];
console.log(evens);
console.log((chalk.red(evens[1])));

// this is a loop.
for (var i = 0;i<10; i++){
  console.log(i);
}

for(var i = 0;i < 10; i++) {
  if(i%2 ===0) {
    //even
    console.log(chalk.red(i));
    }else{
    //odd
    console.log(chalk.cyan(i));
    }
}

for(var j = 0; j < evens.length; j++){
console.log("evens ->" +  evens[j] );
}

var numbers = [];
var response = prompt('Enter a number or (q)uit: ');
while(response != 'q') {
response = parseInt(response);
numbers.push(response);
response = prompt("Enter a number or (q)uit: ")
}

console.log(numbers);
var sum = 0 ;

//for loop and sum formula
for(var k = 0; k < numbers.length; k++) {
sum += numbers[k];
}

console.log(sum);


