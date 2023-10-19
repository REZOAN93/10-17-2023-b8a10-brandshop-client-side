import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ProductDetails = () => {
  const data = useLoaderData();
  const {user}=useContext(AuthContext)
  console.log(user.email)
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


  const handleAddToCart=()=>{
   
  }
  return (
   <div className=" grid gap-3 max-w-7xl mx-auto mb-10">
     <div className="card lg:card-side lg:h-[550px] mt-1 bg-base-100 shadow-xl grid grid-cols-2">
      <figure className=" w-full ">
        <img className=" w-full h-full" src={photoURL} alt="Album" />
      </figure>
      <div className="card-body bg-emerald-200 rounded-r-2xl ">
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
            <div className="flex gap-2"> 
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">XS</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">S</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">M</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">L</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">XL</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">XXL</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">3XL</div>
            <div className="w-12 h-12 bg-emerald-700 text-white  rounded-lg flex justify-center items-center text-lg">4XL</div>
            
            </div>
        </div>
        <div className=" grid gap-3 grid-cols-3 justify-between mt-5">
          <button onSubmit={handleAddToCart} className="btn col-span-2 bg-emerald-800 border-none hover:bg-emerald-900 text-white ">Add To Cart</button>
          <button className=" rounded-lg disabled hover:bg-emerald-700 bg-emerald-700 border-none text-white font-bold text-lg">Price: ${price}</button>
        </div>
      </div>    
    </div>
   </div>
  );
};

export default ProductDetails;
