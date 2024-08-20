//(For loop): Write a JavaScript function printNumbers that takes a number n as an argument and prints all numbers from 0 to n using a for loop.
function printNumbers(n) {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  }

  //(For Each loop): Write a JavaScript function doubleArray that takes an array of numbers as an argument and prints each number doubled using a forEach loop.
  function doubleArray(numbers) {
    numbers.forEach(function(number) {
        console.log(number * 2);
    });
}

// Example usage:
doubleArray([1, 2, 3, 4]);  // Output: 2 4 6 8

//(While loop): Write a JavaScript function countDown that takes a number n as an argument and prints all numbers from n down to 0 using a while loop.
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

// Example usage:
countDown(5);  // Output: 5 4 3 2 1 0

//(Do while loop): Write a JavaScript function printNumbersDoWhile that takes a number n as an argument and prints all numbers from 0 to n using a do...while loop.
function printNumbersDoWhile(n) {
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i <= n);
  }