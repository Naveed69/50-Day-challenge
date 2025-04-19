import { useState } from "react";

const Display = () => {
  const stockData = [
    { name: "Product A", price: 50, stock: 20 },
    { name: "Product B", price: 30, stock: 50 },
    { name: "Product C", price: 50, stock: 10 },
    { name: "Product D", price: 70, stock: 30 },
    { name: "Product E", price: 30, stock: 15 },
  ];
  const [filteredData, setFilteredData] = useState(stockData);

  const handleSortByPrice = () => {
    const sortedByPrice = [...filteredData].sort((a, b) => b.price - a.price);
    setFilteredData(sortedByPrice);
  };
  const handleSortByStock = () => {
    const sortedByStock = [...filteredData].sort((a, b) => b.stock - a.stock);
    setFilteredData(sortedByStock);
  };
  return (
    <>
      <h1>Stock Table</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((a) => {
            return (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td>{a.stock}</td>
              </tr>
            );
          })}
        </tbody>
        <button type="button" onClick={handleSortByPrice}>
          Sort by Price
        </button>
        <button type="button" onClick={handleSortByStock}>
          Sort by Stock
        </button>
      </table>
    </>
  );
};
export default Display;
