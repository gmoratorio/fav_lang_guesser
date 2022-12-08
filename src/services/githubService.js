export const getUserRepositories = (username = '') => {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};
