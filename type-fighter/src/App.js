import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import {attacks, validAttacks, validAttacksLower} from "./data/attacks";
import characterImagery from "./data/characterImagery";
import HealthBar from "./components/HealthBar";

function App() {
    const [fighter, setFighter] = useState({
        player: {
            health: 100,
            character: "ryu",
        },
        opponent: {
            health: 100,
            character: "ken",
        },
    })
    const [text, setText] = useState('')
    const [playerImage, setPlayerImage] = useState(characterImagery[fighter.player.character]['rest'])
    const [opponentImage, setOpponentImage] = useState(characterImagery[fighter.opponent.character]['rest'])

    // sleep and imageLoader work together to display arrays of imagery one after another with a delay between them
    // to put into a new file it'll need to be refactored to have the setImage or character passed in
    // (which will also allow it to be reusable for two different characters on screen)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function imageLoader(attack, attacker="player") {
        const character = fighter[attacker].character
        const imageArray = characterImagery[character][attack]['imageArray']

        for await (const image of imageArray) {
            attacker == "player" ? setPlayerImage(image) : setOpponentImage(image)

            const imageIndex = imageArray.indexOf(image)
            if (imageIndex === characterImagery[character][attack]['hitFrame']){ // A hit is counted at the correct frame, so it can be interrupted
                // Logic for hit
                attackAttempt(attack, attacker)
            }
            await sleep(100)
        }
        attacker === "player" ? setPlayerImage(characterImagery[character]['rest']) : setOpponentImage(characterImagery[character]['rest'])
    }

    function attackAttempt(attack, attacker){
        const attackPower = attacks[attack].power
        // const attackAccuracy = attacks[attack].accuracy
        const attackTarget = attacker === "player" ? "opponent" : "player"

        setFighter({...fighter, health: fighter[attackTarget].health -= attackPower})
    }

    const onChangeText = (e) => {
        const input = e.toLowerCase()

        if(validAttacksLower.includes(input)){ // look through the lower case attack keys for input
            // convert the input back into camelCase for accessing object
            const attack = validAttacks[validAttacksLower.indexOf(input)]

            setText('')
            imageLoader(attack)
        } else {
            setText(e)
        }
    }

    return (
        <div className="App">
            <div className="fighters-container">
                <div className="player-container">
                    <HealthBar health={fighter.player.health} />
                    <img src={ playerImage } alt={fighter.player.character} style={{height:250}} />
                </div>
                <div className="opponent-container">
                    <HealthBar health={fighter.opponent.health} />
                    <img src={ opponentImage } alt={fighter.opponent.character} style={{height:250, transform: "scaleX(-1)"}} />
                </div>
            </div>
            <div>
                <Input onChangeText={onChangeText} text={text} />
            </div>
        </div>
    );
}

export default App;
