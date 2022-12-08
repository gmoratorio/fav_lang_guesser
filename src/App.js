import './App.css';

import LocaleProvider from './context/LocaleContext';
import MainForm from './components/MainForm';

function App() {
    return (
        <LocaleProvider>
            <div className="App">
                <MainForm />
            </div>
        </LocaleProvider>
    );
}

export default App;
