import {useState, useEffect} from 'react';
import './App.css';

import {translate} from './helpers/localeHelper';
import UsernameInputField from './components/UsernameInputField';
import {DEFAULT_USERNAME} from './constants';

function App() {
    const [hasResults, setHasResults] = useState(false);
    const [username, setUsername] = useState(DEFAULT_USERNAME);

    useEffect(() => {
        // TODO - replace this with real fetch
        setTimeout(() => {
            setHasResults(true);
        }, 2000);
    }, []);

    const onChangeInput = (e) => {
        const newUsername = e.target.value;

        setUsername(newUsername);
    };

    const onSubmitUsername = (e) => {
        e.preventDefault();

        console.log(`Username to submit is: ${username}`);
    };

    const renderResultsIfNecessary = () => {
        let results = null;

        if (hasResults) {
            results = (
                <div className="resultsContainer">
                    {translate('results.title')}
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
