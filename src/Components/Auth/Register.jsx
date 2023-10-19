import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUserWithEmail, updateUser,signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURl = form.photoURL.value;

    if (password.length < 6) {
      setError("Password must be six characters long or more");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password should contain at least one Special character");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password should contain at least one Capital character");
      return;
    }

    createUserWithEmail(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const userCreationTime = user.metadata.creationTime;
        // ...
        const newUser = { email, name, photoURl, userCreationTime };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Account is Created & Please Log In",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        if (user) {
          // Swal.fire({
          //   position: "top-center",
          //   icon: "success",
          //   title: "Account is Created",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          handleUpdateUser(name, photoURl);
          navigate("/signin");
          form.reset();
          signOutUser()
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    const handleUpdateUser = (name, photo) => {
      const profile = {
        displayName: name,
        photoURL: photo,
      };
      updateUser(profile)
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };
  };
  return (
   <div className="registerfullpage">
     <div
      id="registerContainer"
      className="card lg:shadow-2xl bg-base-100 my-5 lg:w-6/12 mx-auto px-10 py-8"
    >
      <h1 className="font-bold text-3xl mb-5 text-center">
        Create New Account
      </h1>
      <form onSubmit={handleCreateUser} className=" space-y-3">
        <div className="grid lg:grid-cols-3 w-full gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Enter name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            name="photoURL"
            placeholder="Enter the Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <span
            onClick={() => setshowPassword(!showPassword)}
            className=" cursor-pointer absolute right-5 top-12 text-2xl"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <label className="label">
            <p>
              <input type="checkbox" name="remember me" id="" />
              <span className="ms-3 font-bold">
                I agree with{" "}
                <span className="underline underline-offset-2">
                  Terms & Conditions
                </span>
              </span>
            </p>
          </label>
        </div>
        <div className="form-control">
          <button className="btn capitalize bg-emerald-800 hover:bg-green-900 text-xl text-white">
            Register
          </button>
          {error ? (
            <>
              <p className=" text-red-600 text-sm text-center">{error}</p>
            </>
          ) : (
            ""
          )}
        </div>
      </form>
      <div className=" flex items-center gap-4 mt-5 mb-2">
        <hr className="w-full" />
      </div>
      <div className="flex justify-center">
        <Link to={"/signin"}>
          Already have an Account?
          <span className="font-bold text-basicColor ms-2">Log In</span>
        </Link>
      </div>
    </div>
   </div>
  );
};

export default Register;
