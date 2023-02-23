

// Problem --> 1
// Discription --> What this function does is that they will take a positive number as input. Then they multiply him by 3, then add 10, then divide by 2 and finally subtract 5. The output will return them.


 function mindGame(number) {

  if (typeof number !== "number"){
    return "Number is invalid.";
    }
  return (number * 3 + 10) / 2 - 5;
}




//Problem--> 2

// Discription --> The function evenOdd takes a parameter inputString and checks if it is a valid input. The input is considered valid if it is a string. If the input is not a string, the function returns a message "Invalid input. Please enter a string." If the input is a string, the function calculates the length of the string and checks if it is even or odd. If the length of the string is even, the function returns the string "Even". If the length of the string is odd, the function returns the string "Odd". The result of the function is stored in the constant variable value and logged to the console using console.log(value).

function evenOdd(inputString) {
    if (typeof inputString !== "string"){
      return "Invalid input. Please enter a string.";
      }

    let stringLength = inputString.length;
    if (stringLength % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  } 


// Problem ---> 3
// Discription ---> If a function takes an input of a number and divides it by 7, and if the remainder is equal to 7 then it will return the double of the original input.


function isLGSeven(number){
  if (typeof number !== "number"){
    return "Invalid input. Please enter a number.";
    }

  if (number < 7) {
  return  (number - 7);
  } else {
  return(number * 2);
  }
  }



// Problem - 4
//  Discription :Create a function with a parameter in its mode using a 'for loop', and use it to differentiate between 'Bad data' and 'Good data', pushing the 'Bad data' into an array, and returning its length.

 function findingBadData(data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const elements = data[i];
    if (typeof elements !== "number") {
      return "Please enter an array with numbers";
    }
  else  if (elements < 0) {
      count++;
    }
  }
  return count;
} 


// Problem - 5
// Discription --> I will set the first parameter to 21, the second parameter to 32 and the third parameter to 43. Then I will add them all together. After that, I will put a condition of 2000 or more and if it is true, I will print the result and return it.


function gemsToDiamond(gem1, gem2, gem3) {
  if (typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number') {
    return 'Number is invalid';
  }
  
  let totalDiamond= (gem1 * 21) + (gem2 * 32) + (gem3 * 43);
        if (totalDiamond > 2000) {        
            return totalDiamond - 2000;
        } 
        else {
            return totalDiamond;
        }
    } 
 
    
