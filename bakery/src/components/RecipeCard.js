import React from 'react'
import IngredientList from './IngredientList'

export default function RecipeCard(props) {

    console.log(props.food)


    // const ingredientList = 
    // props.food.length == 0 ? 
    // 'nothing':
    // props.food.ingredients.map((ingredients, i) => ingredients[i])

    // console.log(ingredientList)
    // const list = Object.values(props.food.ingredients)[0]

    return (
        <div>
            <p>{props.food.recipeTitle}</p>
            <p>{`Time: ${props.food.prepTime[0].time} ${props.food.prepTime[0].timeUnit}`}</p>
            <p>{`Servings: ${props.food.servings}`}</p>
            <p>{`Type: ${props.food.type}`}</p>
            {props.food.ingredients.map((item, i) => (
                <div key={i}>
                    {item.quantity}
                    {item.quantityType}
                    {item.ingredient}
                </div>
            ))}



        </div>
    )
}