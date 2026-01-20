import React from "react";
import img1 from "../../../assets/images/theme-2.jpg";
import img2 from "../../../assets/images/theme-1.jpg";
const Theme = () => {
  return (
    <div className="d-container p-3">
      <div className="grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 gap-5 my-20">
        <div className="lg:col-span-3  col-span-1 relative">
          <img
            src={img1}
            className="h-[250px] w-full object-cover"
            alt="theme image"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-10">
            <p className="uppercase opacity-60 font-light! text-end text-3xl">
              get your free <br /> <span>cheese fries</span>
            </p>
            <div className="text-end">
              <button className="btn btn-danger">learn more</button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1 relative">
          <img
            src={img2}
            className="h-[250px] w-full object-cover"
            alt="theme image"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-10">
            <p className="uppercase opacity-60 font-light! tracking-tighter text-end text-3xl">
              Crispy Chicken <br /> <span>burgers fries</span>
            </p>
            <div className="text-end">
              <button className="btn btn-danger">learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
