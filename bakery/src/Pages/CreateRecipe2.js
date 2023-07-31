import React, { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DevTool } from "@hookform/devtools"


const types = [
    { values: "sauce", label: "sauce" },
    { values: "cake", label: "cake" },
    { values: "sweets", label: "sweets" },
    { values: "drinks", label: "drinks" },
]



const CreateRecipe = props => {



    const form = useForm();
    const { 
        register, 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        defaultValues: {
            recipeTitle: '',
            image: '',
            servings: '',
            ingredients: [{
                quantity: '',
                quantityType: '',
                ingredient: ''
            }] ,
            prepTime: {
                time: '',
                timeUnit: ''
            },
            type: '',
            tag: '',
            fav: false,
        }

    })

    const { fields,append, remove } = useFieldArray({
        name: "ingredients",
        control
    })



    const [ingredientArray, setIngredientArray] = useState([
        {
            ingredients: {
                quantity: '',
                quantityType: '',
                ingredient: ''
            }
        }
    ])



    console.log(ingredientArray)




    const handleIngredientAdd = () => {
        setIngredientArray([...ingredientArray, {
            ingredients: {
                quantity: '',
                quantityType: '',
                ingredient: ''

            }
        }])
    }

    const handleIngredientRemove = (index) => {
        const Array = [...ingredientArray];
        Array.splice(index, 1)
        setIngredientArray(Array)

    }





    const onSubmit = (data) => {
        // event.preventDefault();
        console.log(data)


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

                            <form noValidate onSubmit={handleSubmit(onSubmit)}>



                                <label htmlFor="recipeTitle">Name</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        name="recipeTitle"
                                        className='form-control mt-1'
                                        {...register("recipeTitle", {
                                            required: "Recipe name is required"
                                        })}
                                    />
                                </div>

                                <label htmlFor="recipe-image">Image</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        name="image"
                                        placeholder='unsplash.com/durian-mochi'
                                        className='form-control mt-1'
                                        {...register("image")}
                                    />
                                </div>

                                <label htmlFor="recipe-servings">Servings</label>
                                <div className='form-group mb-3'>
                                    <input
                                        type='number'
                                        placeholder='Number of Servings'
                                        name='servings'
                                        className='form-control mt-1'
                                        {...register("servings")}
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className="mb-1" htmlFor='ingredients'>Ingredients</label>
                                 

                                    {
                                        fields.map((field, index) => {
                                            return(

                                            <div className="ingredients-create-container mb-1" key={field.id}>

                                              

                                                <div>
                                                {index === 0 && < label htmlFor='ingredients-qty'>Qty</label>}
                                                    
                                                    <div className='form-group'>
                                                        <input
                                                            id="ingredients-qty"
                                                            type='number'
                                                            placeholder='1000'
                                                
                                                            className='form-control mr-1'
                                                            {...register(`ingredients.${index}.quantity`)}
                                                           
                                                        />
                                                    </div>

                                                </div>
                                                <div >
                                                    {index === 0 && < label htmlFor='ingredients-qtyUnit'>Unit</label>}
                                                    <div className='form-group'>
                                                        <input
                                                            id="ingredients-qtyType"
                                                            type='text'
                                                            placeholder='g'
                                                 
                                                            className='form-control mr-1'
                                                            {...register(`ingredients.${index}.quantityType`)}
                                                         
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className='form-group'>
                                                        {index === 0 && <label className="" htmlFor='ingredients-qtyUnit'>Ingredient</label>}
                                                        <input

                                                            type='text'
                                                            placeholder='Durian'
                                                            className='form-control mr-1 '
                                                            {...register(`ingredients.${index}.ingredient`)}
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    {index === 0 && <label>no</label>}
                                                    <div
                                                        className="add-ingredient-button flex justify-center items-center"
                                                        onClick={() => append({ingredients: {
                                                            quantity: '',
                                                            quantityType: '',
                                                            ingredient: ''
                                                        }})}
                                                    >

                                                        < FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "#5e5e5e", }} />
                                                    </div>

                                                </div>


                                            </div>
                                            )

                                        })
                                    }





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
                                                {...register("prepTime.time")}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder='time unit'
                                                name='timeUnit'
                                                className='form-control'
                                                {...register("prepTime.timeUnit")}
                                            />
                                        </div>

                                    </div>


                                </div>

                                <label htmlFor="recipe-type">Type</label>

                                <div controlId="types">

                                </div>

                                <div className="mt-1 mb-3">
                                    <p id="recipe-type" >
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="sauce"
                                                {...register("type", {
                                                    required: "Please select at-least one skill"
                                                })} />
                                            <span>sauce</span>
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="cake"
                                                {...register("type")}
                                            />
                                            <span>cake</span></label>
                                        <label>
                                            <input type="checkbox" value="sweets"
                                                {...register("type")}
                                            />
                                            <span>sweets</span>
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="drinks"
                                                {...register("type",)}
                                            />
                                            <span>drinks</span>
                                        </label>

                                    </p>
                                </div>
                                <div className='form-group flex flex-col'>
                                    < label htmlFor='recipe-tag'>Tag</label>
                                    <input
                                        type='text'
                                        placeholder='tag'
                                        name='tag'
                                        className='form-control mt-1'
                                        {...register("tag")}
                                    />
                                </div>
                                <div className='flex align-middle items-center '>
                                    <div className='form-group'>
                                        <input
                                            name='fav'
                                            type='checkbox'
                                            className='form-control'
                                            {...register("fav")}
                                        />
                                    </div>
                                    <label htmlFor='fav' className='mx-4 '> Would you like to favorite it ? </label>
                                </div>


                                <input
                                    type='submit'
                                    className='btn btn-outline-warning btn-block mt-4 submit'
                                />


                            </form>
                            <DevTool control={control} />
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