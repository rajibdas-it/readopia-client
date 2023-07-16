import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/books">Books</Link>
      </li>

      <li>
        <Link to="/wishlist">My Wishlist</Link>
      </li>
    </>
  );
}
