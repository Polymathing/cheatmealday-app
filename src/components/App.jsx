import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Show from "./Show";
import GetMeal from "./GetMeal";

function App() {

  const [ready, setReady] = useState(false)
  const [text, setText] = useState("GET CHEAT MEAL")

  function start() {
    setReady(!ready)
    setText("Hello world")
  }


    return(
      <div>
        {/* <Header/> */}
        {/* <Show/> */}
        {ready ? (
          <GetMeal/>
        ) : (
          <div>
            <h1 className="main-heading">Let me make this important decision for you...</h1>
            <button className="btn-main" onClick={start}>{text}</button>
          </div>
        )}
        
        {/* <Footer/> */}
      </div>
    )
    
}

export default App;