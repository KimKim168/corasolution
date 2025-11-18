const HeroCora = () => {
    return (
        <section className="mx-auto mt-20 max-w-screen-xl overflow-hidden px-4 sm:mt-32">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-10 p-5 sm:p-10 lg:flex-row lg:px-6">
                <div
                    className="aos-init aos-animate relative mx-auto aspect-square w-full md:mr-10 md:w-10/12 md:px-10 lg:w-1/2"
                    data-aos="zoom-out-left"
                    data-aos-duration="1000"
                >
                    <div className="absolute -top-10 -left-5 w-[80%] md:-top-20 md:-left-10 md:w-[500px]">
                        <img
                            className="aspect-square w-full object-cover"
                            src="https://www.corasolution.com/assets/images/gallery/1728543752_about_us.jpg"
                            alt="Trainer assisting woman with leg press"
                        />
                    </div>

                    <div className="absolute -right-5 bottom-5 w-[60%] rounded-md bg-white p-2 md:-right-10 md:bottom-10 md:w-[300px]">
                        <img
                            className="aspect-square w-full rounded-md object-cover"
                            src="https://www.corasolution.com/assets/images/gallery/1728543800_about-us-02.jpg"
                            alt="Trainer helping man with squat"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="aos-init aos-animate space-y-4 text-left lg:w-1/2">
                    <div className="font-costum8 inline-block rounded-md border-t-2 border-b-2 border-primary px-4 py-2 text-[#6251ef]">About Us</div>

                    <h2
                        className="font-costum4 aos-init aos-animate mb-4 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-5xl leading-normal font-bold text-transparent md:text-6xl"
                        data-aos="zoom-out-right"
                        data-aos-duration="1000"
                    >
                        Cora Soft
                    </h2>

                    <p className="text-text_color2 mb-6 line-clamp-2 text-xl md:text-[22px]">
                        With extensive industry experience, our company is a leading provider of cutting-edge technology solutions. We specialize in
                        delivering a wide range of services tailored to meet the unique needs of our clients.
                    </p>

                    <ul
                        className="aos-init aos-animate mb-6 grid grid-cols-1 gap-6 bg-gradient-to-r from-cyan-800 to-blue-700 bg-clip-text text-[16px] text-transparent md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>Web Development and Design</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>SEO and Digital Marketing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>Mobile App Development</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>Custom Software Development</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>Cloud Hosting</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-500">✓</span>
                            <span>IT Consultancy</span>
                        </li>
                    </ul>

                    <a
                        href="/about"
                        className="font-costum8 aos-init inline-block rounded-md bg-gradient-to-r from-teal-400 to-[#2d37a4] px-8 py-3 text-white transition-colors hover:bg-transparent hover:from-blue-900 hover:to-teal-400"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroCora;
