import { useState } from "react";
import Card from "./Card/Card";
import "./Display.css";
const Display = () => {
  const cardStyle = {
    border: "1px solid blue",
  };
  const pages = [
    { step: "Step1", about: "Fill user Details" },
    { step: "Step2", about: "Fill College Details" },
    { step: "Step3", about: "Fill Experience Details" },
    { step: "Step4", about: "Validate Details" },
  ];
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    if (pageNo >= 4) return;
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    if (pageNo <= 1) return;
    setPageNo(pageNo - 1);
  };
  return (
    <div className="container">
      <h1>Form Steps</h1>
      {pages.map((page) => (
        <Card page={page} style={cardStyle} />
      ))}
      {pageNo >= 5 ? <p>Completed</p> : null}
      <div className="btn">
        <button type="button" onClick={handlePrev} disabled={pageNo === 1}>
          Previous
        </button>
        <button type="button" onClick={handleNext} disabled={pageNo === 4}>
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};
export default Display;
