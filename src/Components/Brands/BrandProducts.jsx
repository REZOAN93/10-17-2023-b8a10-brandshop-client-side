import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandDetails from "./BrandDetails";

const BrandProducts = () => {
  const brandData = useLoaderData();

  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   console.log(brand)

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:5000/brands`);
  //         const jsonData = await response.json();
  //         const newData= jsonData.find(na=>na.nickName==brand)
  //         setData(newData);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [brand]);

  //   if (loading) {
  //     return <div>Loading...</div>; // You can use loading spinners or other UI elements to indicate loading
  //   }

  return (
    <div>
      <div>
        <div className="carousel h-[500px] w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/jz9QnNv/ian-dooley-TT-ROx-Wj9n-A-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/zx0z5Y3/burgess-milner-OYYE4g-I5-ZQ-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Wt3nYQT/xiaolong-wong-pdx1-LH-TMJM-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/NWzKVZ1/brooke-cagle-z1-B9f48-F5dc-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto">
        <h1 className=" text-3xl underline underline-offset-2 font-titleFont font-bold py-10">Product List:</h1>
          <div className=" grid grid-cols-3 mb-10  gap-4">
            {
                brandData.length>0?<>{brandData.map((na) => (
                    <BrandDetails key={na._id} data={na}></BrandDetails>
                  ))}</>:<><p className=" w-full rounded-lg text-5xl text-red-700 bg-red-300 p-20">The Product is comming Soon</p></>
            }
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BrandProducts;
