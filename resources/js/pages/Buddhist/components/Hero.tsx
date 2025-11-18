const services = [
    {
        title: "Web Development and Design",
        link: "https://www.corasolution.com/detail/40",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/1728530431MHt6ajkIl0.png",
    },
    {
        title: "SEO and Digital Marketing",
        link: "https://www.corasolution.com/detail/41",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/17285305862KtyTUxaTI.png",
    },
    {
        title: "Mobile App Development",
        link: "https://www.corasolution.com/detail/42",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/17285306611OROwzlS3t.png",
    },
    {
        title: "Custom Software Development",
        link: "https://www.corasolution.com/detail/43",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/1728531376Kng58uAEzn.png",
    },
    {
        title: "Cloud Hosting",
        link: "https://www.corasolution.com/detail/44",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/1728531453CA3B4iAXn8.png",
    },
    {
        title: "IT Consultancy",
        link: "https://www.corasolution.com/detail/45",
        icon: "https://www.corasolution.com/assets/images/pages/thumb/17285315373eGFCOE6sJ.png",
    },
];

const Hero = () => {
    return (
        <div className="section-container mx-auto flex flex-col gap-4 justify-between py-12 lg:flex-row">
            {/* Left Side */}
            <div className="mb-10 ">
                <h2
                    className="mb-2 text-primary text-5xl font-bold md:text-6xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Cora Soft
                </h2>

                <p className="mb-6 text-xl text-gray-500">
                    With extensive industry experience, our company is a leading provider of cutting-edge
                    technology solutions. We specialize in delivering a wide range of services tailored to meet
                    the unique needs of our clients.
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center">
                            <div
                                className="rounded-full bg-blue-100 p-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <img src={service.icon} className="h-6 w-6" />
                            </div>

                            <div className="ml-4">
                                <a href={service.link}>
                                    <h3 className="text-[16px] text-primary">{service.title}</h3>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side Image */}
            <div className="h-auto">
                <img
                    src="https://www.corasolution.com/assets/images/gallery/1728543836_about-us-1.jpg"
                    alt="Team Working"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
