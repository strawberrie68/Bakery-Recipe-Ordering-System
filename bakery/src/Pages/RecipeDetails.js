
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

export default function RecipeDetails(props) {

    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get('http://localhost:6012/recipe/:id')
            .then((res) => {
                setRecipe(res.data);
            })
            .catch((err) => {
                console.log('Error from RecipeList');
            });
    }, [id]);

    return (
        <div>

            <p>{props.food.recipeTitle}</p>
            <p>{`Time: ${props.food.prepTime[0].time} ${props.food.prepTime[0].timeUnit}`}</p>
            <p>{`Servings: ${props.food.servings}`}</p>
            <p>{`Type: ${props.food.type}`}</p>
            <p>Ingredients:</p>
            {props.food.ingredients.map((item, i) => (
                <div key={i}>
                    {item.quantity} {item.quantityType} {item.ingredient}
                </div>
            ))}

        </div>
    )
}