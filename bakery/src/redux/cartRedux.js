import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "cart",
    initialState:{
        recipe:[],
        multiplier: 0,
        servings: 0,
        quantity: 0
    },
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1;
            state.recipe.push(action.payload.scaledRecipe);
            state.multiplier = action.payload.multiplier
            state.servings += (action.payload.recipe.servings * action.payload.multiplier)
        }
    }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer


