import { Link, NavLink, useNavigate } from "react-router-dom";
import logo1 from "../../../assets/log.png";
import "./Header.css";
import { FcBusinessman } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const navData = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProducts"}>Add Products</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>My Cart</NavLink>
      </li>
      <li>
        {user ? (
          <>
            <div className=" flex gap-7">
            <li>
              <NavLink to={"/users"}>Users</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            </div>
          </>
        ) : (
          ""
        )}
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              id="sidebar"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navData}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className=" h-10 lg:h-14" src={logo1} alt="" />
            <a className=" text-base lg:text-3xl font-titleFont font-extrabold">
              REZOAN
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="sidebar" className="text-xl flex gap-7 font-bold px-1">
            {navData}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <p className="truncate text-base font-bold text-black">
              {user?.displayName}
            </p>
          ) : (
            ""
          )}
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <div className="card-actions">
                      
                      <Link className="btn btn-primary btn-block" to={'/cart'}>View Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <div className="lg:w-12 h-full rounded-full">
                      <img
                        className=" rounded-full h-12"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={() => navigate("/profile")}>
                      <button>Profile</button>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className=" text-4xl">
                <FcBusinessman />
              </div>
            </>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline border-none lg:text-xl hover:bg-emerald-700 capitalize lg:ms-2 "
            >
              SignOut
            </button>
          ) : (
            <>
              <div className="space-x-4 ml-5">
                <Link
                  to={"/signin"}
                  className=" border-none lg:text-lg capitalize lg:ms-1  hover:bg-basicColor"
                >
                  Log In
                </Link>
                <Link
                  to={"/register"}
                  className=" border-none lg:text-lg capitalize  hover:bg-basicColor"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
