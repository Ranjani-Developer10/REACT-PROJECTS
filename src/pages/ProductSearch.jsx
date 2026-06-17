import { useState } from "react";

function ProductSearch() {
  const [search, setSearch] = useState("");

  const products = [{ id: 1, name: "Laptop", price: 50000 },{ id: 2, name: "Mobile", price: 25000 },{ id: 3, name: "Headphone", price: 2000 }, { id: 4, name: "Keyboard", price: 1500 },{ id: 5, name: "Mouse", price: 800 },];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Product Search System</h1>

      <input type="text" placeholder="Search Product" value={search} onChange={(e) => setSearch(e.target.value)}/>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}
            style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "200px",}}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      ) : (
        <h3>No Products Found</h3>
      )}
    </>
  );
}

export default ProductSearch;