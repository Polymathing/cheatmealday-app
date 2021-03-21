import React, { useState } from "react";
import GetMeal from "./GetMeal";

function Header() {
    const [ready, setReady] = useState(false)
    const [text, setText] = useState("GET MY MEAL")

    function start() {
        setReady(!ready)
        setText("Hello world")
      }

    return <header>  
        {ready ? (
          <GetMeal/>
        ) : (
          <div className="main-header-block">
            <h1 className="main-heading">Cheat Meal Picker</h1>
            <p className="main-tagline">We make this important decision for you!</p>
            <button className="btn-main" onClick={start}>{text}</button>
          </div>
        )}
    </header>
}

export default Header;