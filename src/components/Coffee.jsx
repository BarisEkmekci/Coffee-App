import React from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { CiCoffeeBean } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const Coffee = (props) => {
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


  const dispatch = useDispatch()

  return (
    <>
      <Link
        to={"coffee/" + props.id}
        className="border p-5 cursor-pointer rounded-md shadow"
      >
        <div>
          <img src={props.image} />
        </div>
        <div>
          <span className="text-lg">{props.name}</span>
          <br />
          <span className="line-clamp-1 text-sm text-gray-400">
            {props.description}
          </span>
        </div>
        <div className="mt-3">
          <span>
            {props.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <br />
          <div className="flex gap-1 mt-3">
            {rangeNumber(props.roast_level).map((status) => (
              <span key={Math.random() * 1000}>
                {status ? <BiSolidCoffeeBean /> : <CiCoffeeBean />}
              </span>
            ))}
          </div>
          <div>
            <button onClick={() => dispatch(addtoCart({title,image}))} className="border-black border-2 text-lg text-center w-full mt-3 bg-black text-white hover:bg-white hover:text-black duration-500 transition-all  ">
              {props.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Coffee;
