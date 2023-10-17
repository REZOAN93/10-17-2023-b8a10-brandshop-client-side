import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="text-center my-20 space-y-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className=" text-red-800 font-bold ">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className=" btn btn-outline">Back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
