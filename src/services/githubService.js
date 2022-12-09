import {isArray} from 'lodash';

import {generateGithubUserReposUrl} from '../helpers/urlHelper';

export const getUserRepositories = (username = '') => {
    const repoUrl = generateGithubUserReposUrl(username);

    return fetch(repoUrl)
        .then((response) => response.json())
        .then((response) => {
            return response;
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

export const getUserRepoLanguages = (username) => {
    return getUserRepositories(username).then((repositories) => {
        let deserializedRepositories = [];

        if (isArray(repositories)) {
            deserializedRepositories = deserializeRepositories(repositories);
        }

        return deserializedRepositories;
    });
};
