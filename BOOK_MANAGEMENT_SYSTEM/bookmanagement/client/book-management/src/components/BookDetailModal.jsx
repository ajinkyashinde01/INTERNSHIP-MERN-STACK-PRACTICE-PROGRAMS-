import { useNavigate } from "react-router-dom";

const BookDetailModal = ({ book, onClose, onDelete }) => {
  const navigate = useNavigate();
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="detail-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="detail-cover" style={{ background: "#1b263b" }}>
          <span>{book.bookName?.charAt(0)}</span>
        </div>
        <div className="detail-info">
          <h2>{book.bookName}</h2>
          <p className="detail-author">by {book.bookAuthor}</p>
          <div className="detail-row">
            <span>Price</span>
            <strong>₹{book.bookPrice}</strong>
          </div>
          {book.publishedDate && (
            <div className="detail-row">
              <span>Published</span>
              <strong>{book.publishedDate}</strong>
            </div>
          )}
          <div className="detail-actions">
            <button className="btn-secondary" onClick={() => navigate("/edit", { state: { book } })}>
              Edit Book
            </button>
            <button className="btn-danger" onClick={() => onDelete(book._id)}>
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;