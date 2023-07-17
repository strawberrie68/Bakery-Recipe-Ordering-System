import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function RecipeCard(props) {


    return (
        <div className="recipe-card mt-4 rounded-lg  ">

            <div className='recipe-card-img-container'>
                <img className="rounded-t-lg " src={props.food.image} />
                <FontAwesomeIcon className="heart text-xl" icon="fa-solid fa-heart" style={{ color: "#e3e3e3", }} />
            </div>
            <div className='p-2'>
            <p className='text-zinc-500 text-sm'>{props.food.recipeTitle}</p>

            </div>

            
            {/* <p>{`Time: ${props.food.prepTime[0].time} ${props.food.prepTime[0].timeUnit}`}</p>
            <p>{`Servings: ${props.food.servings}`}</p>
            <p>{`Type: ${props.food.type}`}</p>
            <p>Ingredients:</p>
            {props.food.ingredients.map((item, i) => (
                <div key={i}>
                    {item.quantity} {item.quantityType} {item.ingredient} 
                </div>
            ))} */}



        </div>
    )
}