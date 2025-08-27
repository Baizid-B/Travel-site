import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Social = () => {
    const novigate = useNavigate()
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        novigate('/')
    }
    

    return (
        <div className="flex flex-row items-center gap-6 justify-center">
            <button onClick={handleGoogle} className="text-3xl"><AiFillGoogleCircle /></button>
            <p className="text-2xl"><FaFacebook /></p>
            <p className="text-2xl"><FaGithub /></p>
        </div>
    );
};

export default Social;