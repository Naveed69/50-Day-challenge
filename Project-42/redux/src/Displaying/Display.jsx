import { compose, pipe } from "lodash/fp";
export const Display = () => {
  const username = "         Naveed      ";
  const trim = (name) => name.trim();
  const message = (name) => `Hello ${name}, welcome!`;
  const uppercase = (name) => name.toUpperCase();

  const result = message(trim(uppercase(username)));
  const composeResult = compose(message, trim, uppercase);
  const cres = composeResult(username);

  return (
    <>
      <h1>Redux lab</h1>
      <p>{result}</p>
      <p>{cres}</p>
    </>
  );
};
