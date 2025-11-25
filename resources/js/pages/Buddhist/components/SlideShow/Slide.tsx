import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
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
        <Carousel className="relative w-full" setApi={setApi} opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
            <CarouselContent>
                {slides?.map((item) => (
                    <CarouselItem key={item.id}>
                        <div className="relative aspect-[16/5] w-full overflow-hidden">
                            {/* Image */}
                            <img src={`/assets/images/banners/${item.image}`} alt={item.title || item.name} className="h-full w-full object-cover" />

                            {/* Overlay */}
                            <div className="absolute inset-0 z-10 bg-black/20" />

                            {/* Content */}
                            <div className="absolute inset-y-0 left-4 z-20 flex w-[90%] flex-col justify-center text-white sm:left-6 sm:w-[75%] md:left-12 md:w-[60%] lg:left-24 lg:w-[45%]">
                                <h2 className="font-costum1 text-sm font-bold drop-shadow-xl sm:text-xl md:text-3xl lg:text-5xl">{item.name}</h2>

                                <p className="sm:mt-2 line-clamp-2 text-[10px] leading-relaxed opacity-90 sm:mt-3 sm:line-clamp-3 sm:text-xs md:text-base lg:line-clamp-none lg:text-lg">
                                    {item.short_description}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default Slide;
