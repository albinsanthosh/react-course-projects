import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioHomePage = () => {
    return (
    <div>
        <NavLink to="/portfolio/item_one">Item_One</NavLink>
        <NavLink to="/portfolio/item_two">Item_Two</NavLink>
    </div>
    );
};

export default PortfolioHomePage;