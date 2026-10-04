import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopkart-cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("shopkart-wishlist")
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  useEffect(() => {
    localStorage.setItem("shopkart-cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("shopkart-wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  function addToCart(product) {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  function toggleWishlist(product) {

    const exists = wishlist.some(
      (item) => item.id === product.id
    )

    if (exists) {
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      )
    } else {
      setWishlist([...wishlist, product])
    }
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartTotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        toggleWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}