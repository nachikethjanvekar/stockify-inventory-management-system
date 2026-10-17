import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/categories", { name });
      setName("");
      fetchCategories();
    } catch (err) {
      alert("Error adding category");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <h2 className="categories-title">Manage Categories</h2>

      <form onSubmit={handleSubmit} className="category-form">
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="category-input"
        />
        <button type="submit" className="add-btn">Add Category</button>
      </form>

      <h3 className="list-title">All Categories</h3>
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat._id} className="category-item">{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
