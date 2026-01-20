import React from "react";
import img1 from "../../../assets/images/yellowbg.jpg";
import img2 from "../../../assets/images/promo.burger.png";
import img3 from "../../../assets/images/red-thappa.png";
import img4 from "../../../assets/images/burger-02.png";
import img5 from "../../../assets/images/burger3.png";

const Offer = () => {
  return (
    <section id="offer" className="mt-20 py-15">
      <div className="grid lg:grid-cols-11 md:grid-cols-1 p-10 lg:gap-10">
        <div className="col-span-4 flex flex-col my-10 lg:text-start text-center">
          <h2 className="font-oswald uppercase leading-tight text-white ">
            <span className="block text-4xl md:text-6xl font-bold">The</span>
            <span className="block text-6xl md:text-8xl font-bold">County</span>
            <span className="block text-6xl md:text-8xl font-bold">
              General
            </span>
          </h2>
          <p className="text-white/80 mt-6 lg:px-2 sm:px-40">
            Semper lacus cursus porta a primis feugiat ligula risus auctor
            rhoncus semper undo
          </p>
          <div className="">
            <button className="btn btn-danger px-10! py-3! mt-6">
              Order Now
            </button>
          </div>
        </div>
        <div className="col-span-5 relative">
          <img src={img2} alt="promo burger" className="w-full " />
          <div className="absolute transform top-0 right-0">
            <img
              src={img3}
              alt="price badge"
              className="lg:w-[200px] w-[150px]"
            />
            <h2 className="absolute inset-0 flex flex-col items-center justify-center text-white font-extrabold leading-tight">
              <span className="uppercase text-sm md:text-xl">Only</span>
              <span className="text-xl md:text-4xl">$9.99</span>
              <span className="text-xs md:text-lg">Code: 0841</span>
            </h2>
          </div>
        </div>
        <div className="col-span-2 h-full flex justify-center items-center ">
          <div className="lg:block flex lg:gap-2 gap-4">
            <div className="transition-500 lg:w-[160px] w-[140px] p-3 cursor-pointer my-2 rounded-lg flex items-center flex-col border border-white/50 hover:bg-white/20 backdrop-blur-2xl shadow ">
              <img
                src={img4}
                alt="small burger"
                className="w-[160px] transition"
              />
              <p className="capitalize text-center text-white">
                ultimate bacon burger
              </p>
            </div>
            <div className="transition-500 lg:w-[160px] w-[140px] p-3 cursor-pointer my-2 rounded-lg flex items-center flex-col border border-white/50 hover:bg-white/20 backdrop-blur-2xl shadow ">
              <img
                src={img5}
                alt="grilled chicken burger"
                className="w-[160px] transition"
              />
              <p className="capitalize text-center text-white">
                grilled chicken burger
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
