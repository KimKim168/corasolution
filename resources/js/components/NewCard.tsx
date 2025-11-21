import { Link } from '@inertiajs/react';

const NewCora = () => {
    const newsItems = [
        {
            title: 'Exploring the Future Cutting-Edge Technologies',
            bio: `In the mobile-first world we live in, having a mobile app is essential for businesses looking to engage customers,
            streamline operations, and stay competitive. At [Your Company Name], we offer full-cycle Mobile App
            Development services tailored to meet the unique needs of your business. With over 15 years of experience, we
            create high-quality, custom mobile apps that deliver superior user experiences and drive business growth.`,
            imageUrl: 'https://www.corasolution.com/assets/images/news/thumb/1728539995i7WtXJCfzM.jpg',
        },
        {
            title: 'Mobile App Development services tailored to meet the unique needs of your business.',
            bio: `In the mobile-first world we live in, having a mobile app is essential for businesses looking to engage customers,
            streamline operations, and stay competitive.`,
            imageUrl: 'https://www.corasolution.com/assets/images/news/thumb/1728540052_blog-2.jpg',
        },
        {
            title: 'Your subtitle or any other text goes here Implementation of Title, Subtitle and Author name as well as any other text you like to the book cover design.',
            bio: `In the mobile-first world we live in, having a mobile app is essential for businesses looking to engage customers,
            streamline operations, and stay competitive.`,
            imageUrl: 'https://www.corasolution.com/assets/images/news/thumb/1728540085_blog-3.jpg',
        },
    ];

    return (
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {newsItems.map((item, index) => (
                    <Link
                        key={index}
                        className="group flex max-w-lg flex-col items-center rounded-2xl border border-primary p-4 hover:shadow-lg hover:shadow-primary/10"
                        href="#"
                    >
                        {/* Image Container */}
                        <div className="relative w-full overflow-hidden rounded-lg border shadow">
                            <img src={item.imageUrl} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            {/* Overlay */}
                            <div className="bg-opacity-50 absolute bottom-2 left-2 rounded bg-black px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-sm font-medium text-white">Read More</span>
                            </div>
                        </div>

                        <div className="mt-4 text-zinc-500">
                            <h4 className="line-clamp-2 text-primary text-lg font-medium">{item.title}</h4>
                            <p className="mt-2 text-[14px] line-clamp-3">{item.bio}</p>
                        </div>
                    </Link>
                ))}
            </div>
    );
};

export default NewCora;
