import React, { useState, useEffect, Fragment } from "react";
import "../styling/visualiser.sass";

const Visualiser = () => {
  const [array, setArray] = useState([]);

  const genRanInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const arrayValues = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      array.push(genRanInt(5, 730));
    }
    setArray((array) => [...array, newArray]);
  };

  useEffect(() => {
    arrayValues();
  }, []);

  console.log(array);

  return (
    <Fragment>
      <div className="array-container">
        {array.map((value, index) => {
          return (
            <div
              className="array-bar"
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Visualiser;
