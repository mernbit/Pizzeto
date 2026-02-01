import React, { useState } from "react";
import SelectedCategories from "./SelectedCategories";

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="my-10 mx-auto">
      <div className="text-7xl d-container flex justify-evenly items-center mx-auto">
        <div
          onClick={() => setSelectedTab(1)}
          className="flex flex-col items-center cursor-pointer"
        >
          <span
            className={`fi fi-rs-hamburger block ${selectedTab === 1 && "text-red-600"}`}
          ></span>
          <p className="text-sm text-center">Burgers</p>
        </div>
        <div
          onClick={() => setSelectedTab(2)}
          className="flex flex-col items-center cursor-pointer"
        >
          <span
            className={`fi fi-rr-pizza-slice block ${selectedTab === 2 && "text-red-600"}`}
          ></span>
          <p className="text-sm text-center">Pizza</p>
        </div>
        <div
          onClick={() => setSelectedTab(3)}
          className="flex flex-col items-center cursor-pointer"
        >
          <span
            className={`fi fi-rr-french-fries block ${selectedTab === 3 && "text-red-600"}`}
          ></span>
          <p className="text-sm text-center">Fries</p>
        </div>
        <div
          onClick={() => setSelectedTab(4)}
          className="flex flex-col items-center cursor-pointer"
        >
          <span
            className={`fi fi-rr-donut block ${selectedTab === 4 && "text-red-600"}`}
          ></span>
          <p className="text-sm text-center">Donut</p>
        </div>
      </div>
      <div>
        <SelectedCategories selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Categories;
