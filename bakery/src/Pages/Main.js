import React from 'react'
import { useLocation } from "react-router-dom";
import Recipes from "../components/Recipes"
import NavSide from "../components/NavBarSide"


export default function Main() {
  const location = useLocation();
  const type = location.pathname.split("/")[2]
 

  return (
    <div className=''>
      <div className='main-content flex'>
        <NavSide />
        <div className='m-8 main-body-main'>
          <p className='text-4xl font-worksans font-medium	ml-2'>Recipes</p>
          <div>
            <Recipes type={type} />
           
          </div>

        </div>


      </div>



    </div>
  )
}