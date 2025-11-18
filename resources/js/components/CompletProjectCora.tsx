const CompletProjectCora = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="aos-init aos-animate" data-aos="flip-down" data-aos-duration="1000">
                <h2 className="font-costum5 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-5xl font-bold text-transparent">
                    Completed Projects
                </h2>
                <p className="text-text_color2 mt-5 max-w-[65ch] text-start text-xl md:text-[22px]">
                    Explore our range of completed projects, showcasing innovative solutions and expert craftsmanship. Each project reflects our
                    commitment to quality, precision, and client satisfaction, delivered on time and tailored to meet specific needs.
                </p>
            </div>

            <div className="mt-10 grid aspect-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <a href="https://www.corasolution.com/detail/50">
                    <div className="rounded-md border border-slate-300 duration-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-zinc-400">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728534704_1728533339OH1lmPp3Dm.png"
                            className="aspect-[3/4] w-full rounded-t-md rounded-br-[200px] object-cover"
                        />
                        <div className="p-8">
                            <h2 className="text-xl font-bold hover:cursor-pointer hover:text-blue-600 md:text-2xl">Repeat Gym</h2>
                            <p className="text-text_color2 mt-2 text-xl md:text-[22px]">Web Development and Design</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.corasolution.com/detail/51">
                    <div className="rounded-md border border-slate-300 duration-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-zinc-400">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728533406nf6QbL1Nve.png"
                            className="aspect-[3/4] w-full rounded-t-md rounded-br-[200px] object-cover"
                        />
                        <div className="p-8">
                            <h2 className="text-xl font-bold hover:cursor-pointer hover:text-blue-600 md:text-2xl">Repeat Gym</h2>
                            <p className="text-text_color2 mt-2 text-xl md:text-[22px]">Web Development and Design</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.corasolution.com/detail/52">
                    <div className="rounded-md border border-slate-300 duration-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-zinc-400">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/1728533451imWIgWh1fn.png"
                            className="aspect-[3/4] w-full rounded-t-md rounded-br-[200px] object-cover"
                        />
                        <div className="p-8">
                            <h2 className="text-xl font-bold hover:cursor-pointer hover:text-blue-600 md:text-2xl">Repeat Gym</h2>
                            <p className="text-text_color2 mt-2 text-xl md:text-[22px]">Web Development and Design</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.corasolution.com/detail/53">
                    <div className="rounded-md border border-slate-300 duration-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-zinc-400">
                        <img
                            src="https://www.corasolution.com/assets/images/pages/thumb/17285342734k9JTayW0z.png"
                            className="aspect-[3/4] w-full rounded-t-md rounded-br-[200px] object-cover"
                        />
                        <div className="p-8">
                            <h2 className="text-xl font-bold hover:cursor-pointer hover:text-blue-600 md:text-2xl">Repeat Gym</h2>
                            <p className="text-text_color2 mt-2 text-xl md:text-[22px]">Web Development and Design</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CompletProjectCora;
