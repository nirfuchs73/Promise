'use strict';

// Write two functions: makeAllCaps, sortWords that gets an array and return a promise,
// if the array contains anything but strings, it should throw an error.
function prm2() {

    makeAllCaps(['cucumber', 'tomatos', 'avocado'])
        .then(sortWords)
        .then((result) => console.log(result))
        .catch(error => console.log(error));

    makeAllCaps(['cucumber', 44, true])
        .then(sortWords)
        .then((result) => console.log(result))
        .catch(error => console.log(error));
}

function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        array.find((item) => {
            if (typeof item !== 'string') reject('Not valid array');
        });
        resolve(array.map(item => item.toUpperCase()));
    });
}

function sortWords(array) {
    return new Promise((resolve, reject) => {
        resolve(array.sort());
    });
}