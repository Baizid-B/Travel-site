import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SilderEffect = () => {
    const slides = [
    {
      title: "Make A Statement Wherever You Go...",
      desc: "Accessories that embody elegance, power, and personal expression - meticulously crafted with lab-diamonds, to make you stand out from the crowd.",
      btn: "Discover collections",
      img: "/images/slide1.jpg",
    },
    {
      title: "Luxury Redefined",
      desc: "High-quality timepieces that reflect your personality and taste.",
      btn: "Shop now",
      img: "/images/slide2.jpg",
    },
    {
      title: "Style Meets Precision",
      desc: "Where craftsmanship meets modern design.",
      btn: "Explore",
      img: "/images/slide3.jpg",
    },
  ];


  return (
     <div className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              {slides[0].title}
            </h1>
            <p className="text-gray-300 mb-6">{slides[0].desc}</p>
            <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 transition">
              {slides[0].btn}
            </button>
          </div>

          {/* Right Slider */}
          <Swiper
            modules={[Pagination]}
            slidesPerView={2.5}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SilderEffect;