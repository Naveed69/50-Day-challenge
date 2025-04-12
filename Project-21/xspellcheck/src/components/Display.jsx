import { useEffect, useState } from "react";

const Display = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [sentance, setSentance] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  useEffect(() => {
    let words = sentance.split(" ");
    let correctword = words.find((w) => customDictionary[w.toLowerCase()]);
    setCorrectWord(customDictionary[correctword]);
  }, [sentance]);
  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text.."
        onChange={(e) => setSentance(e.target.value)}
      />
      {correctWord && <p>Did you mean: {correctWord}</p>}
    </>
  );
};
export default Display;
