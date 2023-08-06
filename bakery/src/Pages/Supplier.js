import React, { useEffect, useState } from "react"
import NavSide from "../components/NavBarSide"
import { useForm, useFieldArray } from "react-hook-form"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Supplier() {


    const form = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            ingredient: '',
            size: [{
                quantity: '',
                quantityType: '',
            }],
            price: '',
            category: '',
        }

    })

    const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    const [supplier, setSupplier] = useState()

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/supplier`)
            .then((res) => {
                setSupplier(res.data);

            })
            .catch((err) => {
                console.log('Error from Supplier' + err);
            });
    }, [supplier?.length]);

    console.log(supplier)


    return (
        <div className=''>
            <div className='main-content flex'>
                <NavSide />
                <div className='m-8 main-body-main'>
                    <p className='text-3xl font-worksans font-medium ml-2'>Supplier page</p>

                    <div className="supplier-container mt-6 text-slate-400">

                        <p>Ingredient </p>
                        <p>Price </p>
                        <p>per unit</p>



                    </div>
                    <div className="supplier-item-container">

                        {supplier &&

                            supplier.map((item, i) => (
                                <div className="supplier-item mt-5 text-sm">


                                    <div>
                                        <p>{item.ingredient}</p>
                                        <p className="text-xs text-slate-400">{item.category}</p>
                                    </div>



                                    <p> $ {item.price}</p>


                                    <p>{item.size.quantity} {item.size.quantityType === "gram" || item.size.quantityType === "grams" ? 'g' : ''} </p>


                                </div>

                            ))

                        }


                    </div>

                    <div>
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        name="ingredient"
                                        className='form-control mt-1'
                                        {...register("ingredient", {
                                            required: {
                                                value: true,
                                                message: "Ingredient Name is required"
                                            },
                                        })}
                                    />
                                </div>
                                <p>{errors.ingredient?.message}</p>

                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        name="category"
                                        className='form-control mt-1'
                                        {...register("category", {
                                            required: {
                                                value: true,
                                                message: "Category is required"
                                            },
                                        })}
                                    />
                                </div>
                                <p>{errors.category?.message}</p>

                            </div>

                            <div>

                                <div className='form-group mb-3'>
                                    <input
                                        type='text'
                                        name="price"
                                        className='form-control mt-1'
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: "Price is required"
                                            },
                                        })}
                                    />
                                </div>
                                <p>{errors.price?.message}</p>
                            </div>

                            <div>
                            <div className='form-group mb-3'>
                                <input
                                    type='text'
                                    name="quantity"
                                    className='form-control mt-1'
                                    {...register("size.quantity", {
                                        required: {
                                            value: true,
                                            message: "# quantity is required"
                                        },
                                    })}
                                />
                                
                            </div>
                            <p>{errors.price?.message}</p>

                            </div>


                        </form>
                    </div>




                </div>


            </div>


            <div className="corner-add flex flex-col justify-center" >
                <input type="button" value="Add to Supplier" className='bg-grey p-2 text-slate-400 text-xs' />
                <div className='circle-button flex justify-center items-center	'>
                    <FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "#ffffff", }} />
                </div>

            </div>








        </div>
    )
}