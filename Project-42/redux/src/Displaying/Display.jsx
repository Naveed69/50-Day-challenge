import { pipe } from "lodash/fp";
import { produce } from "immer";
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

  //***********Immer**********

  const obj = {
    name: "naveed",
    age: 27,
    company: { cname: "Avira Digital", location: "Hyderabad" },
  };

  let obj2 = produce(obj, (draftState) => {
    draftState.name = "Roma";
    draftState.company.location = "bengalore";
  });

  console.log(obj);
  console.log(obj2);

  let arr = ["book1", "book2", "book3"];
  let filteredArr = arr.map((a) => (a === "book2" ? "book4" : a));
  console.log(filteredArr);

  return (
    <>
      <h1>Redux lab</h1>
      <p>{cres}</p>
    </>
  );
};
