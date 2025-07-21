import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    phone: {
      type: String,
      validate: {
        validator: (value) => /^\d{11}$/.test(value),
        message: "Invalid phone number",
      },
      default: "01983000000",
    },
    image: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      enum: ["customer", "assistant", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
