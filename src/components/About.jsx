"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div id="courses" className="max-w-7xl mx-auto min-h-screen bg-[#f9f5f1]">
      <div className="w-[80%] mx-auto min-h-screen  flex flex-col">
        <h1 className="mt-10 md:mb-0 mb-10 text-center text-4xl h-10 w-full ">
          Unlimited access to 100+ instructors
        </h1>
        <div className="md:mt-10 mt-24">
          <ul className="flex gap-7 flex-wrap items-center justify-center">
            <li className="font-bold underline">All Categories</li>
            <li>Entertaiment</li>
            <li>Lifestyle</li>
            <li>Writting</li>
            <li>Buisness</li>
            <li>Food</li>
          </ul>
        </div>
        <div className="flex items-center gap-5 md:gap-10 md:flex-row flex-col justify-between mt-10 md:px-10">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{y:-20 }}
          >
            <Image
              src={"/imageOne.jpg"}
              alt="image"
              width={isLargeScreen ? 200 : 500}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-2">
              <h1 className="font-semibold text-base">Sales Marketing</h1>
              <p className="text-sm">4 Month</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 10, opacity: 1 }}
            whileHover={{y:-20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={"/imageTwo.jpg"}
              alt="image"
              width={isLargeScreen ? 200 : 500}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-2">
              <h1 className="font-semibold text-base">Data analytics</h1>
              <p className="text-sm">3 Month</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            whileHover={{y:-20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={"/imageThree.jpg"}
              alt="image"
              width={isLargeScreen ? 200 : 500}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-2">
              <h1 className="font-semibold text-base">Copywriting Pro</h1>
              <p className="text-sm">2 Month</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{y:-20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={"/imageFour.jpg"}
              alt="image"
              width={isLargeScreen ? 200 : 500}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-2">
              <h1 className="font-semibold text-base">Design Art</h1>
              <p className="text-sm">4 Month</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
