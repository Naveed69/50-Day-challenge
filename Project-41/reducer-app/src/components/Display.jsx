import { useReducer } from "react";

export const Display = () => {
  const [state,dispatch]=useReducer(reduce,[])
  return (
    <>
      <h1>Display</h1>
    </>
  );
};
