import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Products.css'; // ✅ Import the CSS file

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://stockify-backend-w3xb.onrender.com/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleEdit = (id) => {
  navigate(`/edit-product/${id}`);
};

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this product ? ")) {
    try {
      await axios.delete(`https://stockify-backend-w3xb.onrender.com/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
      alert("Product Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting product", error);
    }
  }
};

  return (
    <div className="products-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>₹{product.price}</td>
                  <td>{product.description}</td>
                  <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleEdit(product._id)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(product._id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



export default Products;
