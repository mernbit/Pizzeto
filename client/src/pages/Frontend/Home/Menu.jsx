import React from "react";

const Menu = () => {
  return (
    <div className="d-container">
      <div className="text-center">
        <h2 className="text-6xl mt-12 text-danger uppercase font-bold">
          Explore Our Menu
        </h2>
        <p className="text-black/50 text-xl py-6 d-container px-20 font-light!">
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
          primis libero tempus, blandit a cursus varius magna
        </p>
      </div>
      <div>
        <p className="text-center text-2xl capitalize text-black/45">
          no product found{" "}
        </p>
      </div>
    </div>
  );
};

export default Menu;
