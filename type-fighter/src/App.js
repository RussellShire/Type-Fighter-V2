import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";
import attacks from "./data/attacks";
function App() {
    const [text, setText] = useState('')

    const onChangeText = (e) => {
        const input = e

        if(attacks.hasOwnProperty(input)){ // look through the attacks object for key
            console.log("found")
            console.log(attacks[input].power) // access a value on the nested object
            setText('') // reset the input ready to attack again
        } else {
            setText(e)
        }
    }

    return (
        <div className="App">
            <Input onChangeText={onChangeText} text={text} />
            <div>{text}</div>
            <p>{attacks.kick.power}</p>
        </div>
    );
}

export default App;
