import React, { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateRecipe = props => {

    const [recipe, setRecipe] = useState({
        recipeTitle: '',
        image: '',
        servings: '',
        ingredients: {
            quantity: '',
            quantityType: '',
            ingredient: ''
        } ,
        prepTime: {
            time: '',
            timeUnit: ''
        },
        type: '',
        tag: '',
        fav: false,

    });


    const [ingredientArray, setIngredientArray] = useState([
        { ingredients: {
            quantity: '',
            quantityType: '',
            ingredient: ''
        }}
])



console.log(ingredientArray)




    const handleIngredientAdd = () => {
        setIngredientArray([ ...ingredientArray, { ingredients: {
            quantity: '',
            quantityType: '',
            ingredient: ''

        } }])
    }

    const handleIngredientRemove = (index) => {
        const Array = [...ingredientArray];
        Array.splice(index, 1)
        setIngredientArray(Array)

    }
    // const onChange = (event) => {
    //     const { name, value } = event.target

        
    //         setIngredientArray(prevArray => {
    //             const newArray = {...prevArray}
    //             if(name === "quantity" || name === "quantityUnit"){
    //                 newArray.ingredients[name] = value
    //                 return newArray
    //             }
                
    //         }
             
    //         )
        

    // }


    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        if(name === "recipeTitle" || name === "image" || name=== "type" || name === "tag" || name == "fav" || name === "servings"){
            setRecipe(prevRecipe => {
                return {
                    ...prevRecipe,
                    [name]: type === "checkbox" ? checked : value
    
                }
            })
        }
        if(name === "time" || name === "timeUnit"){
            setRecipe(prevRecipe => {
                const newRecipe = {...prevRecipe}
                newRecipe.prepTime[name] = value
                return newRecipe
            }
             
            )
        }
        if(name === "ingredients"){
            setRecipe(prevRecipe => {
                return {
                    ...prevRecipe,
                    ingredients: ingredientArray
                }
            })
        }
        

    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(recipe)

        // axios
        //     .post(`${process.env.REACT_APP_SERVER_URL}/recipe/add`, recipe)
        //     .then((res) => {
        //         setRecipe({
        //             recipeTitle: '',
        //             image: '',
        //             servings: '',
        //             ingredients: {
        //                 quantity: '',
        //                 quantityType: '',
        //                 ingredient: ''
        //             },
        //             prepTime: {
        //                 time: '',
        //                 timeUnit: ''
        //             },
        //             type: '',
        //             tag: '',
        //             fav: false

        //         });


        //         toast('Recipe Created', {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: true,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //         });


        //     })
        //     .catch((err) => {
        //         console.log('Error in Create Recipe!');
        //         toast.error('Recipe was not created', {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: true,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //         });
        //     });
    };


    return (
        <div>
            <div className='CreateRecipe-page'>
                <div className='CreateRecipe-container'>
                    <div className='row'>

                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 font-medium font-worksans text-4xl mt-10 mb-2'>Add Recipe</h1>
                            <p className="text-slate-400 mb-10">Create new recipes here. Please enter the details</p>

                            <form noValidate onSubmit={onSubmit}>



                                <label htmlFor="recipeTitle">Name</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        placeholder='Durian Mochi'
                                        name='recipeTitle'
                                        className='form-control mt-1'
                                        value={recipe.recipeTitle}
                                        onChange={onChange}
                                    />
                                </div>

                                <label htmlFor="recipe-image">Image</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        placeholder='unsplash.com/durian-mochi'
                                        name='image'
                                        className='form-control mt-1'
                                        value={recipe.image}
                                        onChange={onChange}
                                    />
                                </div>

                                <label htmlFor="recipe-servings">Servings</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='number'
                                        placeholder='Number of Servings'
                                        name='servings'
                                        className='form-control mt-1'
                                        value={recipe.servings}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className="mb-1" htmlFor='ingredients'>Ingredients</label>
                                    { ingredientArray && ingredientArray.map((item, index) =>(
                                        <div key={index} className="ingredients-create-container mb-1">
                                            <div>
                                               { index === 0 && < label htmlFor='ingredients-qty'>Qty</label>}
                                                <div className='form-group'>
                                                    <input
                                                        id="ingredients-qty"
                                                        type='number'
                                                        placeholder='1000'
                                                        name='quantity'
                                                        className='form-control mr-1'
                                                        value="quantity"
                                                        onChange={onChange}
                                                    />
                                                </div>

                                            </div>
                                            <div >
                                                { index === 0 && < label htmlFor='ingredients-qtyUnit'>Unit</label>}
                                                <div className='form-group'>
                                                    <input
                                                        id="ingredients-qtyType"
                                                        type='text'
                                                        placeholder='g'
                                                        name='quantityType'
                                                        className='form-control mr-1'
                                                        value="quantityType"
                                                        onChange={onChange}
                                                    />
                                                </div>

                                            </div>
                                            <div>
                                                <div className='form-group'>
                                                    { index === 0 && <label className="" htmlFor='ingredients-qtyUnit'>Ingredient</label>}
                                                    <input

                                                        type='text'
                                                        placeholder='Durian'
                                                        name='ingredient'
                                                        className='form-control mr-1 '
                                                        value="ingredient"
                                                        onChange={onChange}
                                                    />
                                                </div>

                                            </div>
                                            <div>
                                            {index===0 && <label>no</label>}
                                                <div 
                                                    className="add-ingredient-button flex justify-center items-center"
                                                    onClick={handleIngredientAdd}
                                                >
                                            
                                                < FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#5e5e5e",}} />
                                                </div>

                                            </div>


                                        </div>

                                    ) ) }

                                </div>

                                <div className="flex flex-col mb-3">
                                    < label htmlFor='ingredients-preptime'>Prep Time</label>
                                    <div className="flex mt-1">
                                        <div className='form-group'>

                                            <input
                                                type='number'
                                                placeholder='time'
                                                name='time'
                                                className='form-control'
                                                value={recipe.time}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder='time unit'
                                                name='timeUnit'
                                                className='form-control'
                                                value={recipe.timeUnit}
                                                onChange={onChange}
                                            />
                                        </div>

                                    </div>


                                </div>

                                <label htmlFor="recipe-type">Type</label>

                                <div className="mt-1 mb-3">
                                    <p id="recipe-type" >
                                        <label><input type="checkbox" name="type" value="sauce" /><span>sauce</span></label>
                                        <label><input type="checkbox" name="type" value="cake" /><span>cake</span></label>
                                        <label><input type="checkbox" name="type" value="sweets" /><span>sweets</span></label>
                                        <label><input type="checkbox" name="type" value="drinks" /><span>drinks</span></label>

                                    </p>
                                </div>
                                <div className='form-group flex flex-col'>
                                    < label htmlFor='recipe-tag'>Tag</label>
                                    <input
                                        type='text'
                                        placeholder='tag'
                                        name='tag'
                                        className='form-control mt-1'
                                        value={recipe.tag}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className='flex align-middle items-center '>
                                    <div className='form-group'>
                                        <input
                                            id='fav'
                                            type='checkbox'
                                            name='fav'
                                            className='form-control'
                                            checked={recipe.fav}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <label htmlFor='fav' className='mx-4 '> Would you like to favorite it ? </label>
                                </div>


                                <input
                                    type='submit'
                                    className='btn btn-outline-warning btn-block mt-4 submit'
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>

        </div>
    )
}


export default CreateRecipe