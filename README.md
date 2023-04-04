# Type Fighter

A simple game built in React with logic in JavaScript. A fighting game where you control your fighter using a text input.
Basically a React form that controls an output.

# Project Specification

- A fighting game where you type out attacks to try and reduce a computer opponents health to zero.
- You and the computer have a health bar that corresponds to how much health you have left.
- Animated characters attack each other after your input.
- The quicker you type the more damage you do, the computer will do a random attack every x seconds.
- Attacks have a chance to miss. They do different amounts of damage. 
- Attacks don't necessarily do the same damage each time. Broadly the longer it takes to type the more damage it should do and the more damage it does the higher chance to miss. 
- Mobile should make the computer slower than desktop because input is harder.
- Some attacks should be secret and human players shouldn't be able to look them up, rather discovering what is possible by typing in different attacks.
- There could be moves like block or dodge.
- In the future you could fight a tournament against computer characters who increase in difficulty, quicker attacks, better accuracy, stronger attacks.

# Hosted

Try the game here!
https://russellshire.github.io/Type-Fighter-V2/

# Optional To Do

-slow computer on mobile
-Add start conditions
-Animate being hit (and attacks being interrupted)
-Handle blocking?
-Strip spaces from input
-Add more attacks
-Disable ctrl-v
-Add character select

## Image assets
Credit:
https://www.spriters-resource.com/arcade/streetfighter2/


# Usage

[//]: # (## Changing git email)

[//]: # (git config --global user.email "EMAIL@EMAIL.COM")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
