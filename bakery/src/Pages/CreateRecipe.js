import React, { useState } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
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
        },
        prepTime: {
            time: '',
            timeUnit: ''
        },
        type: '',
        tag: '',
        fav: false,

    });

    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        setRecipe(prevRecipe => {
            return {
                ...prevRecipe,
                [name]: type === "checkbox" ? checked : value

            }
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(recipe)

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/recipe/add`, recipe)
            .then((res) => {
                setRecipe({
                    recipeTitle: '',
                    image: '',
                    servings: '',
                    ingredients: {
                        quantity: '',
                        quantityType: '',
                        ingredient: ''
                    },
                    prepTime: {
                        time: '',
                        timeUnit: ''
                    },
                    type: '',
                    tag: '',
                    fav: false

                });


                toast('Recipe Created', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });


            })
            .catch((err) => {
                console.log('Error in Create Recipe!');
                toast.error('Recipe was not created', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };


    return (
        <div>
            <div className='CreateRecipe-page'>
                <div className='CreateRecipe-container'>
                    <div className='row'>

                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center text-2xl mt-6 mb-6'>Add Recipe</h1>

                            <form noValidate onSubmit={onSubmit}>



                                <label htmlFor="recipeTitle">Recipe</label>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Name of Recipe'
                                        name='recipeTitle'
                                        className='form-control mt-1'
                                        value={recipe.recipeTitle}
                                        onChange={onChange}
                                    />
                                </div>

                                <label htmlFor="recipe-image">Image</label>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Image'
                                        name='image'
                                        className='form-control mt-1'
                                        value={recipe.image}
                                        onChange={onChange}
                                    />
                                </div>

                                <label htmlFor="recipe-servings">Servings</label>
                                <div className='form-group'>
                                    <input
                                        type='number'
                                        placeholder='Number of Servings'
                                        name='servings'
                                        className='form-control mt-1'
                                        value={recipe.servings}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1" htmlFor='ingredients'>Ingredients</label>
                                    <div className="flex flex-row ">
                                        <div>
                                            < label htmlFor='ingredients-qty'>Qty</label>
                                            <div className='form-group'>
                                                <input
                                                    id="ingredients-qty"
                                                    type='number'
                                                    placeholder='qty'
                                                    name='quantity'
                                                    className='form-control mr-1'
                                                    value={recipe.ingredients.quantity}
                                                    onChange={onChange}
                                                />
                                            </div>

                                        </div>
                                        <div >
                                            < label htmlFor='ingredients-qtyUnit'>Unit</label>
                                            <div className='form-group'>
                                                <input
                                                    id="ingredients-qtyType"
                                                    type='text'
                                                    placeholder='grams'
                                                    name='quantityType'
                                                    className='form-control mr-1'
                                                    value={recipe.ingredients.quantityType}
                                                    onChange={onChange}
                                                />
                                            </div>

                                        </div>
                                        <div>
                                        <div className='form-group'>
                                                < label htmlFor='ingredients-qtyUnit'>Ingredient</label>
                                                <input

                                                    type='text'
                                                    placeholder='Ingredient'
                                                    name='ingredient'
                                                    className='form-control mr-1'
                                                    value={recipe.ingredients.ingredient}
                                                    onChange={onChange}
                                                />
                                            </div>

                                        </div>

                                        


                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    < label htmlFor='ingredients-preptime'>PrepTime</label>
                                    <div className="flex mt-1">
                                    <div className='form-group'>
                                        
                                        <input
                                            type='number'
                                            placeholder='time'
                                            name='time'
                                            className='form-control'
                                            value={recipe.prepTime.time}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='time unit'
                                            name='timeUnit'
                                            className='form-control'
                                            value={recipe.prepTime.timeUnit}
                                            onChange={onChange}
                                        />
                                    </div>

                                    </div>
                                  

                                </div>

                                <label htmlFor="recipe-type">Type</label>

                                <div className="mt-1"> 
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
                                <div className='flex align-middle items-center my-4'>
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
                                    className='btn btn-outline-warning btn-block mt-4'
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