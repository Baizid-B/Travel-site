
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { useEffect, useState } from "react";

// // // Review star Rating
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'

// // react icon
// // import { FaQuoteLeft } from "react-icons/fa";


// const OurReview = () => {
//     const [review , setReview] = useState([])

//     useEffect(() => {
//         fetch('reviews.json')
//             .then(res => res.json())
//             .then(data => {
//                 setReview(data)
//             })
//     },[])

//     return (
//         <div className='px-10 my-16'>
//             <div className='mt-20 mb-20'>
//                 <h1 className='text-4xl text-center'>Our Review</h1>
//             </div>

//             <>
//             <Swiper navigation={true}
//                 slidesPerView={2}
//                 spaceBetween={0}
//                 loop={true} modules={[Navigation]}
//                 className="mySwiper">
//                 {
//                     review.map(reviews => <SwiperSlide
//                         key={reviews._id}
//                         reviews={reviews}
//                     >
//                         <div className='mt-20 flex flex-col items-center justify-center text-center gap-15'>
                            
//                             <div className='relative mb-4'>
//                                 <img className='h-32 md:h-52 lg:h-72' src={reviews.photo} alt="reviewer photo" />
//                                 <p className='absolute top-4 left-2  bg-blue-400 px-3 rounded-xl text-white font-semibold'>{reviews.name}</p>   
//                             </div>

//                             <div>
//                                 <p className=''>{reviews.description}</p>
//                                 <Rating className='mx-auto' style={{ maxWidth: 100 }} value={reviews.rating} readOnly />
//                                 <span> {reviews.rating}/5</span>
//                             </div>
                            
//                         </div>
//                     </SwiperSlide>)
//                 }
                
//             </Swiper>
//             </>

//         </div>
//     );
// };

// export default OurReview;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

// Review star Rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const OurReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <div className='px-10 my-16'>
            <div className='mt-20 mb-20'>
                <h1 className='text-4xl text-center'>Our Review</h1>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },   // mobile
                    640: { slidesPerView: 2 },   // tablet
                    1024: { slidesPerView: 3 },  // desktop
                }}
                className="mySwiper"
            >
                <div className='bg-red-300'>
                    {review.map((reviews) => (
                    <SwiperSlide key={reviews._id}>
                        <div className='mt-10 flex flex-col items-center justify-center text-center gap-5 bg-red-300'>
                            <div className='relative overflow-hidden w-full h-72 mb-4'>
                                <img className='w-full h-full object-cover object-[center_20%]' src={reviews.photo} alt="reviewer photo" />
                                <p className='absolute top-4 left-2 bg-blue-400 px-3 rounded-xl text-white font-semibold'>
                                    {reviews.name}
                                </p>
                            </div>

                            <div>
                                <p>{reviews.description}</p>
                                <Rating
                                    className='mx-auto'
                                    style={{ maxWidth: 100 }}
                                    value={reviews.rating}
                                    readOnly
                                />
                                <span> {reviews.rating}/5</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </div>
            </Swiper>
        </div>
    );
};

export default OurReview;
