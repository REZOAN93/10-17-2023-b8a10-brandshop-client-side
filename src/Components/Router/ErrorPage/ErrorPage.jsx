import { Link, useRouteError } from "react-router-dom";
import img1 from '../../../assets/404/404.gif'

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="text-center grid items-center justify-center my-3">
      <img className=" h-96" src={img1} alt="" />
      <p className=" text-red-800 font-bold ">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className=" btn btn-outline mt-10 bg-emerald-800 hover:bg-emerald-950 text-white font-bold text-2xl">Back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
