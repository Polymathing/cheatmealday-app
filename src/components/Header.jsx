import React, { useState } from "react";
import GetMeal from "./GetMeal";

function Header() {
    const [ready, setReady] = useState(false)
    const [text, setText] = useState("DECIDE FOR ME")

    function start() {
        setReady(!ready)
        setText("Hello world")
      }

    return <header>  
        {ready ? (
          <GetMeal/>
        ) : (
          <div>
            <h1 style={{color:"white"}}>What should you eat today?</h1>
            <button className="btn-main" onClick={start}>{text}</button>
          </div>
        )}
    </header>
}

export default Header;