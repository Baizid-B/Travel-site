import useGuide from "../../../Hook/useGuide/useGuide";
import OurGuidesItem from "./OurGuidesItem";

const OurGuides = () => {
    const [ guide ] = useGuide()
    const rating = guide.filter(item => item.ratings.totalReviews > 180).sort((a,b) => b.ratings.totalReviews - a.ratings.totalReviews)
    return (
        <>
            <div className="mt-20 mb-20">
                <h1 className="text-center text-4xl ">Meet Our Guides</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 overflow-hidden">
                {
                    rating.map(guides => <OurGuidesItem key={guides.id} guides={guides}></OurGuidesItem>)
                }
            </div>
        </>
    );
};

export default OurGuides;