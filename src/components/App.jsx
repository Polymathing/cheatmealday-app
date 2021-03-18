import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GetMeal from "./GetMeal";

function App() {



    return(
      <div>
<<<<<<< HEAD
        <Header/> 
=======
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
>>>>>>> 061107ace90dcfaec1617e0b93be352e125609c7
      </div>
    )
    
}

export default App;