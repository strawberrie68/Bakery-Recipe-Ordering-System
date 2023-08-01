import React, { useState, useEffect } from "react"
import axios from "axios"
import RecipeCard from "./RecipeCard"
import AddRecipeBox from "./AddRecipeBox"
import { Link } from 'react-router-dom';

export default function Recipes({ category }) {

  const [recipe, setRecipe] = useState([])
  const [filteredRecipes, setfilteredRecipes] = useState([])

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const res = await axios.get(

          `${process.env.REACT_APP_SERVER_URL}/recipe`)
        setRecipe(res.data)
      } catch (err) { }

    }
    getRecipe()
  }, [category])
  

 


  useEffect(() => {
    category && setfilteredRecipes(
      recipe.filter(item =>
        item.category === category)
    )
  }, [recipe, category])


  const recipeList =
    !category ? recipe.map((food, k) => <RecipeCard food={food} key={k} />)
      : filteredRecipes.length === 0
        ? 'no recipes' :
        filteredRecipes.map((food, k) => <RecipeCard food={food} key={k} />)



  return (
    <div className="">

      <div className="recipe-container flex">
        {recipeList}
        <Link to="/create-recipe">
            <AddRecipeBox />
        </Link>
       
      </div>

    </div>
  )


}