import React, { useState } from "react";

const Dragdrop = () => {
  const [leftArray, setLeftArray] = useState([
    "virat",
    "dhoni",
    "Raina",
    "jadu",
  ]);

  const [rightArray, setRight] = useState(["gambhir", "sehwag", "rohit"]);
  const leftDragFunc = (e) => {
    console.log("ele",e.target.innerText)
    setRight([e.target.innerText])
};
  return (
    <div className="p-[120px]">
      <div className="grid grid-cols-2">
        <div className="text-center">
          <h4 className="mb-4 font-bold">Team 1</h4>
          {leftArray.map((ele) => (
            <div
              className="rounded-sm h-[120px] flex items-center m-auto cursor-pointer  max-w-[120px]  shadow-md mb-5"
              onDrag={(e) => leftDragFunc(e)}
            >
              <p className=" ml-[36px]"> {ele}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="text-center">
            <h4 className="mb-4 font-bold">Team 2</h4>

            {rightArray.map((ele) => (
              <div className="rounded-sm h-[120px] flex items-center m-auto  max-w-[120px]  shadow-md mb-5">
                <p className=" ml-[36px]"> {ele}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dragdrop;
