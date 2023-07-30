import React, { useEffect, useState } from "react";

function Acoordian() {
  const items = [
    {
      id: 1,
      name: "Task",
      description:
        "What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc",
      image: "/one.jpg",
    },
    {
      id: 2,

      name: "Sub Task",
      description:
        "A paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
      image: "/two.jpg",
    },
    {
      id: 3,

      name: "Module",
      description:
        "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of ",
      image: "/three.jpg",
    },
  ];
  const [show, setShow] = useState({ state: false, id: null });
  const [image, setImage] = useState(items[0]);
  useEffect(()=>{
setShow({state:true, id:1})
  },[])
  return (
    <div className="bg-[white] p-4 mt-[120px]">
      <div className="grid grid-cols-2 text-center gap-[80px]">
        <div className="relative   ">
          {items.map((ele) => (
            <>
              <div className="flex items-center justify-end gap-3 relative">
                <div className=" mb-3 ">
                  <p className="text-2x border w-[450px] rounded-3xl	 p-[14px] ">
                    {ele.name}
                  </p>
                </div>
                <div>
                  <p
                    className=" font-semibold right-[33px] top-[20px]  mb-4 absolute"
                    onClick={() => {
                      setShow({ state: true, id: ele.id });
                      setImage(items.find((element, id)=>element.id == ele.id))
                    }}
                  >
                    {show.state == true && show.id == ele.id ? (
                      ""
                    ) : (
                      <img
                        className="w-5 h-5  cursor-pointer  "
                        src="/play.png"
                      />
                    )}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                {show.state == true && show.id == ele.id ? (
                  <p className="text-[15px]  text-left  mr-[55px]  mb-3 leading-[30px] bg-[#1e293b] text-white p-3 rounded-lg ml-6  max-w-[50%] ">
                    {ele.description}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </>
          ))}
        </div>
        <div className="">
          <div className="max-w-[377px] max-h-[599px]">
            <img src={image.image} className="rounded-2xl shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Acoordian;
