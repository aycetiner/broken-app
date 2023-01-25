# Broken App Issues

- Revise the route to be a get route instad of a post route
- Added the missing expressError error handling class and wrote the middleware for error handling
- changed the variable declaration types to const for all required modules
- Added the keyword async before the callback function in app.post
- Added the json parser app.use(express.json());

In this code block, the issue is with the following line:

let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

The "results" variable is an array of promises, so calling the ".map()" function on it will not give you the data you expect. Instead, you should use the "Promise.all()" method to wait for all the promises to resolve, then use the ".map()" function on the resolved data.

Also, in this code block, you are using JSON.stringify(out) to send the response. But out is an array of objects. JSON is used to transmit data between the server and the client, and is not necessary to stringify the data before sending it. Just send the array of objects directly.
