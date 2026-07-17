import React, { useState, useEffect } from "react";

const UseEffect = () => {
  
  const booktitle = "Rich Dad Poor Dad";
  const pr = 100;

  const [price, setPrice] = useState(100);
  const [qn, setQn] = useState(1);
  const [val, setVal] = useState(0);

  useEffect(() => {
    setPrice(pr * qn);
  }, [qn]);

  return (
    <div>
      <h1>Book Title: {booktitle}</h1>
      <h2>Price: {price}</h2>
      <h2>Quantity: {qn}</h2>

      <button onClick={() => setQn(qn + 1)}>
        +
      </button>

      <button onClick={() => setVal(val + 1)}>
        -
      </button>
    </div>
  );
};

export default UseEffect;