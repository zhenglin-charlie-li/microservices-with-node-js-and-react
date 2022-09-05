# 02 - A Mini-Microservices App



# Initial App Setup

Generate a new React App using Create-React-App
Create an Express-based project for the Posts Service
Create an Express-based project for the Comments Service


`npx create-react-app client`

`npm install axios cors express nodemon`

npx: Run a command from a local or remote npm package
npm: javascript package manager


# React Project Setup

Ajax: Asynchronous JavaScript and XML. not a technology in itself. web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. 

XMLHttpRequest: XMLHttpRequest (XHR) objects are used to interact with servers. XMLHttpRequest is used heavily in AJAX programming.

axios: Promise based HTTP client for the browser and node.js; Make XMLHttpRequests from the browser; Make http requests from node.js

react: React is a JavaScript library for building user interfaces.

react-dom: React package for working with the DOM.

cors: Node.js CORS middleware; Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

express: Fast, unopinionated, minimalist web framework for node.

nodemon: a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

body-parser: Node.js body parsing middleware.Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

crypto: Random bytes from browserify stand alone

async function: The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression.

useState: useState Hook from React. It lets us keep local state in a function component.

useEffect: run some additional code after React has updated the DOM




# Notes on Sync Communication

| Pro                              | Con                                                           |
| -------------------------------- | ------------------------------------------------------------- |
| Conceptually easy to understand! | Introduces a dependency between services                      |
|                                  | If any inter-service request fails, the overall request fails |
|                                  | The entire request is only as fast as the slowest request     |
|                                  | Can easily introduce webs of requests                         |





# Notes on Async Communication

| Pros                                                   | Cons                 |
| ------------------------------------------------------ | -------------------- |
| Query Service has zero dependencies on other services! | Data duplication.    |
| Query Service will be extremely fast!                  | Harder to understand |


# Event Bus
- Many different implementations. RabbitMQ, Kafka, NATS...

- Receives events, publishes them to listeners

restart wsl `Get-Service LxssManager | Restart-Service`





