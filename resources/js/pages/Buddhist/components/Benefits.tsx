const Benefits = () => {
    return (
        <div className="section-container mx-auto mt-5 mb-10 grid max-w-7xl grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-12">
            <div className="sm:mb-8 md:col-span-4">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-500">Benefits</span>
                <h2 className="font-costum5 mb-4 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-4xl leading-normal font-bold text-transparent">
                    Why Choose Us?
                </h2>
                <p className="text-base text-gray-600 md:text-lg"></p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
                    <div className="mb-4 text-blue-500">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728532064FaQ3631gua.png"
                            className="mx-auto w-14"
                            alt="Unique Design Icon"
                        />
                    </div>
                    <h3 className="mb-2 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-xl font-bold text-transparent md:text-xl">
                        15+ Years of Experience
                    </h3>
                    <p className="text-text_color2 text-xl md:text-[22px]">
                        A proven track record of delivering successful projects across diverse industries.
                    </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
                    <div className="mb-4 text-blue-500">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/17285321113dlReJRIwN.png"
                            className="mx-auto w-14"
                            alt="Unique Design Icon"
                        />
                    </div>
                    <h3 className="mb-2 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-xl font-bold text-transparent md:text-xl">
                        Customer-Centric Approach
                    </h3>
                    <p className="text-text_color2 text-xl md:text-[22px]">
                        We prioritize understanding your needs and goals to offer solutions that best fit your business.
                    </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
                    <div className="mb-4 text-blue-500">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728532164Qj2y5vFmmT.png"
                            className="mx-auto w-14"
                            alt="Unique Design Icon"
                        />
                    </div>
                    <h3 className="mb-2 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-xl font-bold text-transparent md:text-xl">
                        Expert Team
                    </h3>
                    <p className="text-text_color2 text-xl md:text-[22px]">
                        Our team of skilled professionals is dedicated to staying ahead of industry trends to provide top-notch solutions.
                    </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
                    <div className="mb-4 text-blue-500">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728532198l5jRrTwc06.png"
                            className="mx-auto w-14"
                            alt="Unique Design Icon"
                        />
                    </div>
                    <h3 className="mb-2 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-xl font-bold text-transparent md:text-xl">
                        End-to-End Solutions
                    </h3>
                    <p className="text-text_color2 text-xl md:text-[22px]">
                        From web development to cloud hosting, we offer comprehensive services to support your digital journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
