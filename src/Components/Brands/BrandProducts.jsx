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
      {/* <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
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
              src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
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
              src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
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
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
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
      </div> */}
      <div>
        <div>
          <div className=" grid grid-cols-3 max-w-6xl mx-auto gap-4">
            {
                brandData.length>0?<>{brandData.map((na) => (
                    <BrandDetails key={na._id} data={na}></BrandDetails>
                  ))}</>:<><p className=" w-full my-32 text-5xl text-red-700">The Product is comming Soon</p></>
            }
          
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BrandProducts;
