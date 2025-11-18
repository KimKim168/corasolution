import NewsCora from '@/components/NewsCora';
import Layout from '../Buddhist/Layout';

const News = () => {
    return (
        <Layout>
            <section className="lg:28 overflow-hidden bg-primary p-4 pb-12 antialiased">
                <div className="mb-8 pt-10 text-center">
                    <p className="font-costum4 inline-block rounded-full bg-[#3a3e67] p-2 px-4 text-xl tracking-normal text-white md:text-3xl">
                        Our Blog
                    </p>
                    <h2 className="font-costum4 mx-auto mt-2 line-clamp-3 max-w-[600px] text-center leading-normal text-white sm:text-xl">
                        Latest News and Updates
                    </h2>

                    <form action="https://www.corasolution.com/news" className="m-4 mx-auto max-w-lg">
                        <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="focus:ring-primary1 focus:border-primary1 dark:focus:ring-primary1 dark:focus:border-primary1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                placeholder="Search..."
                                required
                                name="search"
                            />
                            <button
                                type="submit"
                                className="bg-primary1 hover:bg-primary1 focus:ring-primary1 dark:bg-primary1 dark:hover:bg-primary1 dark:focus:ring-primary1 absolute end-2.5 bottom-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <NewsCora/>
            </section>
        </Layout>
    );
};

export default News;
