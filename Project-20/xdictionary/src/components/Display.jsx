import { useState } from "react";

const Display = () => {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [words, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");
  const handleSearch = () => {
    let found = false;
    for (let i = 0; i < dictionary.length; i++) {
      if (
        dictionary[i].word.toLocaleLowerCase() === words.toLocaleLowerCase()
      ) {
        setWordMeaning(dictionary[i].meaning);
        found = true;
      }
    }
    if (!found) setWordMeaning("Word not found in the dictionary.");
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input type="text" onChange={(e) => setWord(e.target.value)} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <h3>Definition:</h3>
      <p>{wordMeaning}</p>
    </>
  );
};
export default Display;
