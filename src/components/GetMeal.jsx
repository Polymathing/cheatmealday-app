import React, { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import * as List from "./Lists";
import Footer from "./Footer";
import Card from "./Card";

// Choose Random Cheat Meal
const cheatMeals = List.cheatMeals;

const randomChoice = cheatMeals[Math.floor(Math.random() * cheatMeals.length)]

const GetMeal = () => {

    const [meal, setMeal] = useState({name: "", img: ""});
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
            setMeal(randomChoice);
            setLoading(true);
            setTimeout(() => {
                setDone(true);
            }, 1)
        }, 1)
    };


    return (
        <div>
            <div>
                {done && <div><p className="output-main-heading">Cheat Meal Picker</p><p className="output-heading">Meal of the day</p></div>}
                {!done ? (
                    <Loading loading={loading} />
                ) : (
                    <div>
                        <Card
                            name={meal.name}
                            img={meal.img}
                        />
                    <div>
                    <Footer/>
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