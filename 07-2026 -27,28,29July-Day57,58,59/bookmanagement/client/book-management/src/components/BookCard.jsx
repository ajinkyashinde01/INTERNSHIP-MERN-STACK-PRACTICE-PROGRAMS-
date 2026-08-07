import { useNavigate } from "react-router-dom";

const palette = [
  ["#1e3a5f", "#0d1b2a"],
  ["#8b1e1e", "#3d0c0c"],
  ["#1b263b", "#0b1520"],
  ["#2f4858", "#132531"],
  ["#4a1942", "#20081c"],
  ["#264d3b", "#0f231a"],
  ["#5c4033", "#291b14"],
];

const getGradient = (name = "A") => {
  const index = name.charCodeAt(0) % palette.length;
  return palette[index];
};

const BookCard = ({ book, onDelete }) => {
  const navigate = useNavigate();
  const [c1, c2] = getGradient(book.bookName);

  return (
    <div className="book-card">
      <div
        className="book-cover"
        style={{ background: `linear-gradient(160deg, ${c1}, ${c2})` }}
      >
        <span className="cover-initial">{book.bookName?.charAt(0)}</span>

        <div className="cover-actions">
          <button
            title="Edit"
            onClick={() => navigate("/edit", { state: { book } })}
          >
            ✎
          </button>
          <button title="Delete" onClick={() => onDelete(book._id)}>
            🗑
          </button>
        </div>
      </div>

      <p className="book-title">{book.bookName}</p>
      <p className="book-author">{book.bookAuthor}</p>
      <p className="book-price">₹{book.bookPrice}</p>
    </div>
  );
};

export default BookCard;