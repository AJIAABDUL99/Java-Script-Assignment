//Write a JavaScript function checkEvenOdd that takes a number as an argument and prints "Even" if the number is even and "Odd" if the number is odd.

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Example usage:
checkEvenOdd(4);  // Output: Even
checkEvenOdd(7);  // Output: Odd

//Write a JavaScript function checkSign that takes a number as an argument and prints "Positive" if the number is greater than zero, "Negative" if the number is less than zero, and "Zero" if the number is equal to zero.

function checkSign(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Example usage:
checkSign(8);   // Output: Positive
checkSign(-3);  // Output: Negative
checkSign(0);   // Output: Zero

//Write a JavaScript function compareNumbers that takes two numbers as arguments. If the first number is greater than the second, it should print "First is greater". If the second number is greater, it should print "Second is greater". If both are equal, it should print "Both are equal".

function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log("First is greater");
    } else if (secondNumber > firstNumber) {
        console.log("Second is greater");
    } else {
        console.log("Both are equal");
    }
}

// Example usage:
compareNumbers(12, 7);  // Output: First is greater
compareNumbers(3, 9);   // Output: Second is greater
compareNumbers(6, 6);   // Output: Both are equal
