import {groupBy, reduce} from 'lodash';

export const groupReposByLanguage = (repositories) => {
    return groupBy(repositories, (repo) => repo.language);
};

export const getPreferredLanguage = (languagesObject) => {
    const noPreferredLanguage = {
        name: 'None',
        repoCount: 0
    };

    const preferredLanguage = reduce(
        languagesObject,
        (preferredLanguage, repoList, languageName) => {
            if (repoList?.length > preferredLanguage.repoCount) {
                preferredLanguage = {
                    name: languageName,
                    repoCount: repoList.length
                };
            }

            return preferredLanguage;
        },
        noPreferredLanguage
    );

    return preferredLanguage;
};
