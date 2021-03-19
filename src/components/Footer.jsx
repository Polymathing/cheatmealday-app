import React from "react";

function Footer() {
    var year = new Date().getFullYear();

    return <footer>

    <p style={{marginTop: "150px", position: "relative", left: "-100px"}}>Copyright {year}</p>

    <p>Copyright {year}</p>

    </footer>
}

export default Footer;