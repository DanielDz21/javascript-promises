let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Batata Frita"), 8000)
})

promise1.finally(() => alert("Promise ready"))
promise1.then(result => alert(result)); // <-- .then handles the result

new Promise((resolve, reject) => {
  throw new Error("errou amigo, errou");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err));  // <-- .catch handles the error object


// What’s the output of the code below?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1

/*
The function delay(ms) should return a promise.
That promise should resolve after ms milliseconds,
so that we can add .then to it
*/
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

/*
Rewrite the showCircle function in the solution of the task Animated circle
with callback so that it returns a promise instead of accepting a callback.
Solution: https://plnkr.co/edit/Q1jyGXvy9INMRG3Y?p=preview&preview
*/
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
