import React from "react";

function Buttons(props) {
  const { reset, example } = props;
  return (
    <>
      <button onClick={reset}>Reset</button>
      <button onClick={example}>Example</button>
    </>
  );
}

export default Buttons;
