import React, { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import * as List from "./Lists";

const cheatMeals = List.cheatMeals;

const GetMeal = () => {

    const [meal, setMeal] = useState("");
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("")

    useEffect(() => {
        getMeal();
    }, []);

    function getMeal() {
        setLoading(undefined);
        setDone(undefined);

        setTimeout(() => {
            setMeal(cheatMeals[Math.floor(Math.random() * cheatMeals.length)]);
            setLoading(true);
            setTimeout(() => {
                setDone(true);
            }, 4000)
        }, 4000)
    };


    return (
        <div>
            <div>
                {done && <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>Today you are having...</h1>}
                {!done ? (
                    <Loading loading={loading} />
                ) : (
                    <div>
                    <h1 style={{ marginTop: "6rem", color: "white", fontSize: "6rem", fontFamily: 'Dancing Script, cursive' }}>{meal}</h1>
                    <div style={{fontSize: "0.5rem", color: "white", position: "relative", margin: "70px", width: "100%", textAlign: "center"}}>
                    <h1>Now stop overthinking and just eat! 😋</h1>
                    </div>
                    </div>
                    
                )}
            </div>
            {!done && !loading && <h1 style={{ fontSize: "16px", color: "white" }}>Checking your mood...</h1>}
            {loading && !done && <h1 style={{ fontSize: "16px", color: "white" }}>Preparing your meal...</h1>}
            
        </div>

    )
}

export default GetMeal;