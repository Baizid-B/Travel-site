import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurGuides from '../Our Guides/OurGuides';
import OurReview from '../Our Review/OurReview';

const ReviewAndPackages = () => {
    return (
        <Tabs>
            <div>
                <TabList className="p-0 flex justify-center items-center gap-8">
                    <Tab
                        className="py-2 px-4 shadow-md border focus:outline-none"
                        selectedClassName="bg-blue-600 text-white"
                    >
                        Our Review
                    </Tab>
                    <Tab
                        className="py-2 px-4 shadow-md border focus:outline-none"
                        selectedClassName="bg-blue-600 text-white"
                    >
                        Our Guides
                    </Tab>
                </TabList>
            </div>

            <TabPanel>
                <OurReview />
            </TabPanel>

            <TabPanel>
                <OurGuides />
            </TabPanel>
        </Tabs>
    );
};

export default ReviewAndPackages;
