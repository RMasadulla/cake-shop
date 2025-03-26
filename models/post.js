import mongoose from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  postImage: {
    type: Array,
    required: false,
  },
  userId: {
    type: ObjectId,
    required: true,
    ref: "users",
  },
});

export const postModel =
  mongoose.models.posts ?? mongoose.model("posts", postSchema);
