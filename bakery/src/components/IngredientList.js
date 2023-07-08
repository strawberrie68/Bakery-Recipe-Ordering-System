import React from 'react'

export default function ingredientList(props){
    console.log(props.ingredients[0].ingredient)

    const list = 
    Object.values(props.ingredients)[0]




    return(
        <div>
            
            {list}
        </div>
    )
}