import {useState, useEffect} from 'react';
import './App.css';

import {getUserRepoLanguages} from './services/githubService';
import {translate} from './helpers/localeHelper';
import UsernameInputField from './components/UsernameInputField';
import {DEFAULT_USERNAME} from './constants';
import {getPreferredLanguage, groupReposByLanguage} from './helpers/repoHelper';

const INITIAL_FAV_LANGUAGE = null;
const INITIAL_USERNAME = DEFAULT_USERNAME;
const INITIAL_HAS_ERROR = false;

function App() {
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
        <div className="App">
            <div className="mainContainer">
                <div className="headerContainer">
                    {translate('header.title')}
                </div>

                <form className="inputContainer" onSubmit={onSubmitUsername}>
                    <UsernameInputField
                        defaultUsername={DEFAULT_USERNAME}
                        onChangeCallback={onChangeInput}
                    />
                </form>

                {renderResultsIfNecessary()}
                {renderErrorIfNecessary()}
            </div>
        </div>
    );
}

export default App;
