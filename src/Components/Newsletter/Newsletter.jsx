import { Link } from "react-router-dom";
import imgNews from "../../assets/home.jpg";

const Newsletter = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <img src={imgNews} alt="" />
      </div>
      <div className=" grid grid-cols-2 text-white">
        <div className=" bg-gray-800 p-20 space-y-3">
          <h1 className=" text-5xl">Sign up to our newsletter</h1>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="*Email"
                />
              </div>
            </div>
            {/* <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select> */}
            <div className="indicator">
              {/* <span className="indicator-item badge badge-secondary">new</span> */}
              <button className="btn join-item">Subscribe</button>
            </div>
          </div>
        </div>
        <div className=" bg-black text-white p-20 space-y-3">
            <h1 className=" text-5xl">Summer Collection Lookbook</h1>
            <Link className=" bg-white btn text-black">DISCOVER LOOKBOK</Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
