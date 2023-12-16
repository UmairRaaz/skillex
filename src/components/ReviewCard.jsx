import Image from "next/image";
import React from "react";

const ReviewCard = ({image, review, name}) => {
  return (
    <div className="w-full rounded-2xl md:px-5 px-5 md:py-3 py-5 h-full ">
      <h1 className="md:text-base text-sm text-left h-[50%]">
        {review}
      </h1>
      <div className="flex items-center md:gap-5 gap-3 md:mt-7  h-[50%]">
        <div className="w-10 h-10">
          <Image
            src={image}
            width={50}
            height={50}
            alt="portrait"
            className="rounded-full border border-black"
          />
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
