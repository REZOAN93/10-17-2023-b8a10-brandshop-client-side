import { Link, useNavigate } from "react-router-dom";

const Brands = ({ data }) => {
  const { log, nameBuyer, origin, nickName } = data;
  const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`/brands/${nickName}`)} className=" bg-white relative card shadow-xl flex-col  hover:bg-emerald-100 cursor-pointer">
      <figure className=" h-36 w-full px-2">
        <img src={log} alt="Shoes" className="rounded-xl h-28 w-9/12" />
      </figure>
      <div className=" p-5 flex-grow">
        <h2 className=" text-base font-bold">{nameBuyer}</h2>
        <p>{origin}</p>
      </div>
      <div className="absolute hidden hover:block top-20 left-16"> <p>Details Products</p></div>
      <div>
      
        {/* <Link
          className="w-full btn border-emerald-200 hover:bg-emerald-700 rounded-none rounded-b-lg bg-emerald-200"
          to={`brands/${nickName}`}
        >
          Details Products
        </Link> */}
      </div>
    </div>
  );
};

export default Brands;
