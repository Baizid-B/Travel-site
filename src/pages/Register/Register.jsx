import { useForm } from "react-hook-form";
import registerVideo from "../../assets/video/tangur.mp4"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../shared/Social/Social";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash} from "react-icons/fa";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () =>{
        setShowPassword(!showPassword)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully Registration",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, {replace: true})
        })
        
    }
    
    return (
        <div>
            <Helmet>
                <title>Travel | Login</title>
            </Helmet>

            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={registerVideo}
                autoPlay
                loop
                muted
            />

            {/* overloy */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Register Form */}

            <div className="absolute
                bg-transparent top-[5%]
                left-[22%] md:top-[10%]
                md:left-[27%] lg:top-[-3%]
                lg:left-[35%] card md:w-1/2
                max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* Name field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-tex text-white ">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600 font-bold">Name is required.*</span>}
                    </div>

                    {/* Email field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600 font-bold">Email is required.*</span>}
                    </div>

                    {/* Password field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>

                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} {...register("password", 
                            { required: true,
                            minLength:6 ,
                            maxLength: 20,
                            pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                            })} placeholder="password" className="input input-bordered w-full" />
                                
                            <button onClick={togglePasswordVisibility} className="absolute top-4 right-4">
                                {
                                    showPassword ? (<FaEyeSlash />) : (<FaEye />)
                                }
                            </button>
                        </div>

                        {errors.password?.type === 'required' && <span className="text-red-600 font-bold">Password is required.*</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold">Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-red-600 font-bold">Password must be less 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold">Password must have  one Uppercase one lowercase , one number and one special characters</span>}
                    </div>

                     {/* image field */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-tex text-white ">Photo URL</span>
                        </label>
                        <input type="file" {...register("photoUrl", { required: true})} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.photoUrl && <span className="text-red-600 font-bold">Photo URL is required.*</span>}
                    </div>
                    
                    {/* submit field */}
                    <div className="form-control w-full mt-2">
                        <input className="btn bg-sky-500 text-white hover:text-black border-0" type="submit" value="Sign up" />
                    </div>

                </form>

                <div className="text-center">
                    <p className="font-semibold text-white">Already registered?  
                        <Link className="font-bold" to='/login'> Go to log in</Link>
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