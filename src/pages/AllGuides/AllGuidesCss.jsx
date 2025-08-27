
const AllGuidesCss = ({guides}) => {
    const {
        profileImage,
        name,
        bio,
        specialties,
        experienceYears,
        languages,
        ratings,
        serviceLocations,
        availability,
        contact,
        certifications,
        socialLinks,
        gender,
        age,
        licenseNumber,
      } = guides;
    return (
        <div class="card card-compact max-w-6xl mx-auto bg-gray-300 rounded-lg shadow-md overflow-hidden mb-10">

            <figure>
                <img
                className='overflow-hidden duration-500 hover:scale-110'
                src={profileImage}
                alt={name} />
            </figure>

            <div class="p-6 card-body">
                <h2 class="text-2xl font-semibold text-gray-800">{name}</h2>

                <p class="text-gray-600 text-base mt-2">
                <strong>Bio:</strong> {bio}
                </p>

                {/* <p class="text-gray-800 mt-4">
                <strong>Specialties:</strong>
                </p> */}

                <div className="flex flex-row items-center gap-2">
                    <strong>Specialties:</strong>
                    <ul className="flex gap-1">
                        {
                          specialties.map((specialtie,index) =>(
                          <p class="text-gray-800 text-sm">
                            {specialtie}
                            { index < specialtie.length - 1 && ', '}
                          </p>))  
                        }
                    </ul>
                </div>

                <p class="text-gray-800">
                <strong>Experience:</strong> {experienceYears} Yrs
                </p>

                {/* <p class="text-gray-800">
                <strong>Languages:</strong> Bengali, English, Hindi
                </p> */}

                <div className="flex flex-row items-center gap-2">
                    <strong>languages:</strong>
                    <ul className="flex gap-1">
                        {
                          languages.map((language,index) =>(
                          <p class="text-gray-800">
                            {language}
                            { index < language.length - 1 && ', '}
                          </p>))  
                        }
                    </ul>
                </div>

                <p class="text-gray-800">
                <strong>Ratings:</strong> ⭐ {ratings.averageRating} ( {ratings.totalReviews} Reviews )
                </p>

                {/* <p class="text-gray-800">
                <strong>Service Locations:</strong> Dhaka, Sundarbans, Cox's Bazar
                </p> */}
                <div className="flex flex-row items-center gap-2">
                    <strong>service Locations:</strong>
                    <ul className="flex gap-1">
                        {
                          serviceLocations.map((serviceLocation,index) =>(
                          <p class="text-gray-800">
                            {serviceLocation}
                            { index < serviceLocation.length - 1 && ', '}
                          </p>))  
                        }
                    </ul>
                </div>

                <p class="text-gray-800">
                <strong>Working Hours:</strong> {availability.workingHours.start} AM - {availability.workingHours.end} PM
                </p>
                
                <p class="text-red-500">
                <strong>Days Off:</strong> {availability.daysOff}
                </p>

                <p class="text-gray-800 text-sm tracking-wide">
                <strong>Contact:</strong> {contact.phone} | {contact.email}
                </p>

                {/* <p class="text-gray-800">
                <strong>Certifications:</strong> Certification
                </p>
                <ul class="list-disc pl-6 text-gray-600">
                    {/* {
                        certifications.map((certification,index) =>(
                        <li key={certification}>
                            {certification}
                        </li>))
                    } 
                </ul> */}
                <div class="flex items-center">
                    <a
                        href={socialLinks.facebook}
                        target="_blank"
                        class="text-blue-600 hover:underline"
                    >
                        Facebook
                    </a>
                    <span class="mx-2">|</span>
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        class="text-pink-600 hover:underline"
                    >
                        Instagram
                    </a>

                </div>
            </div>
        </div>

    );
};

export default AllGuidesCss;