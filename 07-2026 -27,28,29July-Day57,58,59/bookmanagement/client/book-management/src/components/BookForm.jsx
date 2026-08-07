import { useState } from "react";

const BookForm = ({ initialData = {}, onSubmit, buttonText }) => {
  const [form, setForm] = useState({
    bookName: initialData.bookName || "",
    bookAuthor: initialData.bookAuthor || "",
    bookPrice: initialData.bookPrice || "",
    publishedDate: initialData.publishedDate || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book Name</label>
        <input
          type="text"
          name="bookName"
          placeholder="e.g. Fire and Blood"
          value={form.bookName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Author</label>
        <input
          type="text"
          name="bookAuthor"
          placeholder="e.g. George R. R. Martin"
          value={form.bookAuthor}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">
        <div className="field">
          <label>Price (₹)</label>
          <input
            type="number"
            name="bookPrice"
            placeholder="499"
            value={form.bookPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={form.publishedDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default BookForm;