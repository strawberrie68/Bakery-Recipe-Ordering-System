import React from "react"
import NavSide from "../components/NavBarSide"

export default function Supplier() {
    return (
        <div className=''>
            <div className='main-content flex'>
                <NavSide />
                <div className='m-8 main-body-main'>
                    <p>Supplier page</p>
                    <div className="supplier-item mt-6">
                        <div className="supplier-item-box">
                            <p>item</p>
                        </div>
                        <div className="supplier-item-box">
                            <p>price</p>

                        </div>
                        <div className="supplier-item-box">
                            <p>unit</p>
                        </div>
                        

                    </div>


                </div>


            </div>



        </div>
    )
}