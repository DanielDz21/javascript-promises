/*
Are these code fragments equal?
In other words, do they behave the same way,
in any circumstances, for any handler functions?
*/
promise.then(f1).catch(f2);

promise.then(f1, f2);

// No, they are not equal, the first one handles with errors (.catch(f2))

/*
.then passes results/errors to the next .then/catch.
So in the first example, there’s a catch below,
and in the second one there isn’t, so the error is unhandled.
*/
