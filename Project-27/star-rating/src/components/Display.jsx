import { useState } from "react";
import "./Display.css";
const Display = () => {
  const [productData, setProductData] = useState([
    { id: 1, name: "Wireless Headphones", rating: 3 },
    { id: 2, name: "Coffee Maker", rating: 4 },
    { id: 3, name: "Fitness Tracker", rating: 2 },
  ]);

  const handleRating = (newRating, productId) => {
    const newData = productData.map((product) =>
      product.id === productId ? { ...product, rating: newRating } : product
    );
    setProductData(newData);
  };

  return (
    <div className="container">
      <h1>Rating App</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td key={product.id}>
                {[1, 2, 3, 4, 5].map((rating) => {
                  if (product.rating >= rating) {
                    return (
                      <span
                        key={rating}
                        className="filled"
                        onClick={() => handleRating(rating, product.id)}
                      >
                        &#9733;
                      </span>
                    );
                  } else {
                    return (
                      <span
                        className="notFilled"
                        onClick={() => handleRating(rating, product.id)}
                      >
                        &#9734;
                      </span>
                    );
                  }
                })}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <spam style={{ fontSize: "14px", color: "rgb(80, 77, 77)" }}>
                  ({product.rating} out of 5)
                </spam>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
