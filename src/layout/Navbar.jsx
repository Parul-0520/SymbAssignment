import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SymbA</h2>
      <div>
        <Link to="/">Add Order</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/manage">Manage</Link>
      </div>
    </nav>
  )
}