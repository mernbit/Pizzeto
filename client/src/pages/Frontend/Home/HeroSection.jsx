import React, { useState } from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";

import img1 from "../../../assets/slider/slide-1.jpg";
import img2 from "../../../assets/slider/slide-2.jpg";
import img3 from "../../../assets/slider/slide-3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const textVariant = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-[40px] mt-22">
      <Carousel
        dots
        effect="fade"
        autoplay
        autoplaySpeed={3500}
        afterChange={(index) => setCurrentSlide(index)}
      >
        {/* ---------- Slide 1 ---------- */}
        <div className="relative">
          <img
            src={img1}
            alt="banner-1"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          />

          {currentSlide === 0 && (
            <motion.div
              key="slide-1-text"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-white lg:text-9xl md:text-8xl text-6xl font-lilita tracking-wide">
                Good Time <br /> Great Taste
              </p>

              <p className="text-white lg:text-3xl md:text-2xl text-xl mt-6">
                Open Daily:
                <span className="ml-2 text-yellow-300 font-bold lg:text-4xl">
                  11:30PM - 8:30PM
                </span>
              </p>
            </motion.div>
          )}
        </div>

        {/* ---------- Slide 2 ---------- */}
        <div className="relative">
          <img
            src={img2}
            alt="banner-2"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          />

          {currentSlide === 1 && (
            <motion.div
              key="slide-2-text"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-lilita tracking-wide"
            >
              <p className="font-lilita lg:text-9xl md:text-8xl text-5xl">
                Discover The <br /> Real Burgers
              </p>

              <p className="lg:text-3xl md:text-2xl text-xl mt-6">
                Enjoy the food you love
                <span className="ml-2 text-yellow-300 font-bold lg:text-4xl">
                  FROM $6.99
                </span>
              </p>
            </motion.div>
          )}
        </div>

        {/* ---------- Slide 3 ---------- */}
        <div className="relative">
          <img
            src={img3}
            alt="banner-3"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          />

          {currentSlide === 2 && (
            <motion.div
              key="slide-3-text"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-lilita tracking-wide"
            >
              <p className="font-lilita lg:text-9xl md:text-8xl text-6xl">
                Big Burger <br /> Little Money
              </p>

              <p className="lg:text-3xl md:text-2xl text-xl mt-6">
                Order Now:
                <span className="ml-2 text-yellow-300 font-bold lg:text-4xl">
                  11:30PM - 8:30PM
                </span>
              </p>
            </motion.div>
          )}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
