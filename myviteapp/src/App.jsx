import React, { useState } from 'react';

const Hooks = () => {
    const [Counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    function increaseCounter() {
        setCounter(Counter + 1);
    }

    return (
        <div>
            <input 
                type='text' 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
            />
            <h1>
                {name} has clicked {Counter} times!!
            </h1>
            <button onClick={increaseCounter}> Increase </button>
        </div>
    );
}

export default Hooks;
