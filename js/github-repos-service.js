'use strict';

function getGithubUsers() {
    var api = 'https://api.github.com/users';
    return axios.get(api).then(res => res.data);
}

function getUserRepos(url) {
    return axios.get(url).then(res => res.data);
}