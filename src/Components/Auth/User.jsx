import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const user = useLoaderData();
  const [restUsers, setrestUser] = useState(user);
  const handleDeleteUser = (id) => {
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
          `https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/users/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = restUsers.filter((na) => na._id !== id);
              setrestUser(remaining);
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
              <th className="hidden md:block lg:block">Name</th>
              <th >Email</th>
              <th className="hidden md:block lg:block">Creation Date</th>
              <th className="hidden md:block lg:block">LastLogin Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restUsers.map((na) => (
              <>
                <tr>
                  <th className="hidden md:block lg:block">{na.name}</th>
                  <td>{na.email}</td>
                  <td className="hidden md:block lg:block">{na.userCreationTime}</td>
                  <td className="hidden md:block lg:block">{na.LastLogInTime}</td>
                  <td
                    onClick={() => handleDeleteUser(na._id)}
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

export default Users;
