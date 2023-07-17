import React from 'react'
import Ramen from '../asset/ramen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar (){
    return (
        <div className='navbar-container pb-4 border-b'>
            <img src={Ramen} />
            <FontAwesomeIcon className="text-sm" icon="fa-solid fa-cart-shopping" style={{color: "#525252",}} />

        </div>
    )
}