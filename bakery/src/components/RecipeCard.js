import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tag from "./Tag"
import { Link } from "react-router-dom"


const RecipeCard = (props) => {
   


    return (
        <div className="recipe-card m-1 ">

            <Link to={`/recipe/detail/${props.food._id}`}>
                <div className='recipe-card-img-container'>
                    <img className=" " src={props.food.image} alt="recipe-img" />
                    <div className='recipecard-info flex flex-col'>
                        <div className='recipecard-info-top flex flex-row text-white m-1'>
                            <p>See Recipe</p>
                            <div className='recipecard-see-more '>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{ color: "#ffffff", }} size="2xs" />
                            </div>

                        </div>
                        <div className='recipecard-info-bottom flex flex-row m-1 justify-betwen'>
                            <Tag id="tags" />

                            <div className='heart-background'>
                                <FontAwesomeIcon className="heart text-xl" icon="fa-regular fa-heart" />
                            </div>

                        </div>



                    </div>


                </div>
                <div className='p-2'>
                    <p className='text-lg font-worksans font-medium'>{props.food.recipeTitle}</p>

                </div>
            </Link>

        </div>
    )
}
export default RecipeCard