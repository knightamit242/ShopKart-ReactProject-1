import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { useCart } from "../context/CartContext"

function Wishlist() {

  const { wishlist } = useCart()

  return (
    <main>

      <h1>Your Wishlist</h1>

      {wishlist.length === 0 ? (

        <div className="empty-cart">
          <h2>Your wishlist is empty</h2>

          <Link to="/">
            Browse Products
          </Link>
        </div>

      ) : (

        <div className="products-grid">

          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </main>
  )
}

export default Wishlist