import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import attacks from "./data/attacks";
import characterImagery from "./data/imageArrays";

function App() {
    const [character, setCharacter] = useState('ryu')
    const [text, setText] = useState('')
    const [image, setImage] = useState(characterImagery[character]['rest'])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function imageLoader(imageArray) {
       for (let i = 0; i < imageArray.length; i++) {
            setImage(imageArray[i])
            await sleep(100)
       }
       setImage(characterImagery[character]['rest'])
    }
    const onChangeText = (e) => {
        const input = e.toLowerCase()

        if(attacks.hasOwnProperty(input)){ // look through the attacks object for key

            // console.log(attacks[input].power) // access a value on the nested object

            setText('') // reset the input ready to attack again
            imageLoader(characterImagery[character][input])
        } else {
            setText(e)
        }
    }

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
