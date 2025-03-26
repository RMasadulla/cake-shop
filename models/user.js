import mongoose, { Schema } from "mongoose";

// User Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: String,
      default: "01983000000",
      validate: {
        validator: (value) => /^\d{11}$/.test(value),
        message: "Invalid phone number",
      },
    },
    image: {
      type: String,
      default: "",
    },
    userPosition: {
      type: String,
      required: true,
      enum: ["general", "editor", "admin"],
      default: "general",
    },
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
