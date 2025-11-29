import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-bottom from-primary-1300 to-primary-1400 text-primary-50 px-6 overflow-hidden ">
      {/* Big 404 */}
      <motion.h1
        className="text-[15rem] font-black tracking-tighter leading-none max-md:text-[10rem] max-sm:text-[8rem]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-3xl font-semibold mt-4 max-md:text-2xl max-sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Oops! Page Not Found
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-lg text-primary-100 mt-2 text-center max-w-xl max-md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        The page you are looking for does not exist or has been moved.
      </motion.p>

      {/* Button to go home */}
      <motion.button
        onClick={() => navigate("/")}
        className="mt-10 px-8 py-4 bg-primary-500 hover:bg-primary-50 hover:text-primary-1300 text-primary-1300 font-semibold rounded-full text-lg/8 transition-all primary-glow primary-glow-hover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Go Back Home
      </motion.button>

      {/* Optional decorative gradient circles */}
      <div className="absolute top-[-5rem] right-[-5rem] w-80 h-80 bg-primary-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-5rem] left-[-5rem] w-80 h-80 bg-primary-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </div>
  );
}
