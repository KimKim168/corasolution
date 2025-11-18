import Hero from '@/components/Section/Hero';
import Slide from '../Buddhist/components/SlideShow/Slide';
import Layout from '../Buddhist/Layout';
import HeroCora from '@/components/Hero';
import ServiceCora from '@/components/ServiceCora';
import CompletProjectCora from '@/components/CompletProjectCora';
import NewsCora from '@/components/NewsCora';

const HomePage = () => {
    return (
        <Layout>
            {/* <SlideCorasoft/> */}
            <Slide />
            {/* Hero About */}
            <HeroCora/>
            {/* Hero About */}

            {/* Service */}
            <ServiceCora/>
            {/* Service */}

            {/* Project */}
            <section className="mt-6 overflow-hidden p-5 md:mt-20">
                <CompletProjectCora/>

                <div className="mx-auto mt-2 max-w-screen-xl px-4 pb-2 text-xl font-bold text-[#43428d] md:text-right">
                    <a href="/projects">See More &gt;</a>
                </div>
            </section>

            {/* Project */}

            {/* Our Blog */}
            <section className="mt-20 overflow-hidden bg-primary p-4 py-8 antialiased">
                <div className="mb-8 text-center">
                    <p className="font-costum4 inline-block rounded-full bg-[#3a3e67] p-2 px-4 text-xl tracking-normal text-white md:text-3xl">
                        Our Blog
                    </p>
                    <h2 className="font-costum4 mx-auto mt-2 line-clamp-3 max-w-[600px] text-center leading-normal text-white sm:text-xl">
                        Latest News and Updates
                    </h2>
                </div>

                <NewsCora/>

                <div className="mx-auto mt-2 max-w-screen-xl px-4 pb-2 text-xl font-bold text-white md:text-right">
                    <a href="/news">See More &gt;</a>
                </div>
            </section>

            {/* Our Blog */}
        </Layout>
    );
};

export default HomePage;
