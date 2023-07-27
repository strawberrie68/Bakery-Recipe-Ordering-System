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
                            <h1 className='display-4 text-center'>Add recipe</h1>

                            <form noValidate onSubmit={onSubmit}>



                                <label htmlFor="">Recipe</label>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Name of Recipe'
                                        name='recipeTitle'
                                        className='form-control'
                                        value={recipe.recipeTitle}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Recipe Timage'
                                        name='image'
                                        className='form-control'
                                        value={recipe.image}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='number'
                                        placeholder='Number of Servings'
                                        name='servings'
                                        className='form-control'
                                        value={recipe.servings}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex">
                                    <label htmlFor='ingredients'>Ingredients</label>

                                    <div className='form-group'>
                                        <input
                                            id="ingredients-qty"
                                            type='number'
                                            placeholder='qty'
                                            name='quantity'
                                            className='form-control'
                                            value={recipe.ingredients.quantity}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            id="ingredients-qtyType"
                                            type='text'
                                            placeholder='unit'
                                            name='quantityType'
                                            className='form-control'
                                            value={recipe.ingredients.quantityType}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input

                                            type='text'
                                            placeholder='unit'
                                            name='quantityType'
                                            className='form-control'
                                            value={recipe.ingredients.quantityType}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input

                                            type='text'
                                            placeholder='unit'
                                            name='quantityType'
                                            className='form-control'
                                            value={recipe.ingredients.ingredient}
                                            onChange={onChange}
                                        />
                                    </div>

                                </div>
                                <div className="flex">
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

                                <label htmlFor="recipe-type">Type</label>

                                <div>
                                    <p id="recipe-type" >
                                        <label><input type="checkbox" name="type" value="sauce" /><span>sauce</span></label>
                                        <label><input type="checkbox" name="type" value="cake" /><span>cake</span></label>
                                        <label><input type="checkbox" name="type" value="sweets" /><span>sweets</span></label>
                                        <label><input type="checkbox" name="type" value="drinks" /><span>drinks</span></label>

                                    </p>
                                </div>
                                <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='tag'
                                            name='tag'
                                            className='form-control'
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
                                    <label htmlFor='fav' className='mx-4 '> Would you like to study this recipe? </label>
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