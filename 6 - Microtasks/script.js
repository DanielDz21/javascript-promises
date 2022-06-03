/*
Promise handlers .then/.catch/.finally are always asynchronous.
Even when a Promise is immediately resolved,
the code on the lines below .then/.catch/.finally
will still execute before these handlers.
*/
let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // this alert shows first

/*
What if the order matters for us? How can we make code
finished appear after promise done?
Easy, just put it into the queue with .then:
*/
Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => alert("code finished"));
