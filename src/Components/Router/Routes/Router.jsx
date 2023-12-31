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
import AddProducts from "../../AddProducts/AddProducts";
import BrandProducts from "../../Brands/BrandProducts";
import ProductDetails from "../../Brands/ProductDetails";
import Users from "../../Auth/User";
import Productupdate from "../../Brands/Productupdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/brands"
          ),
      },
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/brands/:id",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(
            `https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/userProducts"
          ),
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
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/users"
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/productupdate/:id",
        element: (
          <PrivateRoute>
            <Productupdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
