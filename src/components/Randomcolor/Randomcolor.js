import React, { useEffect, useState } from "react";

const Randomcolor = () => {
  const [color, setColor] = useState("#F0000");
  const getRandomDigit = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const colorRand = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
    return `#${colorRand}`;
  };
  useEffect(() => {
    setColor(getRandomDigit());
  }, []);
  return (
    <div className=" h-full p-7 flex justify-center items-center">
      <div
        className={` h-[144px] w-[155px]`}
        style={{ background: color }}
      ></div><br/>
      {color}

    </div>
  );
};

export default Randomcolor;
