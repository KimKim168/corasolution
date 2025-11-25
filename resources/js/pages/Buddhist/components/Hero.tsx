import Header from "@/components/Header";

const Hero = ({title, short_description, image, services}:any) => {
    return (
        <div className="section-container mx-auto flex flex-col justify-between gap-4 py-8 md:py-12 lg:flex-row">
            {/* Left Side */}
            <div className="mb-10">
                <Header title={title} short_description={short_description}/>

                {/* Services */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
                    {services?.children?.map((service, index) => (
                        <div key={index} className="flex items-center">
                            <div className="rounded-full bg-blue-100 p-4" data-aos="fade-up" data-aos-duration="1000">
                                <img src={`/assets/images/pages/thumb/${service?.icon}`} className="h-6 w-6" />
                            </div>

                            <div className="ml-4">
                                <a href={service?.link}>
                                    <h3 className="text-base text-primary">{service?.name}</h3>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-auto overflow-hidden">
                <img
                    src={`${image}`}
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
