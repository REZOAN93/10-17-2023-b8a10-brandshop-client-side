import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../Layout/Home/Home";
import Banner from "../../Layout/Banner/Banner";
import Products from "../../Layout/Products/Products";
import Cart from "../../Layout/Cart/Cart";
import Brands from "../../Brands/Brands";

import Register from "../../Auth/Register";
import Profile from "../../Auth/Profile";
import SignIn from "../../Auth/SignIn/SignIn";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart /></PrivateRoute>,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile /></PrivateRoute> ,
      },
    ],
  },
]);
