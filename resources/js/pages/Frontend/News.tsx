import Header from '@/components/Header';
import NewCora from '@/components/NewCard';
import Layout from '../Buddhist/Layout';
import PostSearch from '../Buddhist/Posts/PostSearch';

const News = () => {
    return (
        <Layout>
            <section className="section-container py-6 md:py-12">
                {/* Header + Search */}
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    {/* Title */}
                    <Header title="Our Blog" short_description="Latest News and Updates" />
                    <div className="max-w-xl flex-1">
                        <PostSearch />
                    </div>
                    {/* Search Form */}
                </div>

                {/* News Card List */}
                <NewCora />
            </section>
        </Layout>
    );
};

export default News;
