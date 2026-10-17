import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalOrders: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://stockify-backend-w3xb.onrender.com/api/dashboard");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>Dashboard</h2>
      <div className="stats">
        <div className="card">
          <h3>Total Products</h3>
          <p>{data.totalProducts}</p>
        </div>
        <div className="card">
          <h3>Total Categories</h3>
          <p>{data.totalCategories}</p>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>{data.totalOrders}</p>
        </div>
      </div>
<br /><br /><br /><br /><br /><br /><br /><br />
      {/* Footer Section */}
      <footer className="dashboard-footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/images/logos.png" alt="Stockify Logo" />
            <p>Manage your inventory with ease.</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Inventory</h4>
              <p>Products</p>
              <p>Categories</p>
              <p>Orders</p>
            </div>
            <div>
              <h4>Reports</h4>
              <p>Sales Report</p>
              <p>Stock Report</p>
            </div>
            <div>
              <h4>Contact Us</h4>
              <p>📞 +91 9876543210</p>
              <p>✉️ stockify@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2025 Stockify Inventory Management</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
