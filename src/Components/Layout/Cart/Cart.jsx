import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const allData = useLoaderData();
  const [thisUserData, setThisUserData] = useState([]);

  useEffect(() => {
    const userDAta = allData.filter((na) => na.emailUser == user.email);
    setThisUserData(userDAta);
  }, [allData, user]);

  //   const [RestData, setRestData] = useState(thisUserData);

  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/UserProductsData/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = thisUserData.filter((na) => na._id !== id);
              console.log(remaining, "REMAINFIN");
              // setRestData(remaining);
              setThisUserData(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-11/12 mx-auto my-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className=" hidden md:block lg:block">Brand Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th className="hidden md:block lg:block">Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {thisUserData.map((na) => (
              <>
                <tr>
                  <th className="hidden md:block lg:block">{na.brand}</th>
                  <td>{na.name}</td>
                  <td>${na.price}.00</td>
                  <td className="hidden md:block lg:block">{na.type}</td>
                  <td
                    onClick={() => handleDeleteData(na._id)}
                    className=" cursor-pointer"
                  >
                    X
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
