// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import loginVideo from "../../assets/video/tangur.mp4"
// import Social from "../../shared/Social/Social";
// import { Helmet } from "react-helmet";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
// import { FaEye, FaEyeSlash } from "react-icons/fa";


// const Login = () => {
//     const {loginUser,passwordReset} = useContext(AuthContext)
//     const novigate = useNavigate()
//     const loaction = useLocation()
//     const from = loaction.state?.from?.pathname || '/'

//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = (e) =>{
//         e.preventDefault()
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email,password)

//         loginUser(email,password)
//         .then(result =>{
//             const userLogin = result.user;
//             console.log(userLogin);
//             Swal.fire({
//                 position: "top-center",
//                 icon: "success",
//                 title: "Successfully Login",
//                 showConfirmButton: false,
//                 timer: 1500
//             });

//             novigate(from, {replace: true})
//         })
//     }
//     return (
//         <div className="relative w-full h-screen">
//             <Helmet>
//                 <title>Travel | Login</title>
//             </Helmet>

//             <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src={loginVideo}
//                 autoPlay
//                 loop
//                 muted
//             />

//             {/* Overlay */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

//             {/* Login Form */}
//             <div className="absolute
//                 top-[10%]
//                 md:top-[18%] md:left-[10%]
//                 lg:top-[15%] lg:left-[32%]
//                 w-full max-w-screen-sm">
//                 <form onSubmit={handleLogin} className="card-body">
//                     {/* name field */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text text-white font-semibold">Email</span>
//                         </label>
//                         <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>

//                     {/* password field */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text text-white font-semibold">Password</span>
//                         </label>

//                         <div className="relative">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 name="password"
//                                 placeholder="password"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute right-5 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
//                                 >
//                                 {showPassword ? (<FaEyeSlash />) : (<FaEye />)}
//                             </button>
//                         </div>

//                         <label className="label">
//                             <NavLink to='/forgetPassword' className="label-text-alt link link-hover text-white font-semibold">
//                             Forgot password?
//                             </NavLink>
//                             {/* <ForgetPassword></ForgetPassword> */}
//                         </label>
//                     </div>

//                     {/* submite form */}
//                     <div className="form-control mt-6">
//                         <button className="btn bg-sky-500 border-0 text-white hover:text-black font-semibold text-lg">Login</button>
//                     </div>

//                 </form>

//                 <div className="text-white font-semibold card-body p-0 text-center">
//                     <h1 className="flex flex-row items-center gap-2 mx-auto">New Here? <Link to = "/register"><h1>Create a New Account</h1></Link> </h1>
//                     <p className="">Or sign up with</p>
//                     <div className="my-4 mx-auto">
//                         <Social></Social>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Login;





import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import loginVideo from "../../assets/video/tangur.mp4";
import Social from "../../shared/Social/Social";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const userLogin = result.user;
        console.log(userLogin);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Helmet>
        <title>Travel | Login</title>
      </Helmet>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={loginVideo}
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Centered Login Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-sky-500 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleLogin} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <label className="label">
                <NavLink
                  to="/forgetPassword"
                  className="label-text-alt link link-hover text-white font-semibold"
                >
                  Forgot password?
                </NavLink>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn bg-sky-500 border-0 text-white hover:text-black font-semibold text-lg">
                Login
              </button>
            </div>
          </form>

          {/* Social & Register */}
          <div className="text-white font-semibold card-body p-0 text-center">
            <h1 className="flex flex-row items-center gap-2 mx-auto">
              New Here?{" "}
              <Link to="/register">
                <h1 className="underline">Create a New Account</h1>
              </Link>
            </h1>
            <p className="my-2">Or sign up with</p>
            <div className="my-4 mx-auto">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
