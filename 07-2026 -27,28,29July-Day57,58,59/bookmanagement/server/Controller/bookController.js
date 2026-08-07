const Book = require("../Model/book");

const handleAddBookController = async (req, res) => {
  try {
    const data = req.body;
    let bookDetails = await Book.create(data);
    
    return res.status(200).json({ Message: "Details Added" });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleGetAllBookController = async (req, res) => {
  try {
    const bookList = await Book.find({});
 
    return res.status(200).json({ Message: " Book Details Get successfully",BookList:bookList});
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleDeleteBookController = async (req, res) => {
  try {
    const data = req.body
    const deletedDetails = await Book.deleteOne({_id: data._id})
 
    return res.status(200).json({ Message: " Book Details Deleted successfully"});
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleUpdateBookController = async (req, res) => {
  try {
    const data = req.body
    const updatedDetails = await Book.updateOne({_id: data._id}, {$set: data})
 
    return res.status(200).json({ Message: " Book Details Updated successfully"});
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};



module.exports = { handleAddBookController , handleGetAllBookController, handleDeleteBookController, handleUpdateBookController};