import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import {attacks, validAttacks, validAttacksLower} from "./data/attacks";
import characterImagery from "./data/characterImagery";
import HealthBar from "./components/HealthBar";

function App() {
    const [character, setCharacter] = useState('ken')
    const [text, setText] = useState('')
    const [image, setImage] = useState(characterImagery[character]['rest'])
    const [playerHealth, setPlayerHealth] = useState(100)

    // sleep and imageLoader work together to display arrays of imagery one after another with a delay between them
    // to put into a new file it'll need to be refactored to have the setImage or character passed in
    // (which will also allow it to be reusable for two different characters on screen)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

   async function imageLoader(attack, character) {
        const imageArray = characterImagery[character][attack]['imageArray']

        for await (const image of imageArray) {
            setImage(image)
            const imageIndex = imageArray.indexOf(image)
            if (imageIndex === characterImagery[character][attack]['hitFrame']){ // A hit is counted at the correct frame, so it can be interrupted
                console.log("hit!!")
                // Logic for hit
                attackAttempt(attack)
            }
           await sleep(100)
        }
        setImage(characterImagery[character]['rest'])
    }

    function attackAttempt(attack){
        const attackPower = attacks[attack].power
        const attackAccuracy = attacks[attack].accuracy

        setPlayerHealth(playerHealth => playerHealth -= attackPower)
    }

    const onChangeText = (e) => {
        const input = e.toLowerCase()

        if(validAttacksLower.includes(input)){ // look through the lower case attack keys for input
            // convert the input back into camelCase for accessing object
            const attack = validAttacks[validAttacksLower.indexOf(input)]

            setText('')
            imageLoader(attack, character)
        } else {
            setText(e)
        }
    }

    return (
        <div className="App">
            <HealthBar health={playerHealth} />
            <img src={ image } alt="ken" style={{height:250}} />

            <div>
                <Input onChangeText={onChangeText} text={text} />
            </div>
                {/*<p>{attacks.kick.power}</p>*/}
        </div>
    );
}

export default App;
