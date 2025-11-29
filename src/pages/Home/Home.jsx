import React from "react";
import Navbar from "../../shared/Navbar";
import Hero from "./Hero";
import Revies from "./Reviews";
import Logos from "./Logos";
import Features from "./Features";
import FAQs from "./FAQ/FAQs";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
  return (
    // Main Section
    <>
      {/* Here is hearder section */}
      <div className="bg-gradient-top pb-10">
        <Hero />
        <Revies />
      </div>

      {/* Here is Logo section */}
      <section >
        <Logos />
      </section>

      {/* Here is the Features section */}
      <section className="bg-gradient-top py-20 ">
        <Features />
      </section>

      {/* Here is the FAQ section  */}
      <section className="bg-gradient-bottom py-20">
        <FAQs />
      </section>

      {/* Here is the Testimonials Section */}
      <section className="bg-gradient-top py-20">
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
