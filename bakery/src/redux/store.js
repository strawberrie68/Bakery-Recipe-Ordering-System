import { configureStore } from "@reduxjs/toolkit";
import multipliedRecipeReducer from "./multipliedRecipeRedux";
import cartReducer from "./cartRedux"

export default configureStore({
    reducer: {
        cart: cartReducer,
        // multipliedRecipe: multipliedRecipeReducer
    }
})