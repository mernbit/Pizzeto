import React from "react";
import { Carousel } from "antd";
import img1 from "../../../assets/images/Banner1.jpg";
import img2 from "../../../assets/images/Banner2.jpg";
// import img3 from "../../../src/assets/images/Hero.png";
const HeroSection = () => {
  return (
    <div className="mb-[40px]">
      <Carousel>
        <div>
          <img
            src={img1}
            alt="banner1"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="banner2"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover "
          />
        </div>
        <div>
          <img
            src={img1}
            alt="banner1"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="banner2"
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover "
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
