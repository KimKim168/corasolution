import Header from "@/components/Header";

const services = [
    {
        title: 'Web Development and Design',
        link: 'https://www.corasolution.com/detail/40',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/1728530431MHt6ajkIl0.png',
    },
    {
        title: 'SEO and Digital Marketing',
        link: 'https://www.corasolution.com/detail/41',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/17285305862KtyTUxaTI.png',
    },
    {
        title: 'Mobile App Development',
        link: 'https://www.corasolution.com/detail/42',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/17285306611OROwzlS3t.png',
    },
    {
        title: 'Custom Software Development',
        link: 'https://www.corasolution.com/detail/43',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/1728531376Kng58uAEzn.png',
    },
    {
        title: 'Cloud Hosting',
        link: 'https://www.corasolution.com/detail/44',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/1728531453CA3B4iAXn8.png',
    },
    {
        title: 'IT Consultancy',
        link: 'https://www.corasolution.com/detail/45',
        icon: 'https://www.corasolution.com/assets/images/pages/thumb/17285315373eGFCOE6sJ.png',
    },
];

const Hero = () => {
    return (
        <div className="section-container mx-auto flex flex-col justify-between gap-4 py-10 lg:py-16 lg:flex-row">
            {/* Left Side */}
            <div className="mb-10">
                <Header title={' Cora Soft'} short_description={'With extensive industry experience, our company is a leading provider of cutting-edge technology solutions. We specialize in delivering a wide range of services tailored to meet the unique needs of our clients.'}/>

                {/* Services */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center">
                            <div className="rounded-full bg-blue-100 p-4" data-aos="fade-up" data-aos-duration="1000">
                                <img src={service.icon} className="h-6 w-6" />
                            </div>

                            <div className="ml-4">
                                <a href={service.link}>
                                    <h3 className="text-base text-primary">{service.title}</h3>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-auto overflow-hidden">
                <img
                    src="https://www.corasolution.com/assets/images/gallery/1728543836_about-us-1.jpg"
                    alt="Team Working"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.05]"
                    style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 80%)',
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;
