import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet';
import Announcements from '../../Announcement/Announcements';
import OurPackages from './ourpackages/OurPackages';
import OurVideo from './video/OurVideo';
import ReviewAndPackages from './Tabs/ReviewAndPackages';
import SilderEffect from './Silder/SilderEffect';


const Home = () => {
    
    return (
        <>
            <Helmet>
                <title>
                    Travel | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <OurPackages></OurPackages>
            <OurVideo></OurVideo>
            <Announcements />
            {/* <OurReview></OurReview> */}
            {/* <OurGuides></OurGuides> */}
            <ReviewAndPackages></ReviewAndPackages>
            <SilderEffect></SilderEffect>
        </>
    );
};

export default Home;