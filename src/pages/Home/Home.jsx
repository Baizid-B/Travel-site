import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet';
import Announcements from '../../Announcement/Announcements';
import OurPackages from './ourpackages/OurPackages';
import OurVideo from './video/OurVideo';
import ReviewAndPackages from './Tabs/ReviewAndPackages';



const Home = () => {
    
    return (
        <>
            <Helmet>
                <title>
                    Travel | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <OurVideo></OurVideo>
            <ReviewAndPackages></ReviewAndPackages>

        </>
    );
};

export default Home;