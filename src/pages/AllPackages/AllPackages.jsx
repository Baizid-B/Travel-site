import { Helmet } from "react-helmet";
import useTourPackages from "../../Hook/TourPackages/useTourPackages";
import PackageItem from "../Home/ourpackages/PackageItem";
import AllPackageitem from "./AllPackageitem";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Lottie/Main Scene.json";


const AllPackages = () => {
    const [packages,loading] = useTourPackages();

    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <Lottie 
                animationData={groovyWalkAnimation} 
                className=""
            />
        </div>
    }
    return (
        <div>
            <div>
                <Helmet>
                    <title>Travel | Our Packages</title>
                </Helmet>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-10 overflow-hidden">
                {
                    packages.map(item => <AllPackageitem key={item._id} item={item}></AllPackageitem>)
                }
            </div>
        </div>
    );
};

export default AllPackages;