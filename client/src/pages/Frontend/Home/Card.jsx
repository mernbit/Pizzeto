import React from "react";
import Img from "../../../assets/images/burger3.png";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

const Card = () => {
  const burgers = [
    {
      id: 1,
      name: "Classic Burger",
      price: 85.95,
      star: [1, 2, 3, 4, 5],
      description:
        "Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 9.99,
      star: [1, 2, 3, 4, 5],
      description: "House beef patty, cheddar cheese, bacon, onion, mustard",
    },
    {
      id: 3,
      name: "Zinger Burger",
      price: 7.86,
      star: [1, 2, 3, 4],
      description:
        "Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    },
    {
      id: 4,
      name: "Spicy Burger",
      price: 8.3,
      star: [1, 2, 3, 4],
      description: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    },
  ];
  return (
    <div className="grid p-4 grid-cols-1 md:grid-cols-4 gap-4 md:max-w-[90%] max-w-[95%]  mt-4 mx-auto">
      {burgers.map((burger) => (
        <div key={burger.id} className=" rounded-lg transition relative">
          <div className="absolute top-2 right-2 ">
            <HeartOutlined className="text-3xl md:text-[22px] text-gray-500/70! px-3 py-2" />
          </div>
          <div className="border border-gray-200 rounded p-4 ">
            <img
              src={Img}
              alt={burger.name}
              className="w-[304px] h-[253px]  md:h-full object-cover rounded"
            />
            <div className="flex justify-between items-center mt-5">
              <p className="text-[21px]! text-primary font-oswald bg-accent px-3 py-1  rounded">
                ${burger.price}
              </p>
              <p className="text-yellow-500 text-2xl">
                {burger.star.map((star) => (
                  <span
                    key={star}
                    dangerouslySetInnerHTML={{ __html: "&star;" }}
                  ></span>
                ))}
              </p>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-2xl text-accent font-medium! font-oswald">
              {burger.name}
            </h2>

            <p className=" font-normal! text-gray-500">{burger.description}</p>
          </div>

          <div className="flex px-10 py-5 text-[16px]! justify-between mt-2 gap-1">
            <button className="btn hover:bg-[#ffc422] w-full border-1 border-gray-300! font-oswald transition-all duration-300 text-gray-800/80 rounded-none uppercase font-medium px-2 py-2 mx-auto tracking-wide ">
              <ShoppingOutlined className="text-xl" /> Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
