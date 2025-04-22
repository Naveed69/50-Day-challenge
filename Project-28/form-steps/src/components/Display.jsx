import { useState } from "react";
import Card from "./Card/Card";
import "./Display.css";
const Display = () => {
  const cardStyle = {
    border: "1px solid blue",
  };
  const pages = [
    { step: 1, about: "Fill user Details" },
    { step: 2, about: "Fill College Details" },
    { step: 3, about: "Fill Experience Details" },
    { step: 4, about: "Validate Details" },
  ];
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    if (pageNo >= 5) return;
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
        <Card key={page.step} page={page} pageNo={pageNo} />
      ))}
      {pageNo >= 5 ? (
        <p style={{ color: "green", fontWeight: "bolder" }}>Form Submitted</p>
      ) : null}
      <div className="btn">
        <button type="button" onClick={handlePrev} disabled={pageNo === 1}>
          Previous
        </button>
        <button type="button" onClick={handleNext} disabled={pageNo === 5}>
          {pageNo >= 4 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
export default Display;
