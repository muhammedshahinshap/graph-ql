const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: { type: String },
    genre: { type: String },
    author: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
const authorSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  book: model("book", bookSchema),
  author: model("author", authorSchema),
};
