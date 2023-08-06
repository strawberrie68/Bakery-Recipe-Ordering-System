import React, { useEffect, useState } from "react"
import NavSide from "../components/NavBarSide"
import { useForm, useFieldArray } from "react-hook-form"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const onSubmit = async (data) => {
        // event.preventDefault();
        console.log(data)


        // try{
        //     const saved = await axios.post(`${process.env.REACT_APP_SERVER_URL}/supplier/add`, data)

        //     toast('Supplier Item Added', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });

        // }catch(err) {
        //     console.log(err)

        //     toast.error('Ingredient was not added', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }




    };
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
                                <div key={i}className="supplier-item mt-5 text-sm">


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

                    <div className="supplier-form ml-3">
                        <p className="mt-6 text-lg font-worksans">Add to Supplier Database</p>
                        <form className="" noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className="supplier-form-top">

                                <div className="">
                                    <div className='form-group mb-3 flex flex-col'>
                                        <label htmlFor="recipeTitle">Ingredient</label>
                                        <input
                                            type='text'
                                            name="ingredient"
                                            className='form-control mt-1'
                                            placeholder="ingredeint"
                                            {...register("ingredient", {
                                                required: {
                                                    value: true,
                                                    message: "Ingredient Name is required"
                                                },
                                            })}
                                        />
                                    </div>
                                    <p>{errors.ingredient?.message}</p>

                                    <div className='form-group mb-3 flex flex-col'>
                                        <label htmlFor="recipeTitle">Category</label>
                                        <input
                                            type='text'
                                            name="category"
                                            className='form-control mt-1'
                                            placeholder="category"
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
                                        <label htmlFor="recipeTitle">Price</label>
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

                                <div className="">
                                    <div className='form-group mb-3'>
                                        <label htmlFor="recipeTitle">Qty</label>
                                        <input
                                            type='text'
                                            name="quantity"
                                            className='form-control mt-1'
                                            placeholder="500"
                                            {...register("size.quantity", {
                                                required: {
                                                    value: true,
                                                    message: "# quantity is required"
                                                },
                                            })}
                                        />
                                        <label htmlFor="recipeTitle">Unit</label>
                                        <input
                                            type='text'
                                            name="quantityType"
                                            className='form-control mt-1'
                                            placeholder="gram"
                                            {...register("size.quantityType", {
                                                required: {
                                                    value: true,
                                                    message: "Quantity Type is required"
                                                },
                                            })}
                                        />

                                    </div>
                                    <p>{errors.price?.message}</p>

                                </div>
                            </div>
                            <input
                                type='submit'
                                disabled={isSubmitting}
                                className='btn btn-outline-warning btn-block mt-4 submit'
                            />



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
    )
}