import React from "react";
import imgc1 from "../../assets/home-2.jpg";
import imgc2 from "../../assets/home-3.jpg";
import imgc3 from "../../assets/home-4.jpg";

const Collection = () => {
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-7 my-10 justify-between">
      <div>
        <img src={imgc1} alt="" />
        <div className=" text-center mt-3  space-y-2">
          <h1 className=" text-xl font-bold">Linen Collection</h1>
          <p className=" text-gray-600">
            Explore our Summer organic linen collection.
          </p>
        </div>
      </div>
      <div>
        <img src={imgc2} alt="" />
        <div className=" text-center mt-3 space-y-2">
          <h1 className=" text-xl font-bold">Online Exclusive</h1>
          <p className=" text-gray-600">
            Discover our collection that is not available in physical stores.
          </p>
        </div>
      </div>
      <div>
        <img src={imgc3} alt="" />
        <div className=" text-center mt-3 space-y-2">
          <h1 className=" text-xl font-bold">Premium Selection</h1>
          <p className=" text-gray-600">
            Our hand-piked selection of premium pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
