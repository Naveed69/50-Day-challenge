import "./Card.css";
const Card = ({ page, pageNo }) => {
  return (
    // <div className={`card {${pageNo}===${page.step}? "slected" : ""}`}>
    <div
      className={`card ${pageNo === page.step ? "selected" : ""} 
      ${page.step < pageNo ? "completed" : ""}
    `}
    >
      <span>Step {page.step}</span>
      <span>{page.about}</span>
    </div>
  );
};
export default Card;
