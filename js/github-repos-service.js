'use strict';

function getGithubUsers() {
    var api = 'https://api.github.com/users';
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