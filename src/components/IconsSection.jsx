"use client";
import { motion } from "framer-motion";
import React from "react";

const IconsSection = ({ heading, desc, icon, line }) => {
  return (
    <div
      className="relative"
    >
      <div className="flex gap-6 ">
        <div className="bg-white h-10 p-1 rounded-full">
          {icon}
        </div>
        <div>
          <h1 className="font-semibold">{heading}</h1>
          <h1 className="">{desc} </h1>
        </div>
      </div>
      {line && (
        <div className="transform absolute rotate-90  top-14 left-0">
          <svg
            width="35"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              stroke-dasharray="10, 5"
              x1="0"
              y1="10"
              x2="350"
              y2="10"
            ></line>
          </svg>
        </div>
      )}
    </div>
  );
};

export default IconsSection;
