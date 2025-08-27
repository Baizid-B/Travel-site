
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../assets/New folder/Paharpur.webp';
import img2 from '../../../assets/New folder/sodergot.webp';
import img3 from '../../../assets/New folder/sundorbon.webp';
import img4 from '../../../assets/New folder/Kuakata_beach.webp';
import img5 from '../../../assets/New folder/coxss.jpg';
import img6 from '../../../assets/New folder/chabagan.webp';

const Banner = () => {
    const images = [
        { src: img1, caption: "Paharpur Monastery", firstLetter: 'P', title: "aharpur Monastery, also known as Somapura Mahavihara, is a UNESCO World Heritage Site located in Naogaon, Bangladesh. It was one of the largest Buddhist monasteries in South Asia, built during the Pala Dynasty in the 8th century. The site features an impressive terracotta-decorated central stupa surrounded by numerous smaller cells for monks. It served as a major center for Buddhist learning and attracted scholars from around the world. Today, it stands as a testament to the rich cultural and architectural history of ancient Bengal." },
        { src: img2, caption: "Sadar Ghat",firstLetter: 'S', title: `adar Ghat, located on the banks of the Buriganga River in Dhaka, Bangladesh, is one of the busiest river ports in the country. It serves as a hub for passenger ferries, cargo boats, and traditional wooden vessels called "noukas." The vibrant and chaotic atmosphere reflects the daily lives of traders, commuters, and tourists. Historically, it has played a crucial role in Dhaka’s economic and cultural activities. Sadar Ghat offers a glimpse into the dynamic riverside culture of Bangladesh.` },
        { src: img3, caption: "Sundarbans",firstLetter: 'T', title: "he Sundarbans, a UNESCO World Heritage Site, is the largest mangrove forest in the world, located in southern Bangladesh and India. It is home to the iconic Bengal tiger, along with a diverse range of wildlife, including spotted deer, crocodiles, and rare bird species. The unique ecosystem is crisscrossed by tidal waterways, mudflats, and small islands, offering stunning natural beauty. It plays a vital role in protecting coastal areas from cyclones and storm surges. The Sundarbans is a global treasure, renowned for its biodiversity and ecological importance." },
        { src: img4, caption: "Kuakata Beach",firstLetter: 'k', title: `uakata Beach, located in Patuakhali, Bangladesh, is known as the "Daughter of the Sea" for its serene beauty. It is one of the rare places in the world where visitors can enjoy both sunrise and sunset over the Bay of Bengal. The beach stretches for about 18 kilometers, offering breathtaking views and a tranquil atmosphere. Kuakata is also a gateway to explore nearby cultural sites, such as Rakhine villages and Buddhist temples. Its natural charm and peaceful environment make it a popular destination for travelers seeking relaxation.`},
        { src: img5, caption: "Cox's Bazar",firstLetter: 'C', title: `ox's Bazar, located in southeastern Bangladesh, boasts the world's longest uninterrupted natural sandy beach, stretching over 120 kilometers. This picturesque destination is famous for its golden sands, rolling waves, and stunning sunsets over the Bay of Bengal. It attracts both local and international tourists, offering activities like swimming, surfing, and beachside relaxation. Nearby attractions include Himchari National Park, Inani Beach, and the coral-rich Saint Martin's Island. Known as the "Tourism Capital of Bangladesh," Cox's Bazar is a must-visit for its natural beauty and vibrant seaside culture.` },
        { src: img6, caption: "Tea Gardens",firstLetter: 'T', title: `he tea gardens of Sylhet, located in northeastern Bangladesh, are renowned for their lush greenery and rolling hills. Spanning vast areas, these gardens produce high-quality tea that contributes significantly to the country's economy. The region's serene atmosphere, dotted with tea workers plucking leaves, offers a picturesque and tranquil escape for visitors. Iconic spots like Srimangal, known as the "Tea Capital of Bangladesh," are particularly famous for their tea estates and scenic beauty. Sylhet's tea gardens provide a perfect blend of natural charm and cultural richness, attracting nature lovers and tourists alike.` },
    ];

    return (
        <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            stopOnHover
            showThumbs={false} 
            showStatus={false} 
            showArrows={false}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <div className="overflow-hidden h-[450px] md:h-[600px] lg:h-[900px]">
                        <img className="w-[100%] h-[100%]  bg-cover" src={image.src} alt={image.caption} />
                    </div>
                    
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center">
                        <div className="md:max-w-7xl mx-auto mt-14 md:mt-20 lg:mt-48">
                            <div><p className="text-white lg:text-4xl font-bold">{image.caption}</p></div>
                            <div><p className="text-white text-sm md:text-lg font-semi-bold px-4"><span className="text-xl md:text-2xl lg:text-5xl">{image.firstLetter}</span>{image.title}</p></div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
