"use client";
import React from "react";
import IconsSection from "./IconsSection";
import { SlBadge } from "react-icons/sl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
const WhatAreWe = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div id="about" className="pt-24 mt-20 md:mt-0 max-w-7xl mx-auto bg-[#f9f5f1] md:mb-20 ">
      <div className="w-[80%] mx-auto">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="heading flex justify-between mb-20 md:mb-0  flex-col md:flex-row items-center md:px-10"
        >
          <h1 className="text-3xl mb-5 md:mb-0">
            Get the skills you <br className="hidden md:block" /> need for a job that
            <br className="hidden md:block" />
            is in demand
          </h1>
          <h1>
            The modern labor market dictates its own terms.  <br className="hidden md:block" />
            Today, to be a competetive specialist requires more  <br className="hidden md:block" /> than
            professional skills
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="md:w-[30%] w-full mb-20 md:mb-0 h-auto md:px-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <IconsSection
                heading={"Leadership"}
                desc={"Fully committed to the success of the company"}
                icon={<SlBadge size={30} />}
                line={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <IconsSection
                heading={"Responsibility"}
                desc={"Employees will always be my top priority"}
                icon={<SlBadge size={30} />}
                line={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <IconsSection
                heading={"Flexibility"}
                desc={"The ability to switch is an important skill"}
                icon={<SlBadge size={30} />}
                line={false}
              />
            </motion.div>
          </div>
          <div className="md:w-[70%]w-full flex justify-center h-auto relative ">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 70, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-evenly items-center absolute -top-14 md:-top-10 md:right-32 md:px-6 px-5 md:py-3 bg-[#8cbe75] rounded-lg gap-5 z-10"
            >
              <div className="flex justify-evenly items-center gap-5">
                <h1 className="md:text-3xl text-xl font-bold">10</h1>
                <h1 className="md:text-sm text-xs font-semibold">
                  Years <br /> Experience
                </h1>
              </div>
              <div className="h-[1px] w-[30px] bg-black transform rotate-90"></div>
              <div className="flex justify-evenly items-center gap-5">
                <h1 className="md:text-3xl text-xl font-bold">250</h1>
                <h1 className="md:text-sm text-xs font-semibold">
                  Types Of <br /> Courses
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 md:mt-0"
            >
              <Image
                src={"/aboutImage.jpg"}
                width={isLargeScreen ? 500 : 500}
                height={isLargeScreen ? 500 : 500}
                alt="about image"
                className="rounded-xl border border-gray-400"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAreWe;
