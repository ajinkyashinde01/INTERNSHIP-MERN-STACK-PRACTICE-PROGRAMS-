import { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../api/bookApi";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const[booklist,setBooklist]=useState ([]);
  const getBookList = async () => {
    try {
      const res = await getAllBooks();
      setBooklist(res.data.BookList || []);
    } catch {
      toast.error("Failed to load books");
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await getAllBooks();
      setBooks(res.data.BookList || []);
    } catch {
      toast.error("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadBooks = async () => {
      await fetchBooks();
    };

    loadBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    try {
      await deleteBook(id);
      toast.success("Book deleted");
      fetchBooks();
    } catch {
      toast.error("Delete failed");
    }
  };

  const filtered = books.filter((b) =>
    b.bookName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1>Manage your library.</h1>
          <p>Add, update and organize your entire book collection in one place.</p>
        </div>
        <input
          className="search-box"
          placeholder="🔍 Search by name or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <p className="empty-msg">No books found. Add your first one!</p>
      ) : (
        <div className="book-grid">
          {filtered.map((book) => (
            <BookCard key={book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      )}

      {books.length > 0 && (
        <div className="footer-note">
          Showing {filtered.length} / {books.length} books
        </div>
      )}
    </div>
  );
};

export default Home;