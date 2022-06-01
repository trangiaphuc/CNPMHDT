import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Buy from "./pages/Buy";
import Search from "./pages/Search";
import ViewByBrand from "./pages/ViewByBrand";
function App() {
    // const [cart, setCart] = useState(0);
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/product/:model/:product" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/buy" element={<Buy />} />
                <Route exact path="/search/:text" element={<Search />} />
                <Route exact path="/viewbybrand/:idMain/:idBrand" element={<ViewByBrand />} />
            </Routes>
        </Router>
    );
}

export default App;
