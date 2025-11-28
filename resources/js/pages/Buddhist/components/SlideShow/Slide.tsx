import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type SlideItem = {
    id: number;
    name: string;
    title?: string;
    short_description: string;
    image: string;
};

const Slide: React.FC = () => {
    const { slides } = usePage<{ slides: SlideItem[] }>().props;

    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        const update = () => setCurrent(api.selectedScrollSnap());

        setCount(api.scrollSnapList().length);
        update();

        api.on('select', update);
        return () => api.off('select', update);
    }, [api]);

    return (
        <div className="relative w-full">
            <Carousel
                className="relative w-full"
                setApi={setApi}
                opts={{ align: 'start', loop: true }}
                plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
            >
                <CarouselContent>
                    {slides?.map((item) => (
                        <CarouselItem key={item.id}>
                            <div className="relative aspect-[16/5] w-full overflow-hidden">
                                <img
                                    src={`/assets/images/banners/${item.image}`}
                                    alt={item.title || item.name}
                                    className="h-full w-full object-cover"
                                />

                                {/* <div className="absolute inset-0 z-10 bg-black/20" /> */}

                                <div className="absolute inset-y-0 left-4 z-20 flex w-[90%] flex-col justify-center text-white sm:left-6 sm:w-[75%] md:left-12 md:w-[60%] lg:left-24 lg:w-[45%]">
                                    <h2 className="font-costum1 text-sm font-bold drop-shadow-xl sm:text-xl md:text-3xl lg:text-5xl">{item.name}</h2>

                                    <p className="line-clamp-2 text-[10px] leading-relaxed opacity-90 sm:mt-2 sm:mt-3 sm:line-clamp-3 sm:text-xs md:text-base lg:line-clamp-none lg:text-lg">
                                        {item.short_description}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Bottom Navigation Buttons */}
            <div className="absolute bottom-1 md:bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 md:gap-2">
                <button
                    onClick={() => api?.scrollPrev()}
                    className="rounded-full text-white transition cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ArrowLeftCircle className="h-5 w-5 md:h-7 md:w-7" />
                </button>

                <button
                    onClick={() => api?.scrollNext()}
                    className="rounded-full text-white transition cursor-pointer"
                    aria-label="Next slide"
                >
                    <ArrowRightCircle className="h-5 w-5 md:h-7 md:w-7" />
                </button>
            </div>
        </div>
    );
};

export default Slide;
