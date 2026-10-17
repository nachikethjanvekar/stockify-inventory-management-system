import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct"; 
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import EditProfile from "./pages/EditProfile";
import Register from "./pages/Register";

function AppContent() {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const hideNavbarPaths = ["/", "/login", "/register"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
         <Route path="/" element={<Products />} />
         <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
