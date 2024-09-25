import React from "react";
import { Link } from "react-router-dom";

function Candy() {
    return (
        <div>
            <h1>Enjoy your candy!</h1>
            <img src="https://target.scene7.com/is/image/Target/GUEST_fd0a4629-7807-44be-b782-6328cba9175f?wid=488&hei=488&fmt=pjpeg" alt="Candy" />
            <br />
            <Link to="/">Go back to the vending machine</Link>
        </div>
    );
}

export default Candy;