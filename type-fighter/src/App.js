import './App.css';
import React, { useState } from "react";
import Input from "./components/Input";

function App() {
    const [text, setText] = useState('')

    const onChangeText = (e) => {
        // console.log(e)
        setText(e)
    }

    return (
        <div className="App">
            <Input onChangeText={onChangeText} text={text} />
            <div>{text}</div>
        </div>
    );
}

export default App;
