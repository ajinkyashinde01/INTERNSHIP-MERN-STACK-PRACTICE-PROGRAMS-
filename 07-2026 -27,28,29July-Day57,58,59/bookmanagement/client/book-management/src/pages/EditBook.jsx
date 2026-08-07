import { useLocation, useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { updateBook } from "../api/bookApi";
import { toast } from "react-toastify";

const EditBook = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state?.book;

  if (!book) {
    return (
      <div className="page">
        <p className="empty-msg">No book selected. Go back to Library.</p>
      </div>
    );
  }

  const handleUpdate = async (formData) => {
    try {
      await updateBook({ _id: book._id, ...formData });
      toast.success("Book updated successfully");
      navigate("/");
    } catch {
      toast.error("Failed to update book");
    }
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2>Update Book</h2>
        <p className="form-subtitle">Update the details of this book.</p>
        <BookForm initialData={book} onSubmit={handleUpdate} buttonText="Update Book" />
      </div>
    </div>
  );
};

export default EditBook;