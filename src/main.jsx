import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import Home from "./pages/Home.jsx";
import CoffeeDetail from "./pages/CoffeeDetail.jsx"
import SignUp from "./pages/loginp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coffee/:coffeeId",
        element: <CoffeeDetail />,
        errorElement: <span>Coffee Not Found!</span>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* App yerine kendi belirlediğimiz routelara göre sayfayı getir */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
