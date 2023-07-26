import React, { useState, useEffect } from "react"
import axios from "axios"
import RecipeCard from "./RecipeCard"

export default function Recipes({ type }) {

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
  }, [type])


  useEffect(() => {
    type && setfilteredRecipes(
      recipe.filter(item =>
        item.type === type)
    )
  }, [recipe, type])


  const recipeList =
    !type ? recipe.map((food, k) => <RecipeCard food={food} key={k} />)
      : filteredRecipes.length === 0
        ? 'no recipes' :
        filteredRecipes.map((food, k) => <RecipeCard food={food} key={k} />)



  return (
    <div className="">

      <div className="recipe-container flex">
        {recipeList}
      </div>

    </div>
  )


}