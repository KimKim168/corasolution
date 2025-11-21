const Benefits = () => {
    return (
        <div className="section-container mx-auto my-16 flex flex-col gap-10">

            {/* Header */}
            <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    Benefits
                </span>
                <h2 className=" mb-4 text-2xl md:text-4xl font-bold text-primary">
                    Why Choose Us?
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-xl">
                    We provide quality-driven services carefully crafted to elevate your digital presence.
                </p>
            </div>

            {/* Benefit Items */}
            <div className="flex flex-col md:grid grid-cols-2 gap-8">

                {/* Item */}
                <div className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                    <img
                        src="https://www.corasolution.com/assets/images/pages/thumb/1728532064FaQ3631gua.png"
                        className="w-16 h-16 object-contain"
                        alt=""
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-medium text-primary">15+ Years of Experience</h3>
                        <p className="text-gray-600">
                            We bring deep expertise and proven results to every project we handle.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                    <img
                        src="https://www.corasolution.com/assets/images/pages/thumb/17285321113dlReJRIwN.png"
                        className="w-16 h-16 object-contain"
                        alt=""
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-medium text-primary">Customer-Centric Approach</h3>
                        <p className="text-gray-600">
                            Your goals come first — we create solutions that fit your needs.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                    <img
                        src="https://www.corasolution.com/assets/images/pages/thumb/1728532164Qj2y5vFmmT.png"
                        className="w-16 h-16 object-contain"
                        alt=""
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-medium text-primary">Expert Team</h3>
                        <p className="text-gray-600">
                            Our team stays ahead with innovation, skills, and dedication.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                    <img
                        src="https://www.corasolution.com/assets/images/pages/thumb/1728532198l5jRrTwc06.png"
                        className="w-16 h-16 object-contain"
                        alt=""
                    />
                    <div>
                        <h3 className="text-base md:text-lg font-medium text-primary">End-to-End Solutions</h3>
                        <p className="text-gray-600">
                            One-stop services covering design, development, hosting, and support.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Benefits;
