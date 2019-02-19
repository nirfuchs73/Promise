'use strict';

// Implement the functions fetchX, fetchY to make this code work

function init() {
    // `fetchX()` and `fetchY()` return promises for
    // their respective values, which may be ready 
    // *now* or *later*. 
    add(fetchX(1), fetchY(3))
        // we get a promise back for the sum of those 
        // two numbers. 
        // now we chain-call `then(..)` to wait for the 
        // resolution of that returned promise. 
        .then(sum => {
            console.log('sum', sum); // that was easier!
        });
}

function add(xPromise, yPromise) {
    // `Promise.all([ .. ])` takes an array of promises, 
    // and returns a new promise that waits on them 
    // all to finish 
    return Promise.all([xPromise, yPromise])
        // when that promise is resolved, let's take the 
        // received `X` and `Y` values and add them together. 
        .then(values => {
            // `values` is an array of the messages from the 
            // previously resolved promises 
            return values[0] + values[1];
        });
}

function fetchX(x) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number') resolve(x);
        else reject(x + 'is not a number');
    });
}

function fetchY(y) {
    return new Promise((resolve, reject) => {
        if (typeof y === 'number') resolve(y);
        else reject(y + 'is not a number');
    });
}

