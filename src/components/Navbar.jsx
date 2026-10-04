import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {

  const { cartCount, wishlist } = useCart()

  return (
    <nav>

      <Link to="/" className="logo">
        ShopKart
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/wishlist">
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

      </div>

    </nav>
  )
}

export default Navbar


// Abhi sirf itna samjho
// function Navbar() {

// 👉 Hum Navbar naam ka React component bana rahe hain.

// return (

// 👉 Component batata hai ki browser mein kya display karna hai.

// <nav>

// 👉 Ye navigation section hai.

// <h2>ShopKart</h2>

// 👉 Website ka naam.

// <a href="#">Home</a>
// <a href="#">Products</a>
// <a href="#">Cart</a>

// 👉 Navbar ke links.

// export default Navbar

// 👉 Navbar component ko doosri file mein use/import karne ke liye export kar rahe hain.

// ⚠️ Important

// Abhi Navbar browser mein nahi dikhega, kyunki humne ise App.jsx mein use nahi kiya hai.