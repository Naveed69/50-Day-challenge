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
            {/* <form onSubmit={handlerSubmit} className="form_modal">
              <h2>Fill Details</h2>
              <p className="title">Username:</p>
              <input
                type="text"
                className="fill"
                id="username"
                required
                value={name}
                onChange={handlerName}
              />
              <p className="title">Email Address:</p>
              <input
                type="email"
                className="fill"
                id="email"
                required
                value={email}
                onChange={handlerEmail}
              />
              <p className="title">Phone Number:</p>
              <input
                type="tel"
                value={no}
                onChange={phoneHandler}
                className="fill"
                id="phone"
                required
              />
              <p className="title">Date of Birth:</p>
              <input
                type="date"
                className="fill"
                id="dob"
                required
                onChange={handlerDate}
                value={dob}
              />
              <br />
              <button type="submit" className="btn submit-button">
                Submit
              </button>
            </form> */}
          </div>
        </div>
      )}
    </>
  );
};
export default Display;
