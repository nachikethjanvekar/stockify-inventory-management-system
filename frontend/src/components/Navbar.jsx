import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  
  const userName = localStorage.getItem("name") || "Admin";
  


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("profileImage");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/dashboard">
          <img src="/images/navlogo.png" alt="Stockify Logo" /> {/* Adjust path if needed */}
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === "/products" ? "active" : ""}>
          <Link to="/products">Products</Link>
        </li>
        <li className={location.pathname === "/categories" ? "active" : ""}>
          <Link to="/categories">Categories</Link>
        </li>
        <li className={location.pathname === "/orders" ? "active" : ""}>
          <Link to="/orders">Orders</Link>
        </li>
        <li className={location.pathname === "/add-product" ? "active" : ""}>
          <Link to="/add-product">Add Product</Link>
        </li>

        <li className = "profile-container">
          <div className="profile-avatar"
           onClick={() => setDropdownOpen(!dropdownOpen)}>
           <img src="/images/default-avatar.png" alt="Profile"/>
          </div>

          {dropdownOpen && (
            <div className="profile-dropdown">
              <p className="profile-name">{userName}</p>
              <Link to="/EditProfile" className="dropdown-link">Edit Profile</Link>
              <button onClick={handleLogout} className="dropdown-link Logout">
                Logout
              </button>
            </div>
          )}
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
