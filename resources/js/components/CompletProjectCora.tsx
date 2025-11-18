import CoraCard from "./CoraCard";

const CompletProjectCora = () => {
    return (
        <div className="mx-auto section-contianer">
            <div>
                <h2 className="text-4xl font-bold text-primary">
                    Completed Projects
                </h2>
                <p className=" mt-5 max-w-[65ch] text-start text-xl md:text-[22px]">
                    Explore our range of completed projects, showcasing innovative solutions and expert craftsmanship. Each project reflects our
                    commitment to quality, precision, and client satisfaction, delivered on time and tailored to meet specific needs.
                </p>
            </div>

            <div className="mt-10 grid aspect-auto grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CoraCard/>
                <CoraCard/>
                <CoraCard/>
                <CoraCard/>
            </div>
        </div>
    );
};

export default CompletProjectCora;
