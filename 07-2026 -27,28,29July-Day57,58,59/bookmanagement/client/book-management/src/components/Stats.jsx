const Stats = ({ books }) => {
  if (books.length === 0) return null;

  const totalBooks = books.length;
  const totalValue = books.reduce((sum, b) => sum + Number(b.bookPrice || 0), 0);
  const avgPrice = Math.round(totalValue / totalBooks);
  const uniqueAuthors = new Set(books.map((b) => b.bookAuthor)).size;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total Books</span>
        <span className="stat-value">{totalBooks}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Total Value</span>
        <span className="stat-value">₹{totalValue}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Avg Price</span>
        <span className="stat-value">₹{avgPrice}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Authors</span>
        <span className="stat-value">{uniqueAuthors}</span>
      </div>
    </div>
  );
};

export default Stats;