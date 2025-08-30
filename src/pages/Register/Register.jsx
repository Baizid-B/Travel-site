import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../shared/Social/Social";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registerVideo from "../../assets/video/tangur.mp4"; // video import

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);

      // updateProfiles

      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        console.log("user profile info updated");

          reset();
          Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Registration",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      });
        
      })
      .catch(errors => console.log(errors))

  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Helmet>
        <title>Travel | Register </title>
      </Helmet>

      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={registerVideo}
        autoPlay
        loop
        muted
      />

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* 🔹 Register Box */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-white font-semibold">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600 font-bold">Name is required.*</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-600 font-bold">Email is required.*</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                })}
                placeholder="Enter password"
                className="w-full px-3 py-2 rounded-lg border focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 text-gray-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password?.type === "required" && (
              <span className="text-red-600 font-bold">
                Password is required.*
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600 font-bold">
                Password must be 6 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600 font-bold">
                Password must be less 20 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600 font-bold">
                Password must have one Uppercase, one lowercase, one number and
                one special character
              </span>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-white font-semibold">Photo URL</label>
            <input
              type="input"
              {...register("photoUrl", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.photoUrl && (
              <span className="text-red-600 font-bold">
                Photo URL is required.*
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-lg font-bold hover:bg-sky-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-white">
            Already registered?
            <Link className="font-bold ml-1" to="/login">
              Go to log in
            </Link>
          </p>
          <div className="text-white my-2">
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

