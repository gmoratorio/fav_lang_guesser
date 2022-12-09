# Favorite Language Guesser

This simple app guesses a user's favorite programming language, based off the language they use most on GitHub.

## Steps to use

To run the guesser, clone this repository, then 

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view the guesser in your browser.

Enter the desired user's GitHub username in the input field, and hit the `Enter` key

If the username is found, the "favorite" programming language will be displayed.

If the user has no repositories, or there are no valid results, an error will be shown.

## Multi-language support
In order to support multiple audiences around the world, the guessing game supports multiple spoken languages.

Currently the supported spoken languages are:
 * English
 * Spanish
 * Pirate

## Unit Testing
To run unit tests

### `npm test`
