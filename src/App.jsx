import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Splash from "./pages/Splash.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx"; // Import Register component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} /> {/* Add Register route */}
      </Routes>
    </Router>
  );
}

export default App;