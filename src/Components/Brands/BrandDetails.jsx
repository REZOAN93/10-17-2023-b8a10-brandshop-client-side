import { FiDollarSign, FiBookOpen } from "react-icons/fi";
const BrandDetails = ({ data }) => {
  const { brand, name, type, price, description, photoURL, rating } = data;

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
          <p className="flex items-center gap-2">
            {" "}
            <span style={{ color: "rgba(28, 27, 27, 1)" }}></span> Rating:{" "}
            {rating}
          </p>
        </div>
        <div className=" flex w-full gap-4">
          <button
            //   onClick={() => handleEnrollCourse(course)}
            id="btnSelect"
            className="btn btn-sm py-2 rounded-lg hover:bg-emerald-900 bg-emerald-800 text-white font-semibold "
          >
            Details
          </button>
          <button
            //   onClick={() => handleEnrollCourse(course)}
            id="btnSelect"
            className="btn btn-sm py-2 rounded-lg hover:bg-emerald-900 bg-emerald-800 text-white font-semibold "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
