
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

import '../App.css';
import NavSide from "../components/NavBarSide"
import InsightToggle from '../components/InsightToggle';

import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RecipeDetails() {

    const [recipe, setRecipe] = useState([]);
    const [multiplier, setMultiplier] = useState(1)
    const [scaledRecipe, setScaledRecipe] = useState()
    const [seeInsights, setSeeInsights] = useState(false)

    const { id } = useParams();
    const location = useLocation();
    const recipeID = location.pathname.split("/")[3]
    const dispatch = useDispatch()



    useEffect((id) => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/recipe/${recipeID}`)
            .then((res) => {
                setRecipe(res.data);
                setScaledRecipe(res.data)
            })
            .catch((err) => {
                console.log('Error from RecipeList' + err);
            });
    }, [id,recipeID]);


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
    

    useEffect(() => {
        recipeQ &&

            setScaledRecipe(prevRecipe => ({
                ...prevRecipe,
                ingredients: recipeQ,
                servings: recipe.servings * multiplier
            })
            )

    }, [recipeQ]);



    function handleScaling() {
        toast(' 🎂   Added to Cart ', {
            className: 'toast-message'
        });
        dispatch(
            addProduct({ recipe, scaledRecipe, multiplier })
        )

    }



    function toggle (){
        setSeeInsights(prevState => !prevState)
    }


    return (
        <div>
            <div className='main-content'>
                <NavSide />

                <div className='m-8 main-body-detail '>
                    <div recipe-detail-start>
                        <p className='text-4xl font-worksans font-medium'>Recipe</p>
                        <p>{recipe.recipeTitle}</p>
                        <div onClick={toggle}>
                            <img alt="recipe-img"className="recipe-detail-img" src={recipe.image} />
                            <div className='recipe-insights'
                                
                            
                            >
                                <div className='flex items-center '
                                        
                                >
                                    <FontAwesomeIcon className="p-2" icon="fa-solid fa-caret-up" size="2xs" style={{ color: "#949494", }} />
                                    <FontAwesomeIcon className="p-1" icon="fa-regular fa-lightbulb" style={{ color: "#949494", }} size="xs" />
                                    <p className='text-slate-500'>Insights</p>
                                </div>

                               {seeInsights &&  <InsightToggle />}


                            </div>



                        </div>

                    </div>

                    <div className='recipe-detail-middle'>
                        <div className='recipe-detail-middle-input flex flex-col items-center'>
                            <label className="text-center text-xs font-worksans" htmlFor='serving' > Multiplier</label>
                            <div><p className='text-xs font-worksans text-center'>Servings</p></div>
                            <input
                                id="serving"
                                type="number"
                                placeholder='1.5x'
                                onChange={(e) => setMultiplier(e.target.value)}
                                min="1"
                                oninput="validity.valid||(value='');"
                                className='text-3xl mt-1 font-worksans'
                            />


                            <div><p className='text-4xl font-worksans mt-2 text-slate-600 text-center'>{recipe.servings * multiplier}</p></div>

                        </div>
                       

                        <div className='recipe-detail-end'>
                            <p className='text-xl mb-8  text-end font-worksans'>Ingredients</p>

                            {recipe.ingredients && recipe.ingredients.map((item, i) => (
                                <div
                                    key={i}
                                    className='mt-3 text-sm text-slate-500 text-end'
                                >
                                    {item.quantity * multiplier} {item.quantityType} {item.ingredient}
                                </div>
                            ))}



                        </div>

                    </div>





                </div>

            </div>
            <div className="corner-add flex flex-col justify-center" onClick={handleScaling}>
                <input type="button" value="Add to Cart" className='bg-grey p-2 text-slate-400 text-xs' />
                <div className='circle-button flex justify-center items-center	'>
                    <FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "#ffffff", }} />
                </div>

            </div>



            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />


        </div>
    )
}