import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
            <h1>Enjoy your soda!</h1>
            <img src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206" alt="Soda" />
            <br />
            <Link to="/">Go back to the Vending Machine</Link>
        </div>
    );
}

export default Soda;