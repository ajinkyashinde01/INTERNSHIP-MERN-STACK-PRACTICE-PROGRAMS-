import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { addBook } from "../api/bookApi";
import { toast } from "react-toastify";

const AddBook = () => {
  const navigate = useNavigate();

  const handleAdd = async (formData) => {
    try {
      await addBook(formData);
      toast.success("Book added successfully");
      navigate("/");
    } catch {
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2>Add New Book</h2>
        <p className="form-subtitle">Fill in the details to add a book to your library.</p>
        <BookForm onSubmit={handleAdd} buttonText="Add Book" />
      </div>
    </div>
  );
};

export default AddBook;