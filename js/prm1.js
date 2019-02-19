'use strict';

// Write a function compareToTen that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)

function prm1() {
    compareToTen(15)
        .then(result => console.log(result))
        .catch(error => console.log(error));

    compareToTen(8)
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) resolve('Greater than the value 10');
        else reject('Less than than the value 10');
    });
}