const english = {
    header: {
        title: 'Favorite Language Guessing Game!'
    },
    input: {
        label: 'Enter username'
    },
    results: {
        title: "This user's favorite language is: ",
        error: 'There was an error fetching favorite language, please check the username and try again.'
    }
};

const spanish = {
    header: {
        title: 'Adivinamos El Idioma Preferido!'
    },
    input: {
        label: 'Nombre de usuario'
    },
    results: {
        title: 'El idioma preferido de este usuario es: ',
        error: 'Tuvimos un error encontrando la idioma preferida. Por favor verifique el nombre del usuario y intente de nuevo.'
    }
};

export const availableLanguages = [
    {name: 'english', displayName: 'English 🇬🇧'},
    {name: 'spanish', displayName: 'Español 🇪🇸'}
];

export const getDefaultLocaleName = () => {
    return availableLanguages[0].name;
};

export default {english, spanish};
