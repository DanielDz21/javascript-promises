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
