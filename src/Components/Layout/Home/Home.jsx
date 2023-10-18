import { Link, NavLink, useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import { AiOutlineBars } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Collection from "../../Collection/Collection";
import Support from "../../Support/Support";
import Newsletter from "../../Newsletter/Newsletter";
import Brands from "../../Brands/Brands";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <div className=" border-t-2 border-b-2 mb-10">
        <div className="w-full grid grid-cols-3 max-w-7xl mx-auto">
          <div className=" border-r-2 py-2">
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className=" m-1 flex items-center gap-2 text-xl"
              >
                <AiOutlineBars />
                SHOP BY CATEGORIES
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>New Arrivals</Link>
                </li>
                <li>
                  <Link>Women's Clothing</Link>
                </li>
                <li>
                  <Link>Men's Clothing</Link>
                </li>
                <li>
                  <Link>Kids Collection</Link>
                </li>
                <li>
                  <Link>Shoes & Accessories</Link>
                </li>
                <li>
                  <Link>Best Sellers</Link>
                </li>
                <li>
                  <Link>Promotion</Link>
                </li>
                <li>
                  <Link>Back in Stock</Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="col-span-2 grid grid-cols-4 py-2 gap-2">
            <button className=" bg-basicColor py-2 text-red-800">
              Summar Sale Discount
            </button>
            <Marquee className=" col-span-3" pauseOnHover={true} speed={100}>
              <Link className="mr-8" to={"/"}>
                Get 20% off on all Adidas products. Hurry, limited time
                offer!...
              </Link>
              <Link className="mr-8" to={"/"}>
                Exclusive 15% discount on Nike items. Shop now and save big!....
              </Link>
              <Link className="mr-8" to={"/"}>
                Flash sale! Enjoy a 25% discount on all Lululemon products.
                Limited stock!....
              </Link>
              <Link className="mr-8" to={"/"}>
                Weekend special: 18% off on Eddie Bauer merchandise. Grab your
                favorites today!....
              </Link>
              <Link className="mr-8" to={"/"}>
                Super savings alert! 30% discount on all H&M items. Don't miss
                out!...
              </Link>
            </Marquee>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <div className=" max-w-7xl mx-auto border my-10">
        {brands.map((na) => (
          <Brands key={na._id} data={na}></Brands>
        ))}
      </div>
      <Brands></Brands>
      <Collection></Collection>
      <Newsletter></Newsletter>
      <Support></Support>
      <Footer></Footer>
    </div>
  );
};

export default Home;
