import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from '@inertiajs/react';
import { ChevronRightIcon, ImageOff } from 'lucide-react';
import { styled } from 'styled-components';

const LibraryCardHoverGradient = () => {
    const item = {
        id: 1,
        title: 'Central Public Library',
        short_description: 'A modern community library offering books, digital resources, and study spaces.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728533406nf6QbL1Nve.png',
    };

    return (
        <StyledWrapper>
            <Link href={`/product/${item.id}`}>
                <div className="card group h-full w-full cursor-pointer">
                    <div className="card__glow" />

                    <div className="card__content">
                        {/* Image */}
                        <Avatar className="card__image aspect-[6/6] size-auto w-full bg-primary/20">
                            <AvatarImage
                                className="card__image aspect-[6/6] object-cover w-full rounded-none bg-primary/20"
                                src={`${item.image}`}
                                alt={item.title}
                            />
                            <AvatarFallback className="aspect-[6/6] w-full rounded-none bg-muted">
                                <ImageOff className="size-10 text-primary opacity-50" />
                            </AvatarFallback>
                        </Avatar>

                        {/* Text */}
                        <div className="mt-2 flex flex-col gap-1">
                            <p className="card__title text-lg font-medium">{item.title}</p>
                            <p className="card__description text-sm text-muted-foreground">{item.short_description}</p>
                        </div>

                        {/* Button */}
                        <div className="card__button absolute right-5 bottom-5 size-6 translate-x-10 bg-true-primary opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ring-[5px] group-hover:ring-primary/20">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </Link>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        --card-bg: var(--background);
        --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        background: var(--card-bg);
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: var(--card-shadow);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .card__glow {
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle at 50% 0%, rgba(45, 55, 164, 0.4) 0%, rgba(20, 184, 166, 0.2) 40%, rgba(0, 0, 0, 0) 80%);
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .card__content {
        padding: 1.25em;
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 0.75em;
        position: relative;
        z-index: 2;
    }

    .card__image {
        border-radius: 12px;
        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .card__title {
        transition: 0.3s ease;
    }

    .card__description {
        opacity: 0.8;
        transition: 0.3s ease;
    }

    .card__button {
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: rgba(124, 58, 237, 0.2);
    }

    .card:hover .card__glow {
        opacity: 1;
    }

    .card:hover .card__image {
        transform: translateY(-5px) scale(1.03);
    }

    .card:hover .card__title,
    .card:hover .card__description {
        transform: translateX(2px);
        opacity: 1;
    }

    .card:hover .card__button svg {
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;

export default LibraryCardHoverGradient;
