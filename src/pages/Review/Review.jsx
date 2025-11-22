import { Helmet } from "react-helmet";
import OurReview from "../Our Review/OurReview";
import ShareBtn from "../../shared/ShareBtn/ShareBtn";

const Review = () => {

    return (
        <>
            <Helmet>
                <title>Travel | Review</title>
            </Helmet>

            <div className="container mx-auto ">
                <OurReview></OurReview>
            </div>

            <div className="flex justify-end">
                <ShareBtn></ShareBtn>
            </div>
        </>
    );
};

export default Review;