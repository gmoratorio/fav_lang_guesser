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

const deserializeRepositories = (repositories) => {
    const deserializedRepos = repositories.map((repo) => {
        const {id, language, full_name, url} = repo;

        return {
            id,
            name: full_name,
            url,
            language
        };
    });

    return deserializedRepos;
};


