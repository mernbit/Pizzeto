import React from "react";
import img from "../../../assets/images/Promo.png";
import burger from "../../../assets/images/burger.png";
import fries from "../../../assets/images/fries.png";
import chicken from "../../../assets/images/chicken.png";
import salad from "../../../assets/images/salad.png";

const Promo = () => {
  return (
    <div className="d-container p-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <img src={img} className="w-full" alt="promo image" />
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <p className="text-accent uppercase tracking-wide font-medium! md:text-5xl text-3xl">
            Nothing brings people together like a good burger
          </p>
          <p className="text-black/40 mt-[40px] md:text-xl text-lg tracking-wide font-light!">
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae at integer orci
            congue and metus in mollislorem primis gravida
          </p>
          <div className="flex items-center opacity-60 justify-between mt-10 w-full">
            <div>
              <img src={burger} className="w-[70px]" alt="burger" />
              <p className="uppercase text-center">burgers</p>
            </div>
            <div>
              <img src={fries} className="w-[70px]" alt="fries" />
              <p className="uppercase text-center">fries</p>
            </div>
            <div>
              <img src={chicken} className="w-[70px]" alt="chicken" />
              <p className="uppercase text-center">chicken</p>
            </div>
            <div>
              <img src={salad} className="w-[70px]" alt="salad" />
              <p className="uppercase text-center">salad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
