import mongoose from "mongoose";

// Role Schema
const roleSchema = new Schema({
  role: {
    type: String,
    required: true,
    enum: ["user", "editor", "admin"],
    default: "user",
  },
});

export const roleModel =
  mongoose.models.roles ?? mongoose.model("roles", roleSchema);
