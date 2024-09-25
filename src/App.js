import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/candy" element={<Candy />} />
                    <Route path="/soda" element={<Soda />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;