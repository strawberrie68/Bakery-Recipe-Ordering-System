import React, { useState } from "react"
import NavSide from "../components/NavBarSide"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { containerClasses } from "@mui/system"


export default function Cart() {
    const [isShown, setIsShown] = useState(false)
    const cart = useSelector(state => state.cart)

    const groupped = cart.allIngredients.flat()

    const orderList = Object.values(groupped.reduce((acc, { ingredient, quantity, quantityType }) => ((
        acc[ingredient] = acc[ingredient] || { ingredient, quantityType, quantity: 0 }).quantity += quantity, acc), {}))
    // console.log(orderList)


    //Do i want to combine the smae recipes?
    //need to chnage the quantity methood

    const combinedRecipes = Object.values(cart.recipe.reduce((acc, { recipeTitle, image, servings, ingredients }) => ((
        acc[recipeTitle] = acc[recipeTitle] || { recipeTitle, image, ingredients, servings: 0 }).servings += servings, acc), {}))






    return (
        <div>
            <div className='main-content flex flex-row'>
                <NavSide />

                <div className='main-body'>
                    <div className="pr-3">
                        <div className="flex align-middle items-center	mb-12	">
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="xl" />
                            <p className='text-4xl font-worksans font-medium ml-2'>Recipe Added</p>
                        </div>

                        <div className="cart-container ">


                            {combinedRecipes.map((item) =>

                                <div className="cart-item flex mb-3 items-center mr-2">

                                    <img className="cart-item-img" src={item.image} />
                                    <div className="m-4">
                                        <p className="text-xl mb-2">{item.recipeTitle}</p>
                                        <div
                                            className="flex items-center flex-col"
                                            onClick={() => setIsShown(!isShown)}

                                        >
                                            <div className="flex justify-start">
                                            <FontAwesomeIcon className="pr-2" icon="fa-solid fa-caret-up" size="2xs" />
                                            <p className="text-slate-500">{`${item.ingredients.length} Ingredients`} </p>
                                            </div>
                                            

                                            {isShown &&
                                                <div className="bg-white p-2">
                                                    {item.ingredients.map((ingredient) => (
                                                        <p className="text-slate-400">{`${ingredient.quantity} ${ingredient.quantityType} ${ingredient.ingredient}`}</p>
                                                    ))}

                                                </div>}
                                        </div>

                                    </div>
                                    <div className="">
                                        <p className="mb-2 text-lg">{item.servings}</p>
                                        <p className="text-slate-500">Servings</p>
                                    </div>



                                </div>



                            )}



                        </div>

                        <hr></hr>
                        <div className="flex flex-col justify-end items-end	">
                            <p>{cart.servings}</p>
                            <p>total items</p>

                        </div>
                    </div>
                    <div className="cart-order-container pl-4">
                        <div className="order-container">
                            <p className="text-3xl mb-9">Order</p>
                            <div className="">
                                {groupped &&

                                    orderList.map((ingredient) => (
                                        <p className="p-2">{`${ingredient.quantity} ${ingredient.quantityType} ${ingredient.ingredient}`}</p>
                                    ))

                                }

                            </div>


                        </div>


                        <hr></hr>
                        <div className="flex mt-5 p-2 items-end	">
                            <p className="p-2">cost</p>
                            <p className="p-2 text-3xl">$1235</p>
                        </div>

                    </div>






                </div>



            </div>









        </div>
    )
}