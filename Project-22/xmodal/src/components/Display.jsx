import { useState } from "react";
import "./Display.css";
const Display = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (new Date() > new Date(birthDate)) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    setusername("");
    setEmail("");
    setPhone("");
    setBirthDate("");
  };

  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Form
      </button>
      {isOpen && (
        <div
          className="modal"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>Fill Details</h1>
            <form onSubmit={(e) => handle(e)}>
              <p className="tite">Username:</p>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
              <p className="tite">Email Address:</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="tite">Phone Number:</p>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="tite">Birth of Date:</p>
              <input
                type="date"
                name="date"
                id="dob"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Display;
