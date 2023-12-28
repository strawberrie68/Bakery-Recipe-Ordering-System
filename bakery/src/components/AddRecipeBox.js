import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddRecipeBox() {
  return (
    <div className="create-recipe-box flex flex-col justify-center align-middle items-center">
      <div className="create-recipe-icon flex flex-col justify-center align-middle items-center">
        <FontAwesomeIcon
          className="text-4xl mb-5"
          icon="fa-solid fa-plus"
          style={{ color: "#a2b7c945" }}
        />
        <p className="text-sm">Add Recipe</p>
      </div>
    </div>
  );
}
