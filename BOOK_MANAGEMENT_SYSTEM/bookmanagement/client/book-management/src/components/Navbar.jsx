import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">📖 Book<span>Shelf</span></Link>

      <div className="nav-links">
        <Link to="/" className={pathname === "/" ? "active" : ""}>Library</Link>
        <Link to="/add" className={pathname === "/add" ? "active" : ""}>Add Book</Link>
      </div>

      <div className="profile">
        <div className="avatar">A</div>
        <span>Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;