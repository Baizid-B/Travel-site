// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import OurGuides from '../Our Guides/OurGuides';
// import OurReview from '../Our Review/OurReview';


// const ReviewAndPackages = () => {
//     return (
//         <>
//             <Tabs>
//                 <div className=''>
//                     <TabList className='p-0 flex justify-center items-center gap-8'>
//                         <Tab className='p-4 rounded-none border bg-red-600'>Our Review</Tab>
//                         <Tab className='p-4 rounded-none border bg-blue-500'>Our Guides</Tab>
//                     </TabList>
//                 </div>

//                 <TabPanel>
//                     <OurReview></OurReview>
//                 </TabPanel>

//                 <TabPanel>
//                     <OurGuides></OurGuides>
//                 </TabPanel>
//             </Tabs>
//         </>
//     );
// };

// export default ReviewAndPackages;

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
                        className="py-2 px-4 shadow-md border"
                        selectedClassName="bg-blue-600 text-white"
                        onFocus={`border-none`}
                    >
                        Our Review
                    </Tab>
                    <Tab
                        className="py-2 px-4 shadow-md border"
                        selectedClassName="bg-blue-600 text-white"
                        onFocus={`border-none`}
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
