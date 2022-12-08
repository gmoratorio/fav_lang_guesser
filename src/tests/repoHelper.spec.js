import {
    groupReposByLanguage,
    getPreferredLanguage
} from '../helpers/repoHelper';

const testRepositories = [
    {language: 'JavaScript'},
    {language: 'Java'},
    {language: 'Haskell'},
    {language: 'Python'},
    {language: 'JavaScript'},
    {language: 'JavaScript'},
    {language: 'Haskell'},
    {language: 'Haskell'},
    {language: 'Haskell'},
    {language: 'Haskell'},
    {language: 'Java'},
    {language: 'null'},
    {language: 'null'},
    {language: 'null'}
];

it('groups repositories by language', () => {
    expect(groupReposByLanguage(testRepositories).JavaScript.length).toEqual(3);
    expect(groupReposByLanguage(testRepositories).Java.length).toEqual(2);
    expect(groupReposByLanguage(testRepositories).Haskell.length).toEqual(5);
    expect(groupReposByLanguage(testRepositories).Python.length).toEqual(1);
});

it('removes any languages labeled null', () => {
    expect(groupReposByLanguage(testRepositories).null).toEqual(undefined);
});

it('correctly guesses preferred language based on count of repos', () => {
    const languagesObject = {
        JavaScript: [{}, {}, {}],
        Haskell: [{}, {}, {}, {}, {}, {}],
        Python: [{}],
        Java: [{}, {}]
    };

    expect(getPreferredLanguage(languagesObject).name).toEqual('Haskell');
});
