import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photoURL = form.photoURL.value;
    const singleProduct = {
      name,
      price,
      brand,
      type,
      description,
      photoURL,
      rating,
    };
    fetch(
      "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/addProducts",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(singleProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Product is added Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  const [selectedProduct, setSelectedProduct] = useState("");
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };
  const productTypes = [
    { value: "Jacket", label: "Jacket" },
    { value: "Pant", label: "Pant" },
    { value: "Tshirt", label: "Tshirt" },
    { value: "Trouser", label: "Trouser" },
    { value: "Vest", label: "Vest" },
    { value: "Shoes", label: "Shoes" },
    { value: "Others", label: "Others" },
  ];
  // { value: "Lululemon", label: "Lululemon" },
  const optionsArray = [
    { value: "Adidas", label: "Adidas" },
    { value: "Arcteryx", label: "Arcteryx" },
    { value: "CK", label: "CK" },
    { value: "H&M", label: "H&M" },
    { value: "LLBean", label: "LLBean" },
    { value: "Mammut", label: "Mammut" },
    { value: "Nike", label: "Nike" },
    { value: "TNF", label: "TNF" },
    { value: "Solomon", label: "Solomon" },
    { value: "Tommy", label: "Tommy" },
    { value: "USPA", label: "USPA" },
    { value: "Others", label: "Others" },
  ];
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const [selectedRating, setSelectedRating] = useState("");

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div>
      <div className="bg-hero-pattern">
        <div className=" max-w-6xl mx-auto py-5 space-y-3">
          <div id="productContainer" className=" rounded-lg py-8">
            <div className=" px-10 pb-2 space-y-4">
              <h1 className="font-titleFont text-3xl text-center font-extrabold saturate-200">
                Add New Products
              </h1>
            </div>
            <div className="px-10">
              <form onSubmit={handleAddProduct} className=" space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <div className="join">
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered join-item w-full"
                        placeholder="Enter Product name"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <div className="join">
                      <input
                        type="number"
                        name="price"
                        className="input input-bordered join-item w-full"
                        placeholder="Enter Product Price"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <div className="join">
                      <select
                        name="brand"
                        id="brand"
                        className="select select-bordered w-full"
                        value={selectedBrand}
                        onChange={handleBrandChange}
                      >
                        <option value="" disabled>
                          Select Brand Name
                        </option>
                        {optionsArray.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Type</span>
                    </label>
                    <div className="join">
                      <select
                        id="type"
                        name="type"
                        className="select select-bordered w-full"
                        value={selectedProduct} // Controlled component: value set to the state
                        onChange={handleProductChange} // Call the handler when the selection changes
                      >
                        <option value="" disabled>
                          Select Product Name
                        </option>
                        {productTypes.map((productType) => (
                          <option
                            key={productType.value}
                            value={productType.value}
                          >
                            {productType.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Short description</span>
                    </label>
                    <div className="join">
                      <input
                        type="text"
                        name="description"
                        className="input input-bordered join-item w-full"
                        placeholder="Enter Short description"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <div className="join">
                      <select
                        id="rating"
                        name="rating"
                        className="select select-bordered w-full"
                        value={selectedRating}
                        onChange={handleRatingChange}
                      >
                        <option value="" disabled>
                          Select Rating
                        </option>
                        {[...Array(10)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <div className="join">
                    <input
                      name="photoURL"
                      className="input input-bordered join-item w-full"
                      type="url"
                      placeholder="Enter photo URL"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <input
                    className=" bg-emerald-700 w-full text-white text-2xl cursor-pointer hover:bg-emerald-800 mt-5 p-2 rounded-lg font-titleFont font-bold text-bgBtn"
                    type="submit"
                    value="Add Product"
                  />
                </div>
              </form>
            </div>
          </div>
          <Link
            className="font-titleFont flex gap-3 justify-end drop-shadow-md font-bold lg:text-2xl"
            to={"/"}
          >
            {" "}
            <span className=" font-extrabold">
              <BsArrowLeft />
            </span>{" "}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
