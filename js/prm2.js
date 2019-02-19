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
        var res = array.find((item) => {
            return typeof item !== 'string';
        });
        // console.log('res', res);
        if (res === undefined) resolve(array);
        else reject('Not valid array');
    });
}

function sortWords(array) {
    // console.log('sortWords');
    return array.sort();
}