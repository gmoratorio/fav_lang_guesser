import React, {useState, useContext} from 'react';

import locales, {getDefaultLocaleName} from '../locales';
import {translate as nonContextTranslate} from '../helpers/localeHelper';

const LocaleContext = React.createContext();

const DEFAULT_LOCALE = getDefaultLocaleName();

export const useLocaleContextActions = () => {
    const {actions} = useContext(LocaleContext);

    return actions;
};

export const useLocaleContextState = () => {
    const {state} = useContext(LocaleContext);

    return state;
};

export default function LocaleContextProvider({children}) {
    const [currentLocale, setCurrentLocale] = useState(DEFAULT_LOCALE);

    const translate = (localeString) => {
        const localeObject = locales[currentLocale];

        return nonContextTranslate(localeObject, localeString);
    };

    const state = {currentLocale};
    const actions = {translate, setLocale: setCurrentLocale};

    return (
        <LocaleContext.Provider value={{state, actions}}>
            {children}
        </LocaleContext.Provider>
    );
}
