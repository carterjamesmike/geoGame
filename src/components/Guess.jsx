import React, { useState } from "react";

const CountryGuessInput = () => {
  const [guess, setGuess] = useState("");

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the guess, e.g., send it to a server or validate it
    console.log("Country guess:", guess);
    setGuess("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="flex items-center border-b border-teal-500 py-2">
          <h1 className="font-bold text-red-400 flex items-center">
            Guess the Country
          </h1>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter a country name"
            value={guess}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Guess
          </button>
        </div>
      </form>
    </>
  );
};

export default CountryGuessInput;
