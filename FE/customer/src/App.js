import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardProduct from "./components/CardProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Cart from "./pages/Cart";
import { useState } from "react";
import Buy from "./pages/Buy";
function App() {
    // const [cart, setCart] = useState(0);
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/product/:id" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/buy" element={<Buy />} />
            </Routes>
        </Router>
    );
}

export default App;
