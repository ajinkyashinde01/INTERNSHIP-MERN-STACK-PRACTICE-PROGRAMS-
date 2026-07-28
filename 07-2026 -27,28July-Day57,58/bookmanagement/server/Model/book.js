const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    publishedDate: {
        type: String, 
        required: false
    }
});

const Book = mongoose.model("BookDetails", bookSchema);

module.exports = Book;