import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";


const SignIn = () => {
  const { signInWithEmail, signInWithGoogle, SignInWithGit } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleLogInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "You have successfully LogIn",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signInWithGoogle(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleGithubLogin = (event) => {
    event.preventDefault();
    SignInWithGit(gitProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div id="loginContainer" className="card lg:shadow-2xl my-5 lg:w-4/12 mx-auto px-10 py-8">
      <h1 className="font-bold text-3xl text-center">Log In</h1>
      <form onSubmit={handleLogInUser} className=" space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p>
              <input type="checkbox" name="remember me" id="" />
              <span className="ms-3">Remember Me</span>
            </p>
          </label>
          <span
            onClick={() => setshowPassword(!showPassword)}
            className=" cursor-pointer absolute right-5 top-12 text-2xl"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="form-control mt-2">
          {error ? (
            <>
              <p className=" text-red-600 text-sm text-center">{error}</p>
            </>
          ) : (
            ""
          )}
          <button className="btn capitalize bg-emerald-800 hover:bg-green-900 text-xl text-white">
            Login
          </button>
          <a
            href="#"
            className="label-text-alt link link-hover mt-2 pe-3 text-end underline-offset-4"
          >
            Forgot password?
          </a>
        </div>
      </form>
      <div className=" flex items-center gap-4 mb-2 px-10">
        <hr className="w-6/12" />
        <span className=" font-bold text-basicColor">Or</span>
        <hr className="w-6/12" />
      </div>
      <div className="px-10  items-center mb-5">
        <p className="font-bold text-basicColor text-center">Continue with</p>
        <div className="flex gap-5 justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-sm capitalize text-base cursor-pointer text-white bg-emerald-800 hover:bg-green-900"
          >
            {" "}
            <span>
              <BsGoogle />
            </span>{" "}
            Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn btn-sm cursor-pointer capitalize text-base text-white bg-emerald-800 hover:bg-green-900"
          >
            {" "}
            <span>
              <BsGithub />
            </span>{" "}
            GitHub
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/register"}>
          Don't have an Account?
          <span className="font-bold text-basicColor ms-2">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
