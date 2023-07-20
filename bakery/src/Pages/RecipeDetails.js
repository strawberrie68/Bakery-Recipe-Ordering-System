
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import NavSide from "../components/NavBarSide"
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

export default function RecipeDetails() {

    const [recipe, setRecipe] = useState([]);
    const [multiplier, setMultiplier] = useState(1)
    const [scaledRecipe, setScaledRecipe] = useState()
    // const [servings, setServings] = useState(0)

    const { id } = useParams();
    const location = useLocation();
    const recipeID = location.pathname.split("/")[3]
    const dispatch = useDispatch()



    useEffect((id) => {
        axios
            .get(`http://localhost:6012/recipe/detail/${recipeID}`)
            .then((res) => {
                setRecipe(res.data);
                setScaledRecipe(res.data)
            })
            .catch((err) => {
                console.log('Error from RecipeList' + err);
            });
    }, [id]);

    // function onChange(e) {
    //     setMultiplier(e.target.value)
    //     console.log(multiplier)
    //     // handleScaling(multiplier)
    // }
    const [recipeQ, setRecipeQ] = useState(null)

    useEffect(() => {
        recipe.ingredients && setRecipeQ(
            recipe.ingredients.map(data => {
                return {
                    ...data,
                    quantity: data.quantity * multiplier,
                }
            }

            ))

    }, [multiplier]);
    console.log(recipeQ)

    useEffect(() => {
        recipeQ &&

            setScaledRecipe(prevRecipe => ({
                ...prevRecipe,
                ingredients: recipeQ,
                servings: recipe.servings * multiplier
            })
            )

    }, [recipeQ]);




    console.log(multiplier)

    function handleScaling() {
        dispatch(
            addProduct({ recipe, scaledRecipe, multiplier })
        )

    }





    // console.log(scaledRecipe)



    return (
        <div>
            <div className='main-content flex'>
                <NavSide />

                <div className='m-8 main-body-main'>
                    <p className='text-4xl font-worksans font-medium'>Recipe</p>
                    <p>{recipe.recipeTitle}</p>
                    <div>
                        <img src={recipe.image} />


                    </div>
                    <div>
                        <label htmlFor='serving' > Multiplier</label>
                        <input
                            id="serving"
                            type="number"
                            placeholder='Enter servings'
                            onChange={(e) => setMultiplier(e.target.value)}
                            min="1" 
                            oninput="validity.valid||(value='');"
                        />
                        <p>Servings {recipe.servings * multiplier}</p>
                    </div>
                    <div>

                    </div>
                    <p className='text-xl'>Ingredients</p>

                    {recipe.ingredients && recipe.ingredients.map((item, i) => (
                        <div key={i}>
                            {item.quantity * multiplier} {item.quantityType} {item.ingredient}
                        </div>
                    ))}



                </div>


            </div>
            <input type="button" onClick={handleScaling} value="Add to Cart" />



        </div>
    )
}