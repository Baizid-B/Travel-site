import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurGuides from '../Our Guides/OurGuides';
import OurPackages from '../ourpackages/OurPackages';


const ReviewAndPackages = () => {
    return (
        <Tabs>
            <div>
                <TabList className="p-0 flex justify-center items-center gap-3 cursor-pointer">
                    <Tab
                        className="py-2 px-4 shadow-md border focus:outline-none"
                        selectedClassName="bg-blue-600 text-white"
                    >
                        Our Packages
                    </Tab>
                    <Tab
                        className="py-2 px-4 shadow-md border focus:outline-none"
                        selectedClassName="bg-blue-600 text-white"
                    >
                        Meet Our Tour Guides
                    </Tab>
                </TabList>
            </div>

            <TabPanel>
                {/* <OurReview /> */}
                <OurPackages></OurPackages>
            </TabPanel>

            <TabPanel>
                <OurGuides />
            </TabPanel>
        </Tabs>
    );
};

export default ReviewAndPackages;
