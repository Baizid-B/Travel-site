import { Helmet } from "react-helmet";
import useGuide from "../../Hook/useGuide/useGuide";
import AllGuidesCss from "./AllGuidesCss";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Lottie/Main Scene.json";

const AllGuides = () => {
    const [guide,loading] = useGuide();

    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <Lottie 
                animationData={groovyWalkAnimation} 
                className=""
            />
        </div>
    }

    return (
            <>
                <div>
                    <Helmet>
                        <title> Travel | Our Guides</title>
                    </Helmet>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 overflow-hidden my-10">
                    {
                        guide.map(guides => <AllGuidesCss key={guides.id} guides={guides}></AllGuidesCss>)
                    }
                </div>
            </>

    );
};

export default AllGuides;