import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardProduct from "./components/CardProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/product" element={<Product/>} />
            </Routes>
        </Router>
    );
}

export default App;
