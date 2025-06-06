import { pipe } from "lodash/fp";
export const Display = () => {
  const username = "         Naveed      ";
  const trim = (name) => name.trim();
  const message = (msg) => (name) => `Hello ${name}, ${msg}!`;
  const uppercase = (name) => name.toUpperCase();

  const composeResult = pipe(trim, uppercase, message("Good morning"));
  const cres = composeResult(username);

  //   ----- currying-------
  //   const add = (a) => (b) => (c) => a + b + c;
  //   let res = add(3);
  //   let resb = res(2);
  //   console.log(resb(5));

  return (
    <>
      <h1>Redux lab</h1>
      <p>{cres}</p>
    </>
  );
};
