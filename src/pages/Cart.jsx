import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useCart } from "../context/CartContext"

function Cart() {

  const { cart, cartTotal } = useCart()

  const totalInRupees = Math.round(cartTotal * 83)

  return (
    <main>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/">Continue Shopping</Link>
        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-products">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <p>
              Total:
              <strong> ₹{totalInRupees}</strong>
            </p>

            <Link
              to="/checkout"
              className="checkout-btn"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      )}

    </main>
  )
}

export default Cart