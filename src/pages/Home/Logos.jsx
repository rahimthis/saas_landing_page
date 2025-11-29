import React from "react";
import { logos } from "../../utils/content";

const Logos = () => {
  return (
    <section className="bg-gradient-bottom py-18 lg:py-28 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 ">
        <p className="text-primary-50 last m-auto mb-20 text-center text-xl max-xl:text-lg/8 max-sm:mb-16">
          Organizations powered by{" "}
          <span className="font-bold tracking-tight">NoteFlow</span>
        </p>
        <div className="flex flex-col gap-y-16 max-md:flex-row max-md:items-center max-md:justify-around max-sm:gap-x-14">
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    alt={logo.alt}
                    src={logo.src}
                    key={logo.id}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    src={logo.src}
                    alt={logo.alt}
                    key={logo.id}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Logos;
