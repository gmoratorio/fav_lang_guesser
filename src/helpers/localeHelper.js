import {isString, isArray} from 'lodash';

import {english, spanish} from '../locales';

export const translate = (locale = '') => {
    // this localeObject easily be made dynamic by passing a localeObject arg
    // for this exercise it's deliberately hordcoded
    // to switch app to spanish, uncomment line below
    // const localeObject = spanish;
    const localeObject = english;

    let defaultText = locale;
    let textToDisplay = defaultText;

    let localeList = locale?.split('.');

    if (isArray(localeList)) {
        let translatedText = localeList.reduce((acc, nextKey) => {
            if (!!acc) {
                const nextStep = acc[nextKey];

                // we can do much more work here like checking if nextStep isString or an object
                // and pass dynamic args and things
                // But for this exercise it's left simple
                acc = nextStep;
            }

            return acc;
        }, localeObject);

        if (isString(translatedText)) {
            textToDisplay = translatedText;
        }
    }

    return textToDisplay;
};
