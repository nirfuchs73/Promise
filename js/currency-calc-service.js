'use strict';

function convert(fromCurr, toCurr) {
    // console.log(fromCurr, toCurr);
    var api = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + fromCurr + '_' + toCurr + '&compact=ultra&apiKey=2f57ef8241d5fde0180b';
    var prmRes = axios.get(api);

    prmRes.catch(err => {
        console.log('Service Cought an Error');
    });

    prmRes.finally(() => {
        console.log('Done handling res');
    });

    var prmAns = prmRes.then(res => {
        // console.log(res.data);
        return res.data;
    });

    console.log('Done Sending the AJAX Request');
    // console.log(prmAns);
    return prmAns;
}

function convert1(fromCurr, toCurr) {
    var api = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + fromCurr + '_' + toCurr + '&compact=ultra&apiKey=2f57ef8241d5fde0180b';
    return axios.get(api).then(res => res.data);
}