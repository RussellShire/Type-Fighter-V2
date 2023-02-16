import React from "react";
const Input = ({onChangeText, text}) => {

    return (
        <>
            <input
                type='text'
                className='form-control'
                placeholder='Attack!'
                value={text}
                onChange={(e) => onChangeText(e.target.value)}
                autoFocus
            />
        </>
    )
}

export default Input;
