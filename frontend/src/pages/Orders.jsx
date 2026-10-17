import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([{ productId: "", quantity: 1 }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await axios.get("http://localhost:5000/api/products");
        setProducts(productRes.data);

        const orderRes = await axios.get("http://localhost:5000/api/orders");
        setOrders(orderRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleAddProduct = () => {
    setSelectedProducts([...selectedProducts, { productId: "", quantity: 1 }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...selectedProducts];
    updated[index][field] = value;
    setSelectedProducts(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/orders", { products: selectedProducts });
      setSelectedProducts([{ productId: "", quantity: 1 }]);
      const orderRes = await axios.get("http://localhost:5000/api/orders");
      setOrders(orderRes.data);
      alert("Order placed!");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order ?")) {
      try {
        await axios.delete(`http://localhost:5000/api/orders/${id}`);
        setOrders(orders.filter(order => order.id !== id));
        alert("Order Deleted Successfully");
      } catch (error) {
        console.error("Error deleting order", error);
        alert("Failed to delete order");
      }
    }
  };

  const handleReceivedToggle = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/received/${id}`);
      // Re-fetch orders OR Update Locally
      const updated = orders.map(order => 
        order._id === id ? { ...order, received: !order.received }: order);
        setOrders(updated);
        alert("Order status updated successfully");
      } catch(error) {
        console.error("Error updating receiving status", error);
        alert("Failed to update order status");
      }
    };


  

  return (
    <div className="orders-container">
      <h2>Place New Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        {selectedProducts.map((item, index) => (
          <div key={index} className="order-row">
            <select
              value={item.productId}
              onChange={(e) => handleChange(index, "productId", e.target.value)}
              required
            >
              <option value="">Select Product</option>
              {products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
              required
            />
          </div>
        ))}
        <div className="order-actions">
          <button type="button" onClick={handleAddProduct} className="add-btn">
            + Add Another
          </button>
          <button type="submit" className="submit-btn">
            Submit Order
          </button>
        </div>
      </form>

      <h2>All Orders</h2>
      <div className="table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Products</th>
              <th>Total</th>
              <th>Date</th>
              <th>Actions</th>
              <th>Received Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  {order.products.map((p, i) => (
                    <div key={i}>
                      {p.productId?.name} × {p.quantity}
                    </div>
                  ))}
                </td>
                <td>₹{order.total ? `${order.total}`:"₹0"}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                 <td>
                  <button onClick = {() => handleDelete(order._id)} className="delete-btn">Delete</button>
                </td>
                <td>
                  <input
                   type="checkbox" 
                   className="order-checkbox"
                   checked={order.received}
                   onChange={() => handleReceivedToggle(order._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
