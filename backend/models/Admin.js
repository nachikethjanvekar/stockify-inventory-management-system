const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true
    },

    email: {
      type:String,
      required: true,
      unique: true
    },
    
    phone: {
      type:String,
      required: true,
      unique: true
    },

    businessName: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    profileImage: {
      type: String,
      default: "/images/default-profile.png" 
    }
}, {
  timestamps: true
});

module.exports = mongoose.model("Admin", adminSchema);
