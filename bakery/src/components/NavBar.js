import React from 'react'
import Ramen from '../asset/ramen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function NavBar() {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className='navbar-container pb-4 border-b'>
            <img src={Ramen} alt="ramen" />
            <Link to="/cart"> 
                <div className='text-sm pr-2'>

                    <Badge className='text-sm' badgeContent={quantity} color="primary">
                        <FontAwesomeIcon className="text-sm pr-3" icon="fa-solid fa-cart-shopping" style={{ color: "#525252", }} />
                    </Badge>
                </div>
            </Link>



        </div>
    )
}