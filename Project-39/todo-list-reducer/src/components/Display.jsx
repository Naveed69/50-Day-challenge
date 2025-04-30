const { useState } = require("react");

export const Display = () => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={(e) => setName(e.target.value)}>
        <input type="text" required />
      </form>
    </>
  );
};
