'use strict';

function init() {
    var prmGithubUsers = getGithubUsers();
    prmGithubUsers.then((users) => {
        // console.log('users', users);

        var prmsUserRepos = users.map((user) => {
            return getUserRepos(user.repos_url);
        });

        Promise.all(prmsUserRepos)
            .then((userRepos) => {
                var strHTML = '';
                users.map((user, idx) => {
                    strHTML += '<tr>';
                    strHTML += `<td><img src="${user.avatar_url}"></td>`;
                    strHTML += `<td>${user.repos_url}</td>`;
                    strHTML += `<td>${userRepos[idx].length}</td>`;
                    strHTML += '</tr>';
                });
                // console.log(strHTML);
                document.querySelector('.avatars').innerHTML = strHTML;
            });
    });
}