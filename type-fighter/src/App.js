import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import attacks from "./data/attacks";

import ken1 from "../src/assets/images/ken-punch_01.png"
import kenPunch2 from "../src/assets/images/ken-punch_02.png"
import kenKick2 from "../src/assets/images/ken-kick_02.png"
import kenKick3 from "../src/assets/images/ken-kick_03.png"

function App() {
    const [text, setText] = useState('')
    const [image, setImage] = useState(ken1)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function imageLoader(imageArray) {
       for (let i = 0; i < imageArray.length; i++) {
            setImage(imageArray[i])
            await sleep(100)
       }
       setImage(ken1)
    }

    const kenPunchImageArray = [kenPunch2]
    const kenKickImageArray = [kenKick2, kenKick3, kenKick2]

    const onChangeText = (e) => {
        const input = e.toLowerCase()

        if(attacks.hasOwnProperty(input)){ // look through the attacks object for key
            // console.log(attacks[input].power) // access a value on the nested object
            setText('') // reset the input ready to attack again

            if(input === "punch"){
                imageLoader(kenPunchImageArray)
            }
            if(input === "kick"){
                imageLoader(kenKickImageArray)
            }

        } else {
            setText(e)
        }
    }
    // const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"

    return (
        <div className="App">
            <img src={image} alt="ken" style={{height:250}} />
            <div>
                <Input onChangeText={onChangeText} text={text} />
            </div>
                {/*<p>{attacks.kick.power}</p>*/}
        </div>
    );
}

export default App;
