import Header from './Header';
import NewCora from './NewCard';
const OurBlog = () => {
    return (
        <section className='mt-20 bg-primary'>
            <div className=" overflow-hidden  p-4 py-8 section-container">
                <Header title={"Our Blog"} short_description={' Latest News and Updates'}/>
                <div className='mt-5'>
                    <NewCora />
                </div>

                <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-white md:text-right">
                    <a href="/news">See More &gt;</a>
                </div>
            </div>
        </section>
    );
};

export default OurBlog;
