// There are 6 static methods in the Promise class.We’ll quickly cover their use cases here.

/*
Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
The new promise resolves when all listed promises are resolved,
and the array of their results becomes its result.
*/
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));

/*
Promise.allSettled just waits for all promises to settle,
regardless of the result. The resulting from the code below:
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
*/
let urls2 = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls2.map(url => fetch(url)))
  .then(results => { // So for each promise we get its status and value/error.
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls2[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls2[num]}: ${result.reason}`);
      }
    });
  });

/*
Promise.race is similar to Promise.all, but waits only for the
first settled promise and gets its result (or error).
*/
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

/*
Promise.any Similar to Promise.race, but waits only
for the first fulfilled promise and gets its result
*/
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

/*
Promise.resolve(value) creates a resolved promise with the result value.
*/
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}

/*
Promise.reject(error) creates a rejected promise with error.
*/
let promise = new Promise((resolve, reject) => reject(error));
// In practice, this method is almost never used.
