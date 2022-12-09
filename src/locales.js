const english = {
    header: {
        title: 'Favorite Language Guessing Game!'
    },
    input: {
        label: 'Enter GitHub username, then press Enter'
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
        label: 'Ingrese el nombre de usuario de GitHub, y después presiona enter'
    },
    results: {
        title: 'El idioma preferido de este usuario es: ',
        error: 'Tuvimos un error encontrando el idioma preferido. Por favor verifique el nombre del usuario y intente de nuevo.'
    }
};

const pirate = {
    header: {
        title: "Arr, this here device be for guessin' a Pirate's favorite Black Magic"
    },
    input: {
        label: "Enter the Pirate's codin' name from the land of GitHub"
    },
    results: {
        title: "This Pirate's favorite Black Magic be: ",
        error: "Avast! The Kraken sent yer message down to Davy Jones' Locker. Dare ye voyage again? Try, if ye dare."
    }
};

export const availableLanguages = [
    {name: 'english', displayName: 'English 🇬🇧'},
    {name: 'spanish', displayName: 'Español 🇪🇸'},
    {name: 'pirate', displayName: 'Pirate 🏴‍☠️'}
];

export const getDefaultLocaleName = () => {
    return availableLanguages[0].name;
};

export default {english, spanish, pirate};
