import React from "react";
import Burgers from "./Burgers";
import Pizza from "./Pizza";
import Fries from "./Fries";
import Desserts from "./Desserts";
const SelectedCategories = ({ selectedTab }) => {
  switch (selectedTab) {
    case 1:
      return <Burgers />;
    case 2:
      return <Pizza />;
    case 3:
      return <Fries />;
    case 4:
      return <Desserts />;
    default:
      return <Burgers />;
  }
};

export default SelectedCategories;
