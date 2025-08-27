import { Rating } from '@smastrom/react-rating';
// import '../../Home/OurGuides/OurGuides.css';

import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const OurGuidesItem = ({ guides }) => {
  const {
    name,
    gender,
    profileImage,
    age,
    experienceYears,
    ratings,
    serviceLocations,
    licenseNumber,
    specialties,
    languages,
    contact,
    bio
  } = guides;

  return (

    <div className="card card-compact bg-sky-400 md:w-5/6 mx-auto mb-10 shadow-xl overflow-hidden">
        <div>
            <figure className='relative'>
                <img
                className='overflow-hidden duration-500 hover:scale-110'
                src={profileImage}
                alt={name} />
            </figure>

            <p className='absolute 
             top-2
             left-2
             uppercase
           text-white
             font-bold 
             w-1/3 
           bg-red-600
             px-4
             py-1 
             rounded-xl'>Best Guide</p>

        </div>

        <div className="card-body text-black bg-[#d1d5db]">
            {/* Rating */}
            <div className="flex justify-center ">
              <Rating
                style={{ maxWidth: 80 }}
                value={ratings.averageRating}
                readOnly
              />
            </div>

            {/* Name and Gender */}
            <div className="flex flex-row items-center justify-between mb-3 text-black">
              <h1 className="font-semibold text-lg">{name}</h1>
              <h1 className="text-sm md:text-base">{gender}</h1>
            </div>

            {/* Age and Experience */}
            <div className="flex flex-row items-center !justify-between  text-black">
              <p className="text-sm">Age: {age}</p>
              <p className="text-sm">Experience: {experienceYears} yrs</p>
            </div>
            <p>{bio}</p>


            {/* languages */}
            <div>
                <p className='text-black font-semibold'>Languages: </p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {
                        languages.map((language, index) => (
                        <li key={language.id} className="bg-gray-200 text-black py-1 px-3 rounded-full text-sm">
                            {language}
                            {index < languages.length - 1 && ','}
                        </li>))
                    }
                </ul>
            </div>


            {/* Service Locations */}
            <div className="mb-2">
              <p className="text-black font-semibold">Service Locations:</p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {serviceLocations.map((location, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-black py-1 px-3 rounded-full text-sm"
                  >
                    {location}
                    {index < serviceLocations.length - 1 && ','}
                  </li>
                ))}
              </ul>
            </div>

            {/* specialties */}
            <div>
                <p className='text-black font-semibold'> Specialties:</p>
                <ul className='flex flex-wrap gap-2 mt-2'>
                    {
                        specialties.map((special , index) => (
                        <li key={index} className='bg-gray-200 text-black py-1 px-3 rounded-full text-sm'>
                            {special}
                            {index < specialties.length - 1 && ','}
                        </li>))
                    }
                </ul>
            </div>

            {/* licenseNumber */}
            <p className='text-black font my-2 font-semibold'>License Number :{licenseNumber}</p>



            {/* Details Button */}
            <div className="">
              <button className="btn btn-sm border-0 bg-black text-white hover:text-black">
                <Link to='/allguides'> Details</Link>
              </button>
            </div>
        </div>

    </div>
  );
};

export default OurGuidesItem;
