import axios from 'axios';

function getRepos(username){
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
    return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
    getGithubInfo(username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then((response) => {
                return {
                    repos: response[0].data,
                    bio: response[1].data
                };
            }, (error) => {
                console.error('There is no user ' + username)
                console.log(error);
            });
    }
};

export default helpers;