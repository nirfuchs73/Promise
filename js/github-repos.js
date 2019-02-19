'use strict';

function init() {
    var prm = getGithubUsers();
    prm.then((users) => {
        console.log('users', users);
        users.map(user => {
            console.log(user.login);
            // user.login
        });
    });
}