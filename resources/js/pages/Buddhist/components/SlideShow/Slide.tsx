import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const Slide: React.FC = () => {
    const slides = [
        {
            id: 1,
            title: "Innovative Mobile App Solutions",
            short_description:
                "Transform your ideas into engaging and high-performance mobile applications. Our team delivers custom-built apps with intuitive design and seamless functionality across platforms.",
            image: "slide1.png",
            link: "https://example.com/1",
        },
        {
            id: 2,
            title: "Cloud Hosting Solutions",
            short_description:
                "Scale your business with ease using our cloud hosting solutions. Our services provide flexibility, speed, and security, ensuring your website can handle growing traffic and data demands.",
            image: "slide2.png",
            link: "https://example.com/2",
        },
    ];

    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        const updateCurrent = () => setCurrent(api.selectedScrollSnap());

        updateCurrent();
        setCount(api.scrollSnapList().length);

        api.on("select", updateCurrent);
        return () => api.off("select", updateCurrent);
    }, [api]);

    return (
        <Carousel
            plugins={[Autoplay({ delay: 4500 })]}
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="relative w-full"
        >
            <CarouselContent>
                {slides.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <div className="relative w-full aspect-video md:aspect-[16/5] overflow-hidden">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 z-10"></div>

                            {/* Slide Image */}
                            <img
                                src={`/assets/images/${slide.image}`}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />

                            {/* Slide Content */}
                            <div className="absolute inset-y-0 left-6 sm:left-10 md:left-16 lg:left-24 flex flex-col justify-center w-[80%] sm:w-[60%] lg:w-[45%] text-white z-20">
                                <h2 className="font-costum1 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
                                    {slide.title}
                                </h2>

                                <p className="mt-3 text-xs sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                                    {slide.short_description}
                                </p>

                                {slide.link && (
                                    <a
                                        href={slide.link}
                                        className="mt-6 w-max rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs sm:text-sm md:text-base backdrop-blur-md transition-all hover:bg-white hover:text-black hover:shadow-xl"
                                    >
                                        Learn More →
                                    </a>
                                )}
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Pagination + Arrows */}
            {/* <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6 md:px-10 z-30">
                <div className="flex gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                current === index
                                    ? "bg-white scale-110"
                                    : "bg-white/40 hover:bg-white/70"
                            }`}
                        />
                    ))}
                </div>

                <div className="flex gap-3">
                    <CarouselPrevious className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all" />
                    <CarouselNext className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all" />
                </div>
            </div> */}
        </Carousel>
    );
};

export default Slide;
