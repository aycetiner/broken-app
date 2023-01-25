### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks: A callback is a function that is passed as an argument to another function, and is executed after the first function has completed.

  Promises: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

  Async/await: Async/await is a syntax that allows you to write asynchronous code that looks and behaves like synchronous code. It is built on top of promises and is available in modern JavaScript environments.

- What is a Promise?
  Promises are used to handle situations where you need to perform an asynchronous operation, such as fetching data from a server, and then do something with the result of that operation. Promises allow you to separate the asynchronous code from the synchronous code, making it easier to reason about and manage.

  Promises have three states:

  Pending: the initial state, neither fulfilled nor rejected.
  Fulfilled: meaning that the operation completed successfully.
  Rejected: meaning that the operation failed.

- What are the differences between an async function and a regular function?
  An async function is a special type of function in JavaScript that returns a promise, allowing you to use the await keyword inside the function.

  A regular function, on the other hand, is a standard JavaScript function that does not return a promise and cannot use the await keyword.

- What is the difference between Node.js and Express.js?
  Node.js is the JavaScript runtime that allows you to run JavaScript on the server, while Express.js is a web framework that runs on top of Node.js and makes it easy to build web applications and APIs.

- What is the error-first callback pattern?
  The error-first callback pattern involves passing a callback function as an argument to an asynchronous function. The callback function itself takes two arguments: the first argument is an error object, and the second argument is the result of the asynchronous operation.

- What is middleware?
  In the context of web development, middleware refers to a piece of software that sits between the application and the server or the client. Its main purpose is to act as an intermediary between the application and the client/server, and to perform certain tasks on the request and/or the response before passing it on to the next component.

- What does the `next` function do?
  The next function is used to pass control to the next middleware function in the chain. It is commonly used in middleware functions to allow the request to continue to be processed by subsequent middleware functions or routes.

  When a request is made to an Express.js application, it is passed through a chain of middleware functions. Each function has the opportunity to process the request and/or the response before passing it on to the next function. The next function is used to indicate that the current function has finished processing and that the request should be passed on to the next function in the chain.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

Naming: The variable names (elie, joel, matt) are not very descriptive and do not convey the purpose of the variables. It would be better to use more meaningful names, such as elieUser, joelUser, mattUser.

Performance: The function makes three separate calls to the Github API, one after the other, which can be slow and may cause the function to take a long time to complete. A better approach would be to make a single call to the API, and retrieve all the users in one go, and then filter the users that you need.

Structure: The function is doing all the work in one single function, which can make it hard to test and maintain. It would be better to extract the logic of fetching data from the API and handling the data into separate functions.

Dependency: The function is using the $.getJSON function from the jQuery library, which may not be available in all environments. It would be better to use a more lightweight or built-in library for making HTTP requests, such as the fetch API or the axios library.

Error handling: The function does not have any error handling mechanism, which makes it hard to identify and debug issues. It would be better to include error handling mechanism to handle errors that might occur when retrieving the data from the API.

Security: The function is using hardcoded URLs, and it may be a security issue if someone can change the URL and access unauthorized data. It would be better to use environment variables or configuration files to keep URLs and other sensitive information.
