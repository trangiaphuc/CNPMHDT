import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/home" element={<Home />}/>
            </Routes>
        </Router>
    );
}

export default App;
