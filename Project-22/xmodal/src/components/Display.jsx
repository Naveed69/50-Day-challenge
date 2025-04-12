import { useState } from "react";
import "./Display.css";
const Display = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Form
      </button>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="modal show-modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form></form>
          </div>
        </div>
      )}
    </>
  );
};
export default Display;
