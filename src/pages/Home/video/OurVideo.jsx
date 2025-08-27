import React from 'react';
import video1 from '../../../assets/video/tangur.mp4';
import video2 from '../../../assets/video/cox.mp4';

const OurVideo = () => {
    return (
        <>
            <div className='my-20'>
                <div className="text-center text-3xl mb-10 font-bold">
                    <h1 className='border-b-2 w-1/4 mx-auto'>Our Tour Video</h1>
                </div>
                
                <div className='grid md:grid-cols-2'>
                    <video
                        autoPlay
                        loop
                        muted
                    src={video1}
                    className='w-full'
                    ></video>
                    <video
                        autoPlay
                        loop
                        muted
                    src={video2}
                    className='w-full'
                    ></video>
                </div>

            </div>
        </>
    );
};

export default OurVideo;