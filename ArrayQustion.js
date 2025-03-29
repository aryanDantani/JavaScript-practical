
// Question 1: How do you find the largest number in an array in JavaScript?

// Solution:
function findLargestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 1];
const largestNumber = findLargestNumber(numbers);
console.log(`The largest number is: ${largestNumber}`); // Output: The largest number is: 8

// Question 2: How do you find the smallest number in an array in JavaScript?

// Solution:
function findSmallestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

// Example usage:
const smallestNumber = findSmallestNumber(numbers);
console.log(`The smallest number is: ${smallestNumber}`); // Output: The smallest number is: 1

// Question 3: How do you calculate the sum of all numbers in an array in JavaScript?

// Solution:
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const sum = calculateSum(numbers);
console.log(`The sum of all numbers is: ${sum}`); // Output: The sum of all numbers is: 26

// Question 4: How do you find the average of all numbers in an array in JavaScript?

// Solution:
function calculateAverage(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    const sum = calculateSum(arr);
    return sum / arr.length;
}

// Example usage:
const average = calculateAverage(numbers);
console.log(`The average of all numbers is: ${average}`); // Output: The average of all numbers is: 4.333333333333333

// Question 5: How do you reverse an array in JavaScript?

// Solution:
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Example usage:
const reversedNumbers = reverseArray(numbers);
console.log(`The reversed array is: ${reversedNumbers}`); // Output: The reversed array is: [1, 8, 2, 7, 5, 3]

// Qustion 6: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// Solution: 
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

// Create a new Set from the array to automatically remove duplicates
const uniqueNumsSet = new Set(nums);

// Convert the Set back to an array using the spread operator
const uniqueNumsArray = [...uniqueNumsSet];

// Output the array with duplicates removed
console.log(uniqueNumsArray);

// Qustion 7: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// Solution: 
const data = ["apple","banana","apple", "banana", "egg"];

// Create a new Set from the array to automatically remove duplicates
const uniqueNumsSet = new Set(data);

// Convert the Set back to an array using the spread operator
const uniqueNumsArray = [...uniqueNumsSet];

// Output the array with duplicates removed
console.log(uniqueNumsArray);

