'use strict';

function init() {
    getCurrencies()
        .then((result) => {
            var res = Object.keys(result['results']);
            // console.log('results', result.results);
            console.log('res', res);
            // result.results.map(res => {
            //     console.log(res.currencyName);
            // });
        });
}

function onConvertClicked() {
    var fromCurr = document.querySelector('.from-curr').value;
    var toCurr = document.querySelector('.to-curr').value;

    if (fromCurr !== toCurr) {
        var prm = convert1(fromCurr, toCurr);
        prm.then((result) => {
            var key = fromCurr + '_' + toCurr;
            // console.log('result', result);
            var amount = document.querySelector('.amount').value;
            var totalAmount = (+amount * result[key]).toFixed(3);
            document.querySelector('.result').value = totalAmount;
        });
    }
}