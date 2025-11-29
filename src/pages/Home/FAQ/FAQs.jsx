import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frequentlyAskedQuestions } from "../../../utils/content";
import CaretUp from "../../../components/icons/CaretUp";

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(
    frequentlyAskedQuestions[0].category
  );
  const [openQuestion, setOpenQuestion] = useState(null);

  const selectedCategory = frequentlyAskedQuestions.find(
    (item) => item.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 lg:px-0 text-primary-50">
      {/* Title */}
      <h2 className="mb-22 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-12 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
        Frequently Asked Questions
      </h2>
      <div className="mb-8 text-xl/loose font-light">
        <p className="text-primary-100 text-center">
          The most commonly asked questions about NoteFlow.{" "}
          <br className="max-md:hidden" />
          Have any other questions?{" "}
          <a
            href="#"
            className="group underline decoration-1 underline-offset-3"
          >
            Chat with our expert tech team
          </a>
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {frequentlyAskedQuestions.map((cat) => (
            <button
              key={cat.id}
              className={`border-primary-50 text-primary-50 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 transition ${
                cat.category === activeCategory
                  ? "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"
                  : "hover:bg-primary-50 hover:text-primary-1300"
              }`}
              onClick={() => handleCategoryChange(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <ul className="flex flex-col gap-6 mx-auto">
          {selectedCategory.questions.map((item, index) => {
            const isOpen = openQuestion === item.id;

            return (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1, // stagger on scroll
                }}
                className="cursor-pointer"
              >
                {/* Question Row */}
                <button
                  className="flex w-full items-center p-5 gap-3"
                  onClick={() => handleQuestionClick(item.id)}
                >
                  <div className="border-primary-50 rounded-xl border-2 p-3.5">
                    <item.Icon
                      width={2}
                      className="stroke-primary-50"
                      alt={item.alt}
                    />
                  </div>

                  <p className="text-primary-50 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight">
                    {item.question}
                  </p>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <CaretUp
                      className="stroke-primary-50"
                      activeQuestion={isOpen}
                      width={2.5}
                      alt="Caret Up Icon"
                    />
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        maxHeight: 0,
                        visibility: "hidden",
                      }}
                      animate={{
                        opacity: 1,
                        maxHeight: 300,
                        visibility: "visible",
                        paddingTop: "1rem",
                      }}
                      exit={{
                        opacity: 0,
                        maxHeight: 0,
                        visibility: "hidden",
                        paddingTop: 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      layout
                      className="text-primary-100 pr-14 pl-20 text-lg/8 font-light overflow-hidden"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
