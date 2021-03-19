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
                {done && <h1 className="output-heading">Meal of the day</h1>}
                {!done ? (
                    <Loading loading={loading} />
                ) : (       
                    <div className="output-screen">
                    <div className="food-circle"></div>
                    <h1 style={{color: "#fff", fontSize: "6rem", fontFamily: "'Raleway', sans-serif", backgroundColor: "#3f1212", borderRadius: "70px", width: "60%",position: "relative", left: "200px" }}>{meal}</h1>
                    <div style={{fontSize: "0.5rem", color: "#3f1212", textAlign: "center"}}>
                        <p>Delicious!</p>
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