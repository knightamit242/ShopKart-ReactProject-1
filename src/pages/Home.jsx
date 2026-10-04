import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>

      <section className="hero">
        <h1>Shop the Best Products</h1>
        <p>Find quality products at the best prices.</p>
      </section>

      <input
        type="text"
        placeholder="Search products..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <h2>Loading products...</h2>
      ) : (

        <div className="products-grid">

          {filteredProducts.map((product) => (
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

export default Home