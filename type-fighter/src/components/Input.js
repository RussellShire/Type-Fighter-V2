import React, { useState } from "react";
// Test comment
const Input = () => {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e)
    }

    return (
        <>
            <p>{text}</p>
            <input
                type='text'
                className='form-control'
                placeholder='Attack!'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
        </>
    )
}

export default Input;
