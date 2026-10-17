import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './EditProfile.css';

function EditProfile() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("https://stockify-backend-w3xb.onrender.com/api/admin/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setName(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setBusinessName(res.data.businessName);
                setPassword(res.data.password);
            } catch (error) {
                console.error("Error fetching profile", error);
                alert("Failed to load profile.");
            }
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.put("https://stockify-backend-w3xb.onrender.com/api/admin/profile", 
                { name, phone },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            localStorage.setItem("name", name);
            alert("Profile Updated Successfully");
            navigate("/dashboard");
        } catch (err) {
            console.error("Error updating profile", err);
            alert("Failed to update profile");
        }
    };

    return (
        <div className="edit-profile-container">
            <form onSubmit={handleSubmit} className="edit-profile-form">
            <h2 className="edit-profile-title"> Edit Profile </h2>


                <label>Name:</label>
                <input
                    type="text"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email:</label>
                <input type="email" value={email || ""} readOnly />

                <label>Phone No.:</label>
                <input
                    type="tel"
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <label>Business Name:</label>
                <input type="text" value={businessName || ""} readOnly />

                <label>Password:</label>
                <input type="password" value={password || ""} readOnly />

                <div className="form-actions">
                    <button type="submit" className="save-btn"> Save Changes </button>
                    <button type="button" className="cancel-btn" onClick={() => navigate("/dashboard")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;