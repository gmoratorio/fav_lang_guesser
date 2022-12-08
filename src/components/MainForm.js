import {useState} from 'react';

import {getUserRepoLanguages} from '../services/githubService';
import UsernameInputField from './UsernameInputField';
import {DEFAULT_USERNAME} from '../constants';
import {
    getPreferredLanguage,
    groupReposByLanguage
} from '../helpers/repoHelper';

import {
    useLocaleContextActions,
    useLocaleContextState
} from '../context/LocaleContext';
import OptionsHeader from './OptionsHeader';

const INITIAL_FAV_LANGUAGE = null;
const INITIAL_USERNAME = DEFAULT_USERNAME;
const INITIAL_HAS_ERROR = false;

export default function MainForm() {
    const {translate, setLocale} = useLocaleContextActions();
    const {currentLocale} = useLocaleContextState();
    const [favoriteLanguage, setFavoriteLanguage] = useState(null);
    const [username, setUsername] = useState(INITIAL_USERNAME);
    const [hasError, setHasError] = useState(false);

    const onChangeInput = (e) => {
        const newUsername = e.target.value;

        setUsername(newUsername);
    };

    const resetResults = () => {
        setFavoriteLanguage(INITIAL_FAV_LANGUAGE);
        setHasError(INITIAL_HAS_ERROR);
    };

    const onSubmitUsername = (e) => {
        e.preventDefault();
        resetResults();

        getUserRepoLanguages(username)
            .then((repositories) => {
                if (repositories.length) {
                    // note that these helpers below are agnostic of which remote repository service is used
                    // as long as the repos are deserialized in the same shape
                    const groupedLanguages = groupReposByLanguage(repositories);
                    const {name, repoCount} =
                        getPreferredLanguage(groupedLanguages);

                    setFavoriteLanguage(name);
                } else {
                    setHasError(true);
                }
            })
            .catch((error) => {
                setHasError(true);
            });
    };

    const handleRadioChange = (e) => {
        const newLanguage = e.target.value;

        setLocale(newLanguage);
    };

    const renderResultsIfNecessary = () => {
        let results = null;

        if (!!favoriteLanguage) {
            results = (
                <div className="resultsContainer">
                    {`${translate('results.title')} ${favoriteLanguage}`}
                </div>
            );
        }

        return results;
    };

    const renderErrorIfNecessary = () => {
        if (hasError) {
            return (
                <div className="errorContainer">
                    {translate('results.error')}
                </div>
            );
        }
    };

    return (
        <div className="mainContainer">
            <OptionsHeader
                radioValue={currentLocale}
                onRadioChange={handleRadioChange}
            />

            <div className="headerContainer">{translate('header.title')}</div>

            <form className="inputContainer" onSubmit={onSubmitUsername}>
                <UsernameInputField
                    defaultUsername={DEFAULT_USERNAME}
                    onChangeCallback={onChangeInput}
                />
            </form>

            {renderResultsIfNecessary()}
            {renderErrorIfNecessary()}
        </div>
    );
}
