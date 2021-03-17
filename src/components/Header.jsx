import React from "react";

function Header() {
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var text = ""
    
    if (hours > 0 && hours < 12) {
        text = "Good Morning, Maicon."
    }
    else if (hours < 18 ){
        text = "Good Afternoon, Maicon."
    }
    else {
        text = "Good night, Maicon."
    }

    return <header>
    <h1 className="hours">{hours}:{minutes}</h1>
    <h1 className="text">{text}</h1>
    <h3> The cheatmeal of the day is...</h3>
    </header>
}

export default Header;