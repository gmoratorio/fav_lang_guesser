import {useState, useEffect} from 'react';
import './App.css';

import {getUserRepoLanguages} from './services/githubService';
import {translate} from './helpers/localeHelper';
import UsernameInputField from './components/UsernameInputField';
import {DEFAULT_USERNAME} from './constants';
import {getPreferredLanguage, groupReposByLanguage} from './helpers/repoHelper';

function App() {
    const [favoriteLanguage, setFavoriteLanguage] = useState(null);
    const [username, setUsername] = useState(DEFAULT_USERNAME);

    const onChangeInput = (e) => {
        const newUsername = e.target.value;

        setUsername(newUsername);
    };

    const onSubmitUsername = (e) => {
        e.preventDefault();

        getUserRepoLanguages(username).then((repositories) => {
            const groupedLanguages = groupReposByLanguage(repositories);
            const {name, repoCount} = getPreferredLanguage(groupedLanguages);

            setFavoriteLanguage(name);
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
            </div>
        </div>
    );
}

export default App;
