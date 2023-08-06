import React, { useEffect, useState } from "react"
import NavSide from "../components/NavBarSide"
import { useForm } from "react-hook-form"
import axios from 'axios'




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







export default function Supplier() {


   
    const {
        register,
        handleSubmit,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            ingredient: '',
            size: {
                quantity: '',
                quantityType: '',
            },
            price: '',
            category: '',
        }

    })

    const { errors, isSubmitting,isSubmitSuccessful } = formState

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
    }, [isSubmitSuccessful]);




    const onSubmit = async (data) => {
        // event.preventDefault();
        console.log(data)


        try{
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/supplier/add`, data)

            toast('Supplier Item Added', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }catch(err) {
            console.log(err)

            toast.error('Ingredient was not added', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }




    };


    return (
        <div className=''>
            <div className='main-content flex'>
                <NavSide />
                <div className='m-8 main-body-main'>
                    <p className='text-3xl font-worksans font-medium ml-2'>Supplier page</p>

                    <div className="supplier-container mt-6 text-slate-400 mb-1">

                        <p>Ingredient </p>
                        <p>Price </p>
                        <p>per unit</p>



                    </div>
                    <div className="supplier-item-container">

                        {supplier &&

                            supplier.map((item, i) => (
                                <div key={i} className="supplier-item mt-5 text-sm">


                                    <div>
                                        <p>{item.ingredient}</p>
                                        <p className="text-xs text-slate-400">{item.category}</p>
                                    </div>



                                    <p> $ {item.price}</p>



                                    { item.size.quantity && 
                                    <p>{item.size.quantity} {item.size.quantityType === "gram" || item.size.quantityType === "grams" ? 'g' : ''} </p>}


                                </div>

                            ))

                        }


                    </div>

                    <div className="supplier-form ml-3">
                        <p className="mt-6 text-lg font-worksans">Add to Supplier Database</p>
                        <form className="" noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <div className="supplier-form-top mb-3 mt-3">
                                    <div className="">
                                        <div className='form-group flex flex-col mt-1'>
                                            <label htmlFor="recipeTitle">Ingredient</label>
                                            <input
                                                type='text'
                                                name="ingredient"
                                                className='form-control'
                                                placeholder="ingredeint"
                                                {...register("ingredient", {
                                                    required: {
                                                        value: true,
                                                        message: "Ingredient Name is required"
                                                    },
                                                })}
                                            />
                                        </div>
                                        <p className="text-xs m-1">{errors.ingredient?.message}</p>



                                    </div>

                                    <div>

                                        <div className='form-group'>
                                            <label htmlFor="recipeTitle">Price</label>
                                            <input
                                                type='number'
                                                name="price"
                                                placeholder="$25"
                                                className='form-control'
                                                {...register("price", {
                                                    required: {
                                                        value: true,
                                                        message: "Price is required"
                                                    },
                                                })}
                                            />
                                        </div>
                                        <p className="text-xs m-1">{errors.price?.message}</p>
                                    </div>


                                    <div className='form-group '>
                                        <label htmlFor="recipeTitle">Qty</label>
                                        <input
                                            type='number'
                                            name="quantity"
                                            className='form-control'
                                            placeholder="500"
                                            {...register("size.quantity", {
                                                required: {
                                                    value: true,
                                                    message: "# quantity is required"
                                                },
                                            })}
                                        />
                                        <p className="text-xs m-1">{errors.size?.quantity?.message}</p>


                                    </div>

                                    <div>
                                        <label htmlFor="recipeTitle">Unit</label>
                                        <input
                                            type='text'
                                            name="quantityType"
                                            className='form-control'
                                            placeholder="gram"
                                            {...register("size.quantityType", {
                                                required: {
                                                    value: true,
                                                    message: "Qty Type is required"
                                                },
                                            })}
                                        />
                                        <p className="text-xs m-1">{errors.size?.quantityType?.message}</p>
                                    </div>

                                </div>



                                <div>

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
                                    <p className="text-xs m-1">{errors.category?.message}</p>
                                </div>



                            </div>
                            <input

                                type='submit'
                                disabled={isSubmitting}
                                className='btn btn-outline-warning btn-block mt-4 submit submit-supplier'
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
    )
}