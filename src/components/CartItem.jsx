import { useCart } from "../context/CartContext"

function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem
  } = useCart()

  return (
    <div className="cart-item">

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="cart-item-info">

        <h3>{item.title}</h3>

        <p>
          ₹{Math.round(item.price * 83)}
        </p>

        <div className="quantity">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default CartItem