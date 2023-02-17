import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import attacks from "./data/attacks";
import characterImagery from "./data/characterImagery";

function App() {
    const [character, setCharacter] = useState('ryu')
    const [text, setText] = useState('')
    const [image, setImage] = useState(characterImagery[character]['rest'])

    // sleep and imageLoader work together to display arrays of imagery one after another with a delay between them
    // to put into a new file it'll need to be refactored to have the setImage or character passed in
    // (which will also allow it to be reusable for two different characters on screen)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function imageLoader(imageArray, input) {
        for (let i = 0; i < imageArray.length; i++) {
            setImage(imageArray[i])
            if (i == characterImagery[character][input]['hitFrame']){ // A hit is counted at the correct frame, so it can be interrupted
                console.log("hit!")
            //     PUT LOGIC FOR HIT HERE
            }
            await sleep(100)
        }
        setImage(characterImagery[character]['rest'])
    }

    function attackAttempt(input){
        const attackPower = attacks[input].power
        const attackAccuracy = attacks[input].accuracy
    }

    const onChangeText = (e) => {
        const input = e.toLowerCase()

        if(attacks.hasOwnProperty(input)){ // look through the attacks object for key

            // console.log(attacks[input].power) // access a value on the nested object

            setText('') // reset the input ready to attack again
            imageLoader(characterImagery[character][input]['imageArray'], input)
        } else {
            setText(e)
        }
    }

    return (
        <div className="App">
            <img src={ image } alt="ken" style={{height:250}} />
            <div>
                <Input onChangeText={onChangeText} text={text} />
            </div>
                {/*<p>{attacks.kick.power}</p>*/}
        </div>
    );
}

export default App;
