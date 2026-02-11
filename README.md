# JavaScript-practical

# JavaScript Interview Questions and Answers

## 1. Promises

A **Promise** in JavaScript is an object representing the eventual result of an asynchronous operation. It serves as a placeholder for a value that might not be available immediately. Promises help manage asynchronous code, making it more readable and maintainable compared to traditional callback-based approaches.

A Promise can be in one of the following states:

- **Pending**: The initial state, representing that the asynchronous operation is still in progress.
- **Fulfilled (Resolved)**: The asynchronous operation completed successfully, and a result value is available.
- **Rejected**: The asynchronous operation failed, and an error or reason for failure is available.
a
### Promise Methods

Promises provide methods to handle these states:

- **.then()**: 
    - Called when the Promise is fulfilled, receiving the result value.
    - Example: `.then(result => { /* handle success */ })`

- **.catch()**: 
    - Called when the Promise is rejected, receiving the error or reason for failure.
    - Example: `.catch(error => { /* handle error */ })`

- **.finally()**: 
    - Called regardless of whether the Promise is fulfilled or rejected, often used for cleanup tasks.
    - Example: `.finally(() => { /* cleanup code */ })`

### Example Usage:

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  if(success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

myPromise
  .then(result => {
    console.log(result);  // "Operation Successful"
  })
  .catch(error => {
    console.log(error);   // "Operation Failed"
  })
  .finally(() => {
    console.log("Promise operation complete.");
  });

## 2. Hoisting in JavaScript

**Hoisting** is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase before code execution. It allows you to use variables and functions before they are declared in the code. However, it’s important to understand how hoisting works with different types of declarations.

### Table of Contents
1. [Variable Declarations](#variable-declarations)
2. [Function Declarations](#function-declarations)
3. [Function Expressions](#function-expressions)
4. [Class Declarations](#class-declarations)
5. [Summary](#summary)

---

### 1. Variable Declarations

#### **`var` Declarations**
Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can reference the variable before its declaration, but its value will be `undefined`.

#### **`let` and `const` Declarations**
Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a **ReferenceError**. These variables exist in a "temporal dead zone" from the start of the block until the declaration is encountered.

#### Examples:

// var Hoisting
console.log(a);  // undefined
var a = 5;
console.log(a);  // 5

// let and const Hoisting
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;

## 3. Closures in JavaScript

In JavaScript, a **closure** is the combination of a function and the **lexical environment** within which that function was declared. The lexical environment consists of any variables that were in scope at the time the function was created. 

A closure allows the inner function to access variables from the outer function's scope, even after the outer function has returned. This feature enables powerful capabilities such as data encapsulation, state preservation, and the creation of function factories.

### Table of Contents
1. [What is a Closure?](#what-is-a-closure)
2. [How Closures Work](#how-closures-work)
3. [Example of a Closure](#example-of-a-closure)
4. [Use Cases of Closures](#use-cases-of-closures)
5. [Summary](#summary)

---

### 1. What is a Closure?

A closure in JavaScript is formed when a function is defined within another function, allowing the inner function to access variables from the outer function, even after the outer function has finished execution. Closures "remember" the environment in which they were created, making them powerful for tasks that require state persistence.

### 2. How Closures Work

In JavaScript, functions have access to their own scope, the scope in which they were defined, and the global scope. When a function is created within another function, it forms a closure with the outer function's scope. This means the inner function can continue to access the outer function's variables even after the outer function has returned.

### 3. Example of a Closure

Here’s a simple example of how closures work in JavaScript:

function outerFunction(outerVar) {
  function innerFunction(innerVar) {
    console.log(outerVar, innerVar);
  }
  return innerFunction;
}

const myClosure = outerFunction('Hello');
myClosure('World'); // Output: Hello World

## 4. Async/Await in JavaScript ##

## Overview
Async/await is syntactic sugar built on top of Promises in JavaScript, designed to make asynchronous code easier to read and write. It allows asynchronous operations to be written in a more synchronous style, improving code readability and maintainability.

## How It Works
- The `async` keyword is used to define an asynchronous function, which implicitly returns a Promise.
- The `await` keyword can only be used inside an `async` function and is used to pause the execution of the function until a Promise is resolved or rejected.
- When a Promise is awaited, the `async` function pauses its execution, allowing other code to run, and resumes when the Promise is settled.

## Error Handling
Error handling in async/await is done using `try...catch` blocks, similar to synchronous code. This makes it easier to handle errors that may occur during asynchronous operations.

## Example
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

## Benefits of Async/Await
- Improves code readability by eliminating nested `.then()` chains.
- Simplifies error handling with `try...catch`.
- Makes asynchronous code look and behave more like synchronous code.

## Conclusion
Using async/await in JavaScript simplifies handling asynchronous operations, making code easier to read and maintain. It is a powerful alternative to Promises and callback-based approaches.

---

Feel free to contribute or raise issues if you find any improvements!

## License
This project is licensed under the MIT License.

## 5. Prototype in JavaScript ##

Overview

In JavaScript, a prototype is an object associated with every function and object by default. It serves as a blueprint for other objects, allowing them to inherit properties and methods.

When trying to access a property or method of an object, the JavaScript engine first looks within the object itself. If it's not found, the engine then searches the object's prototype, and so on up the prototype chain until the property or method is found, or the end of the chain is reached.

Example

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  return "Woof!";
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // Output: Buddy
console.log(myDog.bark()); // Output: Woof!

Explanation

In this example:

Dog.prototype is the prototype object for all instances of the Dog constructor function.

The bark method is added to the prototype, making it accessible to all Dog objects like myDog.

This mechanism promotes code reuse and efficiency by avoiding duplication of methods across multiple instances.

Conclusion

Using async/await in JavaScript simplifies handling asynchronous operations, making code easier to read and maintain. Likewise, understanding prototypes helps in creating efficient and reusable code through inheritance.

