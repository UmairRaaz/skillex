"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div id="home" className="w-full mx-auto md:mb-24 md:mt-14 md:overflow-hidden">
      <div className="w-[80%] mx-auto flex md:flex-row flex-col relative">
        <div className="md:w-[35%] w-full p-4">
          <motion.div
          initial={{y: 200, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1, delay:0.3}}
          className="flex pl-8 pt-32  flex-col text-7xl text-left">
            <h1>Watch.</h1>
            <h1>Learn.</h1>
            <h1>Grow.</h1>
          </motion.div>
          <motion.div
          initial={{y: 200, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1, delay:0.3}}
          className="shadow-2xl border-l border-t border-gray-200 md:bottom-36
          top-96 left-10 md:left-8 md:w-96 z-20 flex h-16 absolute ">
            <input
              type="text"
              className="w-[75%]  pl-2 py-1 font-semibold"
              placeholder="Find Your Passion"
            />
            <button className="bg-[#8abe75] hover:bg-[#fdb17b] transition ease-in-out text-[#1a1b28] font-bold uppercase w-[25%] h-full">
              Go
            </button>
          </motion.div>
        </div>

        {/* Right side (80%) */}
        <motion.div
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:0.3}}
        className="md:w-[65%] w-full p-4">
          <div className="mt-24 md:ml-8 flex md:flex-row flex-col gap-4">
            <div
              className={`w-[300px] h-[400px] overflow-hidden relative ${
                hoveredIndex === 0 ? "md:hover:w-[300px]" : ""
              } ${
                hoveredIndex === 1 || hoveredIndex === 2 ? "md:w-[80px]" : ""
              } transition-all duration-300`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={"/heroOne.jpg"}
                alt="man pic"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl object-cover cursor-pointer"
              />
              <div
                className={`text-white absolute bottom-5 left-0 flex justify-between w-full px-4 cursor-pointer ${
                  hoveredIndex === 1 || hoveredIndex === 2 ? "md:hidden block" : "block"
                }`}
              >
                <span className="text-xl">
                  Writing <br /> Course
                </span>
                <span className="text-xl">
                  100 <br /> Topics
                </span>
              </div>
            </div>
            <div
              className={`md:w-[150px] md:h-[400px] w-[300px] h-[400px] overflow-hidden relative ${
                hoveredIndex === 1 ? "md:hover:w-[300px]" : ""
              } transition-all duration-300`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={"/heroTwo.jpg"}
                alt="man pic"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl object-cover cursor-pointer"
              />
              <div
                className={`text-white absolute bottom-5 left-0 flex justify-between w-full px-4 cursor-pointer ${
                  hoveredIndex === 1 ? "block" : "md:hidden"
                } transition-all duration-300`}
              >
                <span className="text-xl">
                  Writing <br /> Course
                </span>
                <span className="text-xl">
                  100 <br /> Topics
                </span>
              </div>
              <div 
              className={`bg-[#1a1b28] relative  ${
                hoveredIndex === 1 ? "hidden" : "md:block hidden"
              } transition-all duration-300`}
              >
                <h1 className="text-white text-xl rotate-90 transform -scale-x-1 absolute bottom-10 left-0">
                  Writing
                </h1>
              </div>
            </div>
            <div
              className={`md:w-[150px] md:h-[400px] w-[300px] h-[400px] overflow-hidden relative ${
                hoveredIndex === 2 ? "md:hover:w-[300px]" : ""
              } transition-all duration-300`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={"/heroThree.jpg"}
                alt="man pic"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl object-cover cursor-pointer"
              />
              <div
                className={`text-white absolute bottom-5 left-0 flex justify-between w-full px-4 cursor-pointer ${
                  hoveredIndex === 2 ? "block " : "md:hidden block"
                } transition-all duration-300`}
              >
                <span className="text-xl">
                  Buisness <br /> Course
                </span>
                <span className="text-xl">
                  100 <br /> Topics
                </span>
              </div>
              <div 
              className={`bg-[#1a1b28] relative border border-black  ${
                hoveredIndex === 2 ? "hidden " : "md:block hidden"
              } transition-all duration-300`}
              >
                <h1 className="text-white text-xl rotate-90 transform -scale-x-1 absolute bottom-10 left-0 bg-[#1a1b28] p-2">
                  Writing
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
