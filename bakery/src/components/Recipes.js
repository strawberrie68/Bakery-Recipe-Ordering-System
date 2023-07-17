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

          "http://localhost:6012/recipe")
        setRecipe(res.data)
      } catch (err) { }

    }
    getRecipe()
  }, [type])

  // console.log(recipe)

  useEffect(() => {
    type && setfilteredRecipes(
      recipe.filter(item =>
          item.type === type)
    )
  }, [recipe, type])

  console.log(filteredRecipes)

  
  const recipeList = 
  filteredRecipes.length === 0 ?
  'no recipes':
  filteredRecipes.map((food,k )=> <RecipeCard food={food} key={k}/> )

  

  return (
    <div className="">
    
      <div className="flex">
      {recipeList}
      </div>
  
    </div>
  )


}