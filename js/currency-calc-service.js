'use strict';


function convert(fromCurr, toCurr) {
    // console.log(fromCurr, toCurr);

    var prmAnsRes = axios.get('https://free.currencyconverterapi.com/api/v6/convert?q=' + fromCurr + '_' + toCurr + '&compact=ultra&apiKey=2f57ef8241d5fde0180b');

    prmAnsRes.catch(err => {
        console.log('Service Cought an Error');
    });

    prmAnsRes.finally(() => {
        console.log('Done handling res');
    });

    var prmAns = prmAnsRes.then(res => {
        // console.log(res.data);
        return res.data;
    });

    console.log('Done Sending the AJAX Request');
    // console.log(prmAns);
    return prmAns;
}