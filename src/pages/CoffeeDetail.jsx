import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CoffeeAPI from "../api/CoffeeAPI";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { CiCoffeeBean, CiLocationOn } from "react-icons/ci";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { CiCoffeeCup } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";



const CoffeeDetail = (props) => {
  const { coffeeId } = useParams();
  const [coffee, setCoffee] = useState({});

  const rangeNumber = (number) => {
    const array = [];
    for (let index = 0; index < number; index++) {
      array.push(true);
    }
    if (array.length < 5) {
      for (let index = array.length; index < 5; index++) {
        array.push(false);
      }
    }
    return array;
  };

  useEffect(() => {
    const coffeeAPI = new CoffeeAPI();
    coffeeAPI.getCoffee(coffeeId).then((data) => {
      setCoffee(data.data[0]);
    });

    return () => {};
  }, [coffeeId]);

  return (
    <>
     {/* <Provider store={store}> */}
      {coffee.name != undefined && (
        <div className="relative">
          <div className="grid grid-cols-12 p-5 border rounded-md shadow gap-4">
            <div className="col-span-5">
              <img src={coffee.image_url} className="h-full object-cover " />
            </div>
            <div className="col-span-7 flex flex-col border-l-2 gap-6 p-3">
              <div className="flex justify-between">
                <span className="font-bold text-4xl">{coffee.name}</span>
                <FaHeart className="text-3xl hover:text-red-600 hover:text-4xl cursor-pointer transition-all duration-200 " />
              </div>
              <span className="text-sm text-gray-500">
                {coffee.description}
              </span>
              <span className="flex items-center gap-2">
                <CiLocationOn /> {coffee.region}
              </span>
              <span className="flex gap-2 items-center">
                <LiaWeightHangingSolid />
                {coffee.weight} gr
              </span>
              <ul className="">
                {coffee.grind_option &&
                  coffee.grind_option.map((option) => (
                    <li className="last:border-none flex items-center border-b w-1/4 gap-2">
                      <CiCoffeeCup />
                      {option}
                    </li>
                  ))}
              </ul>
              <div className="flex">
                {rangeNumber(coffee.roast_level).map((status) => (
                  <span key={Math.random() * 1000}>
                    {status ? <BiSolidCoffeeBean /> : <CiCoffeeBean />}
                  </span>
                ))}
              </div>
              <button className="border-black border-2 text-lg text-center p-5 bg-black text-white hover:bg-white hover:text-black duration-500 transition-all  ">
                {coffee.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* </Provider> */}
    </>
  );
};

export default CoffeeDetail;
