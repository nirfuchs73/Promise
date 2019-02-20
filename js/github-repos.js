'use strict';

function init() {
    var prm = getGithubUsers();
    prm.then((users) => {
        // console.log('users', users);
        var prms = [];

        users.map(user => {
            var prmUserRepos = getUserRepos(user.repos_url);
            prms.push(prmUserRepos);
        });

        Promise.all(prms)
            .then(userRepos => {
                var strHTML = '<tbody>';
                users.map((user, idx) => {
                    strHTML += '<tr>';
                    strHTML += `<td><img src="${user.avatar_url}"></td>`;
                    strHTML += `<td>${user.repos_url}</td>`;
                    strHTML += `<td>${userRepos[idx].length}</td>`;
                    strHTML += '</tr>';
                });
                // console.log(strHTML);
                strHTML += '</tbody>';
                document.querySelector('.avatars').innerHTML = strHTML;
            });
    });
}