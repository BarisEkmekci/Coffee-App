import React, { useEffect, useState } from "react";
import CoffeeAPI from "../api/CoffeeAPI";
import Coffee from "../components/Coffee";
import { BiSolidCoffeeBean } from "react-icons/bi";
import Buy from "../components/Buy";
import { Provider } from "react-redux"
//import Store from "../redux/Store";
//import { addtoCart } from "../redux/cartSlice";



const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coffees, setCoffees] = useState([]);

  const getCoffess = () => {
    const coffeeAPI = new CoffeeAPI();

    setIsLoading(true);
    coffeeAPI
      .getCoffess()
      .then((data) => {
        // Gelen responsun içindeki datayı coffess stateine ekle
        setCoffees(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const getSortedCoffees = (sort) => {
    const coffeeAPI = new CoffeeAPI()
    setIsLoading(true)

    coffeeAPI.getSortedCoffes(sort)
    .then(data => {
      setCoffees(data.data)
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getCoffess();
    return () => {};
  }, []);

  return (
    <Provider store={Store}>
    <div className="">

    
      <span onClick={() => getSortedCoffees("asc")}>A-Z</span>
      &nbsp;
      <span onClick={() => getSortedCoffees("desc")}>Z-A</span>
      {isLoading === true && (
        <div>
          <BiSolidCoffeeBean className="animate-ping text-6xl" />
        </div>
      )}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {coffees.map((coffee) => (
          <Coffee
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            roast_level={coffee.roast_level}
            id={coffee.id}
            image={coffee.image_url}
            key={coffee._id}
          />
        ))
        }
      </div>
    </div>
    </Provider>
  );
};

export default Home;
