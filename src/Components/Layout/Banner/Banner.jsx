import "./Banner.css";

const Banner = () => {
  return (
    <div className=" relative max-w-7xl mx-auto" >
      <div >
        <video
          className="w-full"
          src="https://fashionable.cmsmasters.net/wp-content/uploads/2023/09/fashionable-video.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className=" absolute top-40 w-full mx-auto text-center space-y-5">
        <h1 className=" text-white text-xl">THE CULT CLASSICS SALE</h1>
        <p className=" text-8xl font-bold text-white">15% OFF*</p>
        <button className=" bg-white px-10 py-4 rounded-lg btn">SHOP NOW</button>
        <p className=" hover:bg-red-700 text-white w-fit mx-auto p-2 rounded-lg">*Use code CLASSICS at checkout through 10/4. Exclusions apply.</p>
      </div>
    </div>
  );
};

export default Banner;
