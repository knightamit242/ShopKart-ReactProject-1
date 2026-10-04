import { useCart } from "../context/CartContext"

function ProductCard({ product }) {

  const {
    addToCart,
    toggleWishlist,
    wishlist
  } = useCart()

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  )

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>₹{Math.round(product.price * 83)}</p>

      <div className="product-buttons">

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>

    </div>
  )
}

export default ProductCard

//1//
// Bas itna samjho:
// function ProductCard() {

// 👉 Ek reusable ProductCard component.

// <h3>Product Name</h3>
// <p>₹999</p>
// <button>Add to Cart</button>

// 👉 Ek product ke basic details.

// Sabse important concept:

// Ek ProductCard component ko hum baad mein multiple products ke liye reuse karenge.

// Example:

// Product 1 → ProductCard
// Product 2 → ProductCard
// Product 3 → ProductCard
// Product 4 → ProductCard

// Abhi ProductCard ko App mein connect nahi karna.