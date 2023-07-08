import React, { useState, useEffect }from 'react'
import axios from 'axios';
import RecipeCard  from './RecipeCard';

export default function RecipeConverter(){
const [recipe, setRecipe] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:6012/recipe')
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log('Error from RecipeList');
      });
  }, []);

const recipeList = 
recipe.length == 0 ?
'no recipes':
recipe.map((food,k )=> <RecipeCard food={food} key={k}/> )


    return(
        <div>
            <p>hello</p>
            <div>
               {recipeList}
            </div>

        </div>
    )
}