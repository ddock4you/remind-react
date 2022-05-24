import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const getData = async () => {
        const response = await fetch(
            "https://practice-http-react-default-rtdb.firebaseio.com/meals.json"
        );
        const jsonData = await response.json();

        const convertData = Object.keys(jsonData).map((id) => ({
            id,
            name: jsonData[id].name,
            description: jsonData[id].description,
            price: jsonData[id].price,
        }));
        setMeals(convertData);
        setIsLoading(false);
    };

    useEffect(() => {
        getData().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return <section className={classes.MealsLoading}>Loading...</section>;
    }

    if (httpError) {
        return <section className={classes.MealsLoading}>{httpError}</section>;
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
