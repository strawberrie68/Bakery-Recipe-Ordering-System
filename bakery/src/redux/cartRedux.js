import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    recipe: [],
    allIngredients: [],
    multiplier: 0,
    servings: 0,
    quantity: 0,
    recipeID: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.recipe.push(action.payload.scaledRecipe);
      state.allIngredients.push(action.payload.scaledRecipe.ingredients);
      state.multiplier = action.payload.multiplier;
      state.servings +=
        action.payload.recipe.servings * action.payload.multiplier;
      state.recipeID.push(action.payload.recipe._id);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
