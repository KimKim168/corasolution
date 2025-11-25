import Header from './Header';
import NewCora from './NewCard';
const OurBlog = () => {
    return (
        <div className="section-container p-4 py-12">
            <Header title={'Our Blog'} short_description={' Latest News and Updates'} />
            <div className="mt-5">
                <NewCora />
            </div>

            <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-primary md:text-right">
                <a href="/our_blogs">See More &gt;</a>
            </div>
        </div>
    );
};

export default OurBlog;
