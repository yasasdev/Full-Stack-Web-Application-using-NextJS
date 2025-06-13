import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Check if model exists before creating it
const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;