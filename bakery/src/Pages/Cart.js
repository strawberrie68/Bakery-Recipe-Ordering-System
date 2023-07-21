import React, { useState } from "react"
import NavSide from "../components/NavBarSide"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IngredientToggle from "../components/IngredientToggle"


export default function Cart() {
    const [isShown, setIsShown] = useState(false)
    const cart = useSelector(state => state.cart)

    const groupped = cart.allIngredients.flat()

    const orderList = Object.values(groupped.reduce((acc, { ingredient, quantity, quantityType }) => ((
        acc[ingredient] = acc[ingredient] || { ingredient, quantityType, quantity: 0 }).quantity += quantity, acc), {}))



    //Do i want to combine the smae recipes?
    //need to chnage the quantity methood

    const combinedRecipes = Object.values(cart.recipe.reduce((acc, { recipeTitle, image, servings, ingredients }) => ((
        acc[recipeTitle] = acc[recipeTitle] || { recipeTitle, image, ingredients, servings: 0 }).servings += servings, acc), {}))



    function toggleIngredients(){
        setIsShown(prevState => !prevState)

    }


    return (
        <div>
            <div className='main-content flex flex-row'>
                <NavSide />

                <div className='main-body'>
                    <div className="pr-3">
                        <div className="flex align-middle items-center	mb-12	">
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="s" />
                            <p className='text-3xl font-worksans font-medium ml-2'>Recipe Added</p>
                        </div>

                        <div className="cart-container ">


                            {combinedRecipes.map((item) =>

                                <div className="cart-item flex mb-3 items-center mr-2">

                                    <img className="cart-item-img" src={item.image} />
                                    <div className="cart-text ">
                                        <div className="cart-text-left m-4">
                                            <p className=" mb-2">{item.recipeTitle}</p>
                                            <div
                                                className="flex flex-col"
                                                onClick={toggleIngredients}

                                            >
                                                <div className="flex justify-start items-center	">
                                                    <FontAwesomeIcon className="pr-2" icon="fa-solid fa-caret-up" size="2xs" />
                                                    <p className="text-slate-500 text-sm mb-2">{`${item.ingredients.length} Ingredients`} </p>
                                                </div>


                                                {isShown &&
                                                    // <div className="toggle-ingredient p-2">
                                                    //     {item.ingredients.map((ingredient) => (
                                                    //         <p className="text-slate-300 ">{`${ingredient.quantity} ${ingredient.quantityType} ${ingredient.ingredient}`}</p>
                                                    //     ))}

                                                    // </div>
                                                    <IngredientToggle food={item.ingredients} />
                                                    
                                                    }
                                            </div>

                                        </div>
                                        <div className="text-center">
                                            <p className="mb-2 text-3xl text-slate-400">{item.servings}</p>
                                            <p className="text-slate-500 text-xs">Servings</p>
                                        </div>

                                    </div>





                                </div>



                            )}



                        </div>

                        <hr></hr>
                        <div className="cart-recipe-bottom flex flex-col justify-end items-end	">
                            <p className="text-slate-300 text-2xl">{cart.servings}</p>
                            <p className="text-slate-300  text-xs">total items</p>

                        </div>
                    </div>
                    <div className="cart-order-container pl-4">
                        <div className="order-container">
                            <p className="text-3xl mb-9">Order</p>
                            <div className="order-combined">
                                {groupped &&

                                    orderList.map((ingredient) => (
                                        <p className="p-2 text-sm">{`${ingredient.quantity} ${ingredient.quantityType} ${ingredient.ingredient}`}</p>
                                    ))

                                }

                            </div>


                        </div>


                        <hr></hr>
                        <div className="order-bottom flex mt-5 p-2 items-end	">
                            <p className="p-2">cost</p>
                            <p className="p-2 text-3xl">$1235</p>
                        </div>

                    </div>






                </div>



            </div>









        </div>
    )
}