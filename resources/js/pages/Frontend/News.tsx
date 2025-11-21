import NewsCora from '@/components/OurBlog';
import Layout from '../Buddhist/Layout';
import NewCora from '@/components/NewCard';
import Header from '@/components/Header';

const News = () => {
    return (
        <Layout>
            <section className="section-container py-6 md:py-12">
                
                {/* Header + Search */}
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    
                    {/* Title */}
                    <Header
                        title="Our Blog"
                        short_description="Latest News and Updates"
                    />

                    {/* Search Form */}
                    <form
                        action="https://www.corasolution.com/news"
                        className="w-full max-w-md md:max-w-sm"
                    >
                        <label htmlFor="default-search" className="sr-only">
                            Search
                        </label>

                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>

                            <input
                                type="search"
                                id="default-search"
                                name="search"
                                placeholder="Search articles..."
                                required
                                className="block w-full rounded-xl border border-gray-300 bg-white px-10 py-3 text-sm text-gray-800 shadow-sm transition focus:border-primary1 focus:ring-2 focus:ring-primary1 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            />

                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg bg-primary1 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:ring-2 focus:ring-primary1"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* News Card List */}
                <NewCora />
            </section>
        </Layout>
    );
};

export default News;
