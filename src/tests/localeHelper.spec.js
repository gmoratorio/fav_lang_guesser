import {translate} from '../helpers/localeHelper';

const testEnglishLocale = {
    header: {
        title: 'Go Banana!'
    }
};

const testSpanishLocale = {
    header: {
        title: '⚽️GOOOOOOOOOOOL!🇺🇾'
    }
};

it('correctly translates when a matching locale exists', () => {
    expect(translate(testEnglishLocale, 'header.title')).toEqual('Go Banana!');
    expect(translate(testSpanishLocale, 'header.title')).toEqual(
        '⚽️GOOOOOOOOOOOL!🇺🇾'
    );
});

it('prints the locale as-is if a matching locale cannot be found', () => {
    const nonLocaleText = 'Lorem Ricksum';

    expect(translate(testEnglishLocale, nonLocaleText)).toEqual(nonLocaleText);
});
