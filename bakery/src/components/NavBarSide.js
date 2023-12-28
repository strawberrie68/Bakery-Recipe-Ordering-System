import React from "react";
import Cake from "../asset/cake.png";
import Cookie from "../asset/cookie.png";
import Drinks from "../asset/drinks.png";
import Sauce from "../asset/pot.png";
import { Link } from "react-router-dom";
import Supplier from "../asset/supplier.png";

export default function NavBar() {
  return (
    <div className="navbar-container-side border-r">
      <div>
        <Link to="/recipe/sauce">
          <img src={Sauce} alt="sauce" />
        </Link>
        <Link to="/recipe/cake">
          <img src={Cake} alt="cake" />
        </Link>
        <Link to="/recipe/sweets">
          <img src={Cookie} alt="cookie" />
        </Link>
        <Link to="/recipe/drink">
          <img src={Drinks} alt="drinks" />
        </Link>
      </div>

      <div className="navbar-side-bottom">
        <Link to="/supplier">
          <img src={Supplier} />
        </Link>
      </div>
    </div>
  );
}
