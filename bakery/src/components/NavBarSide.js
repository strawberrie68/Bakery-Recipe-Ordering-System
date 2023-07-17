import React from 'react'
import Cake from '../asset/cake.png'
import Cookie from '../asset/cookie.png'
import Drinks from '../asset/drinks.png'
import Fruit from '../asset/OrangeSlice.png'
import Sauce from '../asset/pot.png'


export default function NavBar (){
    return (
        <div className='navbar-container-side border-r'>
         
            <img src={Sauce} />
            <img src={Cake} />
            <img src={Cookie} />
            <img src={Drinks} />
            <img src={Fruit} />

        </div>
    )
}