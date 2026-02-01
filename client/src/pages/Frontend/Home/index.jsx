import { Carousel } from "antd";
import React from "react";
import img1 from "../../../assets/images/Banner1.jpg";
import img2 from "../../../assets/images/Banner2.jpg";
import HeroSection from "./HeroSection";
import Promo from "./Promo";
import Theme from "./Theme";
import Menu from "./Menu";
import Offer from "./Offer";
import Categories from "./Categories";
const Home = () => {
  return (
    <main>
      <HeroSection />
      <Promo />
      <Theme />
      <Menu />
      <Offer />
      <Categories />
    </main>
  );
};

export default Home;
