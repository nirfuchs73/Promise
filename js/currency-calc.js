'use strict';

function init() {

}

function onConvertClicked() {
    var fromCurr = document.querySelector('.from-curr').value;
    var toCurr = document.querySelector('.to-curr').value;


    if (fromCurr !== toCurr) {
        var prm = convert(fromCurr, toCurr);
        prm.then((result) => {
            var key = fromCurr + '_' + toCurr;
            // console.log('result', result[key]);
            var amount = document.querySelector('.amount').value;
            document.querySelector('.result').value = (+amount * result[key]).toFixed(3);
        });
    }
}