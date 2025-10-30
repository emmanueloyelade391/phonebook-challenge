import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/page1">Page 1</Link></li>
      </ul>
    </nav>
  );
}