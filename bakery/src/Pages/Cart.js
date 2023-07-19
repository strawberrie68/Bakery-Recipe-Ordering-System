import React, { useState } from "react"
import NavSide from "../components/NavBarSide"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Cart() {
    const [isShown, setIsShown] = useState(false)


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
                            <div className="cart-item flex mb-3 items-center mr-2">
                                <img className="cart-item-img" src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
                                <div className="m-4">
                                    <p className="text-xl mb-2">Strawberry Cake</p>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="pr-2" icon="fa-solid fa-caret-up" size="2xs" />
                                        <p className="text-slate-500">10 Ingredients</p>

                                        {isShown &&
                                            <div>
                                                <p>ingredeint 1</p>
                                                <p>ingredeint 1</p>
                                                <p>ingredeint 1</p>
                                            </div>}
                                    </div>

                                </div>
                                <div className="">
                                    <p className="mb-2 text-lg">225</p>
                                    <p className="text-slate-500">Serving</p>
                                </div>



                            </div>

                        </div>

                        <hr></hr>
                        <div className="flex flex-col justify-end items-end	">
                            <p>325</p>
                            <p>total items</p>

                        </div>
                    </div>
                    <div className="cart-order-container pl-4">
                        <div className="order-container">
                            <p className="text-3xl mb-4 ">Order</p>
                            <div className="">
                                <p className="pt-1">15 bags of flour</p>
                                <p className="pt-1">15 bags of flour</p>
                                <p className="pt-1">15 bags of flour</p>
                                <p className="pt-1">15 bags of flour</p>

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