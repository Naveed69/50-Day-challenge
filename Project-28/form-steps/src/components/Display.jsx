import Card from "./Card/Card";
import "./Display.css";
const Display = () => {
  return (
    <div className="container">
      <h1>Form Steps</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <div className="btn">
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
};
export default Display;
