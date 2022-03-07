//FIZZ BUZZ 
/*modulus operator is saying take first number divide by 
second number and return the the remainder 
so 7 % 3 is 7 divided by 3 which is 2 and return the 
emainder of 1 */

//console.log(7 % 3)

/*for every number from 1-20 perform an action 
1. need to run through every number so use a for loop
2. use conditional statments to determine what numbers will
be fizz, buzz and fizzBuzz */

const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++){
    if( i % 15 === 0) {
      console.log("fizzBuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    } else if(i % 5 === 0) {
      console.log("buzz");
    } else 
      console.log(i);
    }
  }
fizzBuzz(24)
