import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function App() {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    let apiUrl =
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10";

    const displayJokes = () => {
      axios
        .get(apiUrl)
        .then((response) => {
          const allJokes = response.data.jokes;
          setJokes(allJokes);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    displayJokes();
  }, []);

  return <List jokes={jokes} />;
}
