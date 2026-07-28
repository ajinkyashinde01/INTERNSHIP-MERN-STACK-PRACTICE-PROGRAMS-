const Book = require("../Model/book");

const handleAddBookController = async (req, res) => {
  try {
    const data = req.body;

    const book = await Book.insertOne(data);

    return res.status(201).json({
      message: "Details Added..."
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { handleAddBookController };