import { FiDollarSign, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
const BrandDetails = ({ data }) => {
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

  const mappedRating = Math.min(Math.max(rating, 1), 10); // Ensure rating is between 1 and 10
  const visualRating = Math.ceil(mappedRating / 2); // Map 1-10 scale to 1-5 scale

  return (
    <div>
      <div className="w-full bg-white p-5 space-y-2 flex-col shadow-lg rounded-lg">
        <div className=" h-72 w-full flex justify-center">
          <img className=" h-72 w-full" src={photoURL} alt="" />
        </div>
        <h1 style={{ color: "#1C1B1B" }} className=" text-lg font-semibold">
          {name}
        </h1>
        <div className="flex justify-between border-t-2 border-b-2 text-emerald-800">
          <h1 style={{ color: "#1C1B1B" }} className=" text-base ">
            Brand: {brand}
          </h1>
          <h1 style={{ color: "#1C1B1B" }} className=" text-base">
            Type: {type}
          </h1>
        </div>
        <div className="flex-grow">
          <h1
            style={{ color: "rgba(28, 27, 27, 0.60)" }}
            className="text-justify text-sm font-normal h-14 "
          >
            {description}
          </h1>
        </div>
        <div
          style={{ color: "rgba(28, 27, 27, 0.60)" }}
          className="flex justify-between font-medium text-base"
        >
          <p className="flex items-center gap-2">
            <span style={{ color: "rgba(28, 27, 27, 1)" }}>
              <FiDollarSign></FiDollarSign>
            </span>{" "}
            Price: {price}
          </p>
          {/* <p className="flex items-center gap-2">
            {" "}
            <span style={{ color: "rgba(28, 27, 27, 1)" }}></span> Rating:{" "}
            {rating}
          </p> */}
          <div className="rating flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <input
                key={index}
                type="radio"
                name="rating-2"
                className={`mask mask-star-2 text-yellow-400 ${
                  index < visualRating ? "bg-yellow-400" : "bg-gray-400"
                }`}
              />
            ))}
            {/* <span className="ml-2">{visualRating}</span> */}
          </div>
        </div>

        <div className=" flex w-full gap-4">
          <Link
            to={`/productdetails/${_id}`}
            className="btn btn-sm py-2 rounded-lg hover:bg-emerald-900 bg-emerald-800 text-white font-semibold "
          >
            Details
          </Link>
          <Link
            to={`/productupdate/${_id}`}
            className="btn btn-sm py-2 rounded-lg hover:bg-emerald-900 bg-emerald-800 text-white font-semibold "
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
