import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios.get(`https://stockify-backend-w3xb.onrender.com/api/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error("Error fetching product:", err);
        alert("Error fetching products details");
        navigate("/products");
      });
  }, [id, token, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`https://stockify-backend-w3xb.onrender.com/api/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      alert("Product updated successfully!");
      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
        <input name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" required />
        <input name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <input name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required />
        <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditProduct;
