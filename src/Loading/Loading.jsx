
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Lottie/Main Scene.json";

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Lottie 
                animationData={groovyWalkAnimation} 
                className=""
            />
        </div>
    );
};

export default Loading;
