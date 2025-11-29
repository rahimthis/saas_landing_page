import React from "react";
import { reviews } from "../../utils/content";
const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto  flex gap-x-4  max-xl:gap-x-3 gap-y-4 px-6 lg:px-0 items-center flex-wrap ">
      <ul className="flex ">
        {reviews.map((review) => (
          <li className="-mr-4 last:mr-0">
            <img
              className="border-primary-100 h-12 rounded-full border-2"
              src={review.src}
              alt=""
            />
          </li>
        ))}
      </ul>
      <p className="text-primary-100 text-xl/loose font-light max-lg:text-base/loose">
        Trusted by <span className="text-primary-500 font-bold tracking-tight">12,653+</span> productivity junkies
      </p>
    </div>
  );
};

export default Reviews;
