import React, { useEffect, useState } from "react";

const Randomcolor = () => {
  const [color, setColor] = useState("");
  const [threeColor, setThreeColor] = useState([]);
  const [answer, setAnswer] = useState("");
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
    const actualcolor = getRandomDigit();
    setColor(actualcolor);
    setThreeColor(
      [actualcolor, getRandomDigit(), getRandomDigit()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, []);
  const checkColorHandle = (ele) => {
    if (color === ele) {
      setAnswer("right !")
    } else {
      setAnswer("wrong !")
    }
  };
  return (
    <div className=" h-full p-7 flex justify-center items-center flex-col">
      <div
        className={` h-[144px] w-[155px]`}
        style={{ background: color }}
      ></div>
      <br />
      <div className="">
        {threeColor.map((ele, key) => (
          <button
            onClick={() => checkColorHandle(ele)}
            className="bg-[black] text-white p-2 mx-8"
            key={key}
          >
            {ele}
          </button>
        ))}
      </div>
  <p className={`italic text-[42px]`}>{answer}</p>

    </div>
  );
};

export default Randomcolor;
