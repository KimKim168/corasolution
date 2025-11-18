import { useEffect, useState, useRef } from "react";

const slides = [
  {
    title: "Innovative Mobile App Solutions",
    desc: "Transform your ideas into engaging and high-performance mobile applications. Our team delivers custom-built apps with intuitive design and seamless functionality across platforms.",
    image: "https://www.corasolution.com/assets/images/slides/1728541675wS9a1Z4UyD.png",
  },
  {
    title: "Cloud Hosting Solutions",
    desc: "Scale your business with ease using our cloud hosting solutions. Our services provide flexibility, speed, and security, ensuring your website can handle growing traffic and data demands.",
    image: "https://www.corasolution.com/assets/images/slides/17285417726jm4LpFYvx.png",
  },
];

export default function SlideCorasoft() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => resetTimeout();
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center bg-center bg-cover relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 px-6 lg:px-20 max-w-[600px] max-h-[600px] text-white">
              <h2 className="text-[12px] sm:text-xl md:text-xl lg:text-5xl font-costum1 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <p className="text-[8px] sm:text-sm md:text-sm lg:text-lg mt-3 line-clamp-5 max-w-[60ch]">
                {slide.desc}
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-3 py-2 md:px-5 md:py-3 text-[8px] sm:text-sm md:text-lg border border-white rounded-md hover:bg-white hover:text-black transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
