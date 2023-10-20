import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const emailUser = user.email;
  console.log(user.email);
  const {
    _id,
    brand,
    name,
    type,
    price,
    description,
    photoURL,
    cover,
    rating,
  } = data;

  const handleAddToCart = (event) => {
    event.preventDefault();
    const userProduct = {
      brand,
      name,
      type,
      price,
      description,
      photoURL,
      cover,
      rating,
      emailUser,
    };
    fetch(
      "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/userProducts",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Added to your Cart Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };
  return (
    <div className=" grid gap-3 max-w-6xl mt-5 mx-auto mb-10">
      <div className="card  lg:card-side lg:h-[550px] mt-1 bg-base-100 shadow-xl grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-2">
        <figure className=" w-full pb-5 lg:pb-0 ">
          <img className=" w-full h-full" src={photoURL} alt="Album" />
        </figure>
        <div className="card-body bg-emerald-200 rounded-2xl lg:rounded-r-2xl ">
          <h2 className=" text-3xl font-bold">{name}</h2>
          <div className=" border-t-2 border-b-2 py-3 my-4">
            <h2 className=" text-xl font-bold">Brand: {brand}</h2>
            <h2 className=" text-xl font-bold">Type: {type}</h2>
            <p className=" text-xl mt-2 h-fit">{description}</p>
          </div>
          <div className=" space-y-3 ">
            <h1 className=" text-lg font-bold">Available Color:</h1>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-red-200"></div>
              <div className="w-12 h-12 rounded-full bg-black"></div>
              <div className="w-12 h-12 rounded-full bg-white"></div>
              <div className="w-12 h-12 rounded-full bg-amber-700"></div>
              <div className="w-12 h-12 rounded-full bg-red-500"></div>
            </div>
          </div>
          <div className=" space-y-2">
            <p className="text-lg font-bold">Size:</p>
            <div className="flex gap-1 lg:gap-2">
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                XS
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                S
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                M
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                L
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                XL
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                XXL
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                3XL
              </div>
              <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-sm lg:text-lg">
                4XL
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-3 lg:grid-cols-3 justify-between mt-5">
            <button
              onClick={handleAddToCart}
              className="btn lg:col-span-2 bg-emerald-800 border-none hover:bg-emerald-900 text-white "
            >
              Add To Cart
            </button>
            <button className=" rounded-lg disabled hover:bg-emerald-700 bg-emerald-700 border-none text-white font-bold text-lg">
              Price: ${price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
