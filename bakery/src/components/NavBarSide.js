import React from 'react'
import Cake from '../asset/cake.png'
import Cookie from '../asset/cookie.png'
import Drinks from '../asset/drinks.png'
import Sauce from '../asset/pot.png'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='navbar-container-side border-r'>

            <Link to="/recipe/sauce">
                <img src={Sauce} alt="sauce"/>
            </Link>
            <Link to="/recipe/cake">
                <img src={Cake} alt="cake"/>
            </Link>
            <Link to="/recipe/sweets">
                <img src={Cookie} alt="cookie"/>
            </Link>
            <Link to="/recipe/drink">
                <img src={Drinks} alt="drinks"/>
            </Link>
            



        </div>
    )
}