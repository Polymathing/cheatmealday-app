import React, {useEffect, useState} from "react";
import {cheatMeals} from "./Lists";

function Show() {
    const randomMeal = cheatMeals[Math.floor(Math.random() * cheatMeals.length)]
    
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Please... Show me 🤤")

    function handleClick() {
        setTimeout( () => {
        setShow(!show)
        {!show ? setText("Ok, now you can hide 😋") : setText("Please... Show me 🤤")}
    }, 1000);
    }
    return <div className="Show">
    {show && <h1>{randomMeal}</h1>}
    <button onClick={handleClick}>{text}</button>
    </div>
}

export default Show;