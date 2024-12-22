import mongoose from "mongoose";

const link = mongoose.Schema({
  link: { type: String },
});

const Link = mongoose.model("Link", link);

export default Link;
