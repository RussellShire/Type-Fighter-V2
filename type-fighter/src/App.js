import './App.css';
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import {attacks, validAttacks, validAttacksLower} from "./data/attacks";
import characterImagery from "./data/characterImagery";
import HealthBar from "./components/HealthBar";
import PlayAgain from "./components/PlayAgain";

function App() {
    const [fighter, setFighter] = useState({
        player: {
            health: 100,
            character: "ryu",
            isDefeated: false,
        },
        opponent: {
            health: 100,
            character: "ken",
            isDefeated: false,
        },
    })
    const [text, setText] = useState('')
    const [playerImage, setPlayerImage] = useState(characterImagery[fighter.player.character]['rest'])
    const [opponentImage, setOpponentImage] = useState(characterImagery[fighter.opponent.character]['rest'])

    // Kicking off the opponent attack loop
    useEffect(() => {
        if (fighter.opponent.isDefeated === false && fighter.player.isDefeated === false) {
            opponentTimer()
        }
    }, [fighter.opponent.isDefeated, fighter.player.isDefeated])

    // checking victory conditions
    useEffect(() => {
        if(fighter.player.health <= 0) {
            // console.log("You lose!")
            setFighter({...fighter, isDefeated: fighter.player.isDefeated = true})
            imageLoader("defeated", "player")
            imageLoader("victory", "opponent")
        }
    }, [fighter.player.health])

    useEffect(() => {
        if(fighter.opponent.health <= 0) {
            // console.log("You win!")
            setFighter({...fighter, isDefeated: fighter.opponent.isDefeated = true})

            imageLoader("defeated", "opponent")
            imageLoader("victory", "player")
        }
    }, [fighter.opponent.health])

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
            attacker === "player" ? setPlayerImage(image) : setOpponentImage(image)

            const imageIndex = imageArray.indexOf(image)
            if (imageIndex === characterImagery[character][attack]['hitFrame']){ // A hit is counted at the correct frame, so it can be interrupted
                // Logic for hit
                attackAttempt(attack, attacker)
            }
            await sleep(100)
        }
        if(attack === "defeated" || attack === "victory"){
            return
        }
        attacker === "player" ? setPlayerImage(characterImagery[character]['rest']) : setOpponentImage(characterImagery[character]['rest'])
    }

    function opponentMove(){
        const attackCount = validAttacks.length
        const randomNumber = Math.floor(Math.random() * attackCount)
        const opponentAttack = validAttacks[randomNumber]

        imageLoader(opponentAttack, "opponent")
    }

    async function opponentTimer(){
        await sleep(3000)
        if(fighter.opponent.isDefeated || fighter.player.isDefeated){
            return
        }
        opponentMove()
        opponentTimer()
    }

    function attackAttempt(attack, attacker){
        const attackPower = attacks[attack].power
        // const attackAccuracy = attacks[attack].accuracy
        const attackTarget = attacker === "player" ? "opponent" : "player"

        setFighter({...fighter, health: fighter[attackTarget].health -= attackPower})
    }

    const onChangeText = (e) => {
        if(fighter.opponent.isDefeated || fighter.player.isDefeated){
            return
        }
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

    const onPlayAgain = () => {
        setFighter(fighter => fighter = {
            player: {
                health: 100,
                character: fighter.player.character,
                isDefeated: false,
            },
            opponent: {
                health: 100,
                character: fighter.opponent.character,
                isDefeated: false,
            }
        })
        setPlayerImage(characterImagery[fighter.player.character]['rest'])
        setOpponentImage(characterImagery[fighter.opponent.character]['rest'])
    }

    return (
        <div className="App">
            <div className="fighters-container">
                <HealthBar health={fighter.player.health} />
                <HealthBar health={fighter.opponent.health} />
            </div>
            <div className="fighters-container">

                <div className="player-container">

                    <img src={ playerImage } alt={fighter.player.character} style={{height:250}} />
                </div>

                <div className="opponent-container">
                    <img src={ opponentImage } alt={fighter.opponent.character} style={{height:250, transform: "scaleX(-1)"}} />
                </div>
            </div>
            <div className="input-container">
                <Input onChangeText={onChangeText} text={text} />
                {fighter.player.isDefeated || fighter.opponent.isDefeated ?
                    <PlayAgain fighter={fighter} onPlayAgain={onPlayAgain} /> : ""
                }
            </div>
        </div>
    );
}

export default App;
