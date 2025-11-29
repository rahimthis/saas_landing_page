import { useState } from "react";
import { motion } from "motion/react";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../../components/icons/CaretUp";
import Star from "../../../components/icons/Star";

export default function Testimonials() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="m-auto flex max-w-7xl flex-col items-center px-6 md:px-0">
      {/* Header */}
      <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6">
        <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8">
          Testimonials
        </p>
        <h2 className="mb-22 text-center text-primary-50 text-6xl/18 font-semibold tracking-tighter max-xl:mb-12 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
          What our AI-powered <br />
          note takers have to say
        </h2>
        <p className="text-primary-100 md:px-28 text-center text-xl/loose font-light">
          NoteFlow has helped 1000&apos;s supercharge their productivity with
          cutting edge AI note taking tools
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((colIndex) => {
          const start = colIndex * 5;
          const end = start + (expanded ? 2 : 5);

          return (
            <ul key={colIndex} className="flex flex-col gap-y-6">
              {test.slice(start, end).map((item) => (
                <motion.li
                  key={item.name}
                  className="bg-primary-1300 rounded-2xl px-8 py-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    opacity: { duration: 0.75, ease: "easeInOut" },
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-x-1 pb-8">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        alt="Star Rating Icon"
                        className="fill-primary-100"
                        key={i}
                      />
                    ))}
                    {Array.from({ length: 5 - item.rating }).map((_, i) => (
                      <Star alt="Star Rating Icon" key={i} />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-primary-50 pb-16 text-lg/loose font-light">
                    {item.description}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-x-6">
                    <img
                      src={item.src}
                      alt="Portrait Headshot"
                      className="h-18 rounded-full"
                    />
                    <div>
                      <p className="text-primary-500 text-xl/7 font-bold tracking-tight">
                        {item.name}
                      </p>
                      <p className="text-primary-75 text-base/loose tracking-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          );
        })}
      </div>

      {/* Expand / Collapse Button */}
      <button
        className="text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8"
        onClick={() => setExpanded((curr) => !curr)}
      >
        {expanded ? "Show less" : "Show more"}
        <CaretUp
          className={`stroke-primary-50 group-hover:stroke-primary-1300 transition-all duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          alt="Caret Up Icon"
          width={2}
        />
      </button>
    </div>
  );
}
