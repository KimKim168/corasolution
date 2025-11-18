import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import ReadMore from '../Buttons/ReadMore';

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        image: string; // add image property
        link: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3', className)}>
            {items.map((item, idx) => (
                <a
                    href={item.link}
                    key={item.link}
                    className="group relative block h-full w-full p-1"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full rounded-2xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <div className="overflow-hidden rounded-xl">
                            <img src={item.image} alt={item.title} className="aspect-video w-[30%] object-contain sm:w-[40%]" />
                        </div>
                        <CardTitle className='text-lg'>{item.title}</CardTitle>
                        <CardDescription className='text-base mt-1'>{item.description}</CardDescription>
                        <ReadMore item={`/detail/1`} />
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-[#8b262b] bg-white p-0 group-hover:border-slate-700 dark:border-white/[0.5] dark:bg-slate-800/[10]',
                className,
            )}
        >
            <div className="relative z-50 p-4">{children}</div>
        </div>
    );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn('mt-4 line-clamp-2 font-bold tracking-wide text-zinc-800 dark:text-zinc-200', className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn('mt-2 line-clamp-2 text-sm leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400', className)}>{children}</p>;
};
