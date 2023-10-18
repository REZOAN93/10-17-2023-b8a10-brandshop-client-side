import { MdOutlineLocalShipping,MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import imglogo from '../../assets/logo.png'

const Support = () => {
  return (
    <div className=" grid grid-cols-4 py-10 gap-10 max-w-7xl mx-auto">
      <div className=" flex items-center py-10 justify-start gap-5">
        <div className=" text-7xl">
          <MdOutlineLocalShipping />
        </div>
        <div className=" space-y-3">
          <h1 className=" text-3xl">Free Shipping</h1>
          <p className=" text-gray-400">Free shipping for orders over $150.</p>
        </div>
      </div>
      <div className=" flex items-center py-10 justify-start gap-5">
        <div className=" text-7xl">
          <BiSupport />
        </div>
        <div className=" space-y-3">
          <h1 className=" text-2xl">Online Support</h1>
          <p className=" text-gray-400">
            Our amazing team stays in touch 24/7.
          </p>
        </div>
      </div>
      <div className=" flex items-center py-10 justify-start gap-5">
        <div className=" text-7xl">
          <MdPayment />
        </div>
        <div className=" space-y-3">
          <h1 className=" text-2xl">Flexible Payment</h1>
          <p className=" text-gray-400">Pay with multiple payment methods.</p>
        </div>
      </div>
      <div className=" flex items-center py-10 justify-start gap-5">
        <div className=" text-7xl">
        <img className=" h-16" src={imglogo} alt="" />
        </div>
        <div className=" space-y-3">
            
          <h1 className=" text-2xl">Money Guarantee</h1>
          <p className=" text-gray-400">Within 30 days for an exchange.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
