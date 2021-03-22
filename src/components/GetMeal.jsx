import React, { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import * as List from "./Lists";
import Card from "./Card";

// Choose Random Cheat Meal
const cheatMeals = List.cheatMeals;

const randomChoice = cheatMeals[Math.floor(Math.random() * cheatMeals.length)]

const GetMeal = () => {

    const [meal, setMeal] = useState({ name: "", img: "" });
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

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
            }, 6000)
        }, 6000)
    };


    return (
        <div>
            <div>

                {done && <div>
                    <div></div>
                    <h1 className="output-heading">Meal of the day</h1></div>}

                {!done ? (
                    <Loading loading={loading} />
                ) : (
                    <div>
                        <Card
                            name={meal.name}
                            img={meal.img}
                        />
                    </div>

                )}
            </div>
            <div className="loading-p">
                {!done && !loading && <p>Checking your mood...</p>}
                {loading && !done && <p>Packing your meal...</p>}
            </div>

        </div>

    )
}

export default GetMeal;