"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { useMediaQuery } from 'react-responsive';
const Reviews = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const slidesPerView = isMobile ? 1 : 3;
  return (
    <div id="reviews" className="py-20 max-w-7xl mx-auto bg-[#f9f5f1]">
      <div className="md:w-[80%] w-full px-10 md:px-0 mx-auto">
        <div className="">
          <h1 className="text-center text-3xl font-semibold tracking-widest ">
            What our client says{" "}
            <span className="text-[#8cbe75] text-3xl">.</span>
          </h1>
        </div>
        <div className="md:p-10 mt-10 md:mt-0 ">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={50}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitOne.jpg"}
                review={
                  "Skillex is a game-changer! The courses are top-notch, easy to follow, and packed with valuable insights. Highly recommend!"
                }
                name={"Alex Johnson"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitTwo.jpg"}
                review={
                  "Impressed with the variety of courses on Skillex. From beginner to advanced, there's something for everyone. Great platform!"
                }
                name={"Emily Davis"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitThree.jpg"}
                review={
                  "Skillex made learning enjoyable. The interactive courses and knowledgeable instructors exceeded my expectations. Thumbs up!"
                }
                name={"Benjamin Carter"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitFour.jpg"}
                review={
                  "Navigating through Skillex was a breeze. The user-friendly interface, coupled with high-quality content, makes it a standout e-learning platform."
                }
                name={"Sophia Rodriguez"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitFive.jpg"}
                review={
                  "Skillex is my go-to for upgrading my skills. The courses are concise, well-structured, and offer practical knowledge. Fantastic resource!"
                }
                name={"Liam Miller"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portaitSix.jpg"}
                review={
                  "Enrolling in Skillex was a wise decision. The courses are engaging, and the community aspect adds an extra layer of support and motivation."
                }
                name={"Olivia Anderson"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitSeven.jpg"}
                review={
                  "Skillex's courses are a great investment in self-improvement. The instructors are experts in their fields, and the learning experience is unmatched."
                }
                name={"Ethan Martinez"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitEight.jpg"}
                review={
                  "Skillex provides a seamless learning journey. The diverse course catalog helped me enhance my skills and advance in my career."
                }
                name={"Ava Thompson"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portaitNine.jpg"}
                review={
                  "Skillex stands out for its commitment to quality education. The courses are not only informative but also relevant to today's industry needs."
                }
                name={"Noah White"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "224px", width: "300px", borderRadius: "16px" }}
            >
              <ReviewCard
                image={"/portraitTen.jpg"}
                review={
                  "Skillex combines convenience and excellence. The flexible schedules and mobile-friendly interface make learning on-the-go a breeze. Love it!"
                }
                name={"Mia Harris"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
