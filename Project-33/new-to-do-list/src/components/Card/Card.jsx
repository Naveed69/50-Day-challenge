import "./Card.css";
const Card = ({ task, id }) => {
  return (
    <div className="card">
      <div>{task}</div>
      <span>
        <span className="edit">&#9998;</span>
        <span className="delete">&#x274C;</span>
      </span>
    </div>
  );
};
export default Card;
