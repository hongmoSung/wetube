import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "text is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Comment", commentSchema);
export default model;
