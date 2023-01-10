import React from "react";

export default function List({ jokes }) {
  if (jokes) {
    return (
      <div className="List">
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Your jokes are loading...</div>;
  }
}
