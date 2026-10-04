import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Checkout() {

  const { cart, cartTotal } = useCart()

  const total = Math.round(cartTotal * 83)

  if (cart.length === 0) {
    return (
      <main>
        <h1>Your cart is empty</h1>

        <Link to="/">
          Continue Shopping
        </Link>
      </main>
    )
  }

  function handleCheckout(e) {
    e.preventDefault()
    alert("Order placed successfully!")
  }

  return (
    <main>

      <h1>Checkout</h1>

      <div className="checkout-container">

        <form onSubmit={handleCheckout}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="text"
            placeholder="Address"
            required
          />

          <input
            type="text"
            placeholder="City"
            required
          />

          <input
            type="text"
            placeholder="PIN Code"
            required
          />

          <button type="submit">
            Place Order - ₹{total}
          </button>

        </form>

      </div>

    </main>
  )
}

export default Checkout