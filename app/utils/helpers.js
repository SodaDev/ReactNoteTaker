var axios = require('axios');

function getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username);
}

module.exports = {
    getGithubInfo: function (username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(function (response) {
                return {
                    repos: response[0].data,
                    bio: response[1].data
                };
            }, function(error){
                console.error('There is no user ' + username)
                console.log(error);
            });
    }
};