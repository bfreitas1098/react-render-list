import React from "react";

const App = () => {
  const Number = (props) => {
    return <li>{props.value}</li>;
  };

  const NumberList = (props) => {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((item) => (
          <Number key={`item ${item}`} value={item} />
        ))}
      </ul>
    );
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;
