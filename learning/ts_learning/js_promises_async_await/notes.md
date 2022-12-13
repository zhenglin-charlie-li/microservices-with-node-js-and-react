https://javascript.info/promise-basics




# callbacks

Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, **actions that we initiate now, but they finish later.**

```javascript
function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}
```


```javascript
loadScript('/my/script.js'); // the script has "function newFunction() {…}"

newFunction(); // no such function!
```


How to solve this problem?
 

# a “callback-based” style
We can add a callback function as the second argument: the second argument is a function (usually anonymous) that runs when the action is completed.


```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});
```

How can we load two scripts sequentially: the first one, and then the second one after it?


every new action is inside a callback. That’s fine for few actions, but not good for many, so we’ll see other variants soon.



# Handling errors



The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
The second argument (and the next ones if needed) are for the successful result. Then callback(null, result1, result2…) is called.



Luckily, there are other ways to avoid such pyramids. One of the best ways is to use “promises”


# Promise

The constructor syntax for a promise object is:


```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
```

The function passed to new Promise is called the *executor*.

When new Promise is created, the executor runs automatically. 

Its arguments resolve and reject are callbacks provided by JavaScript itself.

Our code is only inside the executor.


When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.



resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

The executor should call only one resolve or one reject. Any state change is final. All further calls of resolve and reject are ignored


The properties `state` and `result` of the Promise object are internal. We can’t directly access them. We can use the methods `.then`/`.catch`/`.finally` for that. 


# .then

The most important, fundamental one is `.then`.





```javascript
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

The first argument of .then is a function that runs when the promise is resolved and receives the result.

The second argument of .then is a function that runs when the promise is rejected and receives the error.




If we’re interested only in successful completions, then we can provide only one function argument to .then
If we’re interested only in errors, then we can use `null` as the first argument




We can call .then on a Promise as many times as we want. 




# .catch

If we’re interested only in errors, then we can use `null` as the first argument.
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.









# .finally

The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.


A finally handler has no arguments.

A finally handler also shouldn’t return anything.











































