import React from "react";

export default function IngredientToggle(props) {
  return (
    <div onClick={props.toggle}>
      <div className="toggle-ingredient p-2">
        {props.food.map((ingredient) => (
          <p className="text-slate-300 ">{`${ingredient.quantity} ${ingredient.quantityType} ${ingredient.ingredient}`}</p>
        ))}
      </div>
    </div>
  );
}
