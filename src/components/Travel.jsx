import { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import { images } from "../data/dats";
import Navbar from "./Navbar";

const Travel = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: `${mousePosition.y - 12}px`,
    left: `${mousePosition.x - 12}px`,
    height: "26px",
    width: "26px",
    backgroundColor: "gray",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgb(251, 249, 249)",
    pointerEvents: "none",
  };

  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showHandler = () => {
    setShow(!show);
  };

  const changeImage = () => {
    setShowText(!showText);
  };

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const handleGridClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-[60%] h-[600px] bg-cover border border-black relative shadow-green cursor-none">
      <div style={cursorStyle}></div>

      <div className="flex flex-col items-center justify-between h-full transition-all duration-150">
        {show ? (
          <Navbar showHandler={showHandler} />
        ) : (
          <div className="">
            <FaEquals size={25} className="mt-3" onClick={showHandler} />
          </div>
        )}

        <div className="absolute mt-10 w-full ml-10">
          <div className="relative flex flex-col scaleEffect ">
            <h1 className="text-4xl py-2 font-title font-bold ">Europe</h1>
            <div className=" bg-cover bg-hero-pattern bg-clip-text">
              <p className="text-6xl font-black text-transparent ">
                Travel Exploration{" "}
              </p>{" "}
              <h1 className="text-xl ml-2">
                With <span className="text-3xl font-extrabold">Raj Mahajan</span>
              </h1>
            </div>
          </div>

          {!showText ? (
            <div className="w-[95%] h-[350px]  -my-5 flex items-center overflow-clip transition-all duration-900 ease-in">
              <p className="text-4xl font-para ">
                Welcome to a selection of the best Landscape and Wildlife photography from
                my travels I offer Prints of my digital photography mounted to standard sizes,
                as well as custom sizes if you d like something a little different, Enjoy!
              </p>
            </div>
          ) : (
            <div className="w-[100%] h-[470px] flex flex-row flex-wrap transition-all duration-900 slideInUp justify-around -z-50 cursor-move">
              {images.map((item) => (
                <div
                  key={item.id}
                  className={`my-6 ${
                    selectedImage === item.id ? "w-[20%] h-[60%]" : "w-[15%] h-[50%]"
                  } flex flex-row`}
                  onClick={() => (selectedImage ? handleGridClick() : handleImageClick(item.id))}
                >
                  <img
                    src={item.img}
                    className={`object-cover ${
                      selectedImage === item.id ? "scale-105" : "hover:scale-105"
                    } transition-all duration-200 flex`}
                    alt={`Image ${item.id}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {!showText ? (
          <div className="relative flex items-end justify-end ">
            <div className="flex flex-col animate-bounce">
              <span className="rotate-90 mb-3 "> Show </span>
              <AiOutlineArrowDown
                size={25}
                onClick={changeImage}
                className=" bg-blue-100 rounded-full m-2"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Travel;