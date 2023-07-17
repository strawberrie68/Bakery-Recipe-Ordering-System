import React from 'react'
import Ramen from '../asset/ramen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '@mui/material/Badge';


export default function NavBar() {
    return (
        <div className='navbar-container pb-4 border-b'>
            <img src={Ramen} alt="ramen"/>

        <div className='text-sm pr-2'>

            <Badge className='text-sm' badgeContent={4} color="primary">
                <FontAwesomeIcon className="text-sm pr-3" icon="fa-solid fa-cart-shopping" style={{ color: "#525252", }} />
            </Badge>
        </div>

        </div>
    )
}