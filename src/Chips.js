import React from "react";
import { Link } from "react-router-dom";

function Chips() {
    return (
        <div>
            <h1>Enjoy your chips!</h1>
            <img src="https://m.media-amazon.com/images/I/8140nyqlDmL._SL1500_.jpg" alt="Chips" />
            <br />
            <Link to="/">Go back to the vending machine</Link>
        </div>
    );
}

export default Chips;