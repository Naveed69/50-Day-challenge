import { useState } from "react";
import "./Display.css";
const Display = () => {
  const [productData, setProductData] = useState([
    { id: 1, name: "Wireless Headphones", rating: 3 },
    { id: 2, name: "Coffee Maker", rating: 4 },
    { id: 3, name: "Fitness Tracker", rating: 2 },
  ]);

  const handleChange = (updtedStar, productId) => {
    const newproducts = productData.map((product) =>
      product.id === productId ? { ...product, rating: updtedStar } : product
    );
    setProductData(newproducts);
  };

  return (
    <>
      <div className="container">
        <h1>Rating Table</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>
                    {[1, 2, 3, 4, 5].map((noStar) =>
                      noStar <= p.rating ? (
                        <span
                          key={noStar}
                          className="filled"
                          style={{ fontSize: "26px" }}
                          onClick={() => handleChange(noStar, p.id)}
                        >
                          &#9733;
                        </span>
                      ) : (
                        <span
                          key={noStar}
                          className="notFilled"
                          style={{ fontSize: "26px" }}
                          onClick={() => handleChange(noStar, p.id)}
                        >
                          &#9734;
                        </span>
                      )
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Display;
