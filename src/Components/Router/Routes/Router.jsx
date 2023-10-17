import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../Layout/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);