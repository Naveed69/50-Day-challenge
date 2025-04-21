import "./Card.css";
const Card = ({ page }) => {
  return (
    <div className="card">
      <span>{page.step}</span>
      <span>{page.about}</span>
    </div>
  );
};
export default Card;
