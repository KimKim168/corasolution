import Hero from '../Buddhist/components/Hero';
import Slide from '../Buddhist/components/SlideShow/Slide';
import Layout from '../Buddhist/Layout';
import HeroCora from '@/components/Hero';
import ServiceCora from '@/components/ServiceCora';
import CompletProjectCora from '@/components/CompletProjectCora';
import NewsCora from '@/components/OurBlog';

const HomePage = () => {
    return (
        <Layout>
            {/* <SlideCorasoft/> */}
            <Slide />
            {/* Hero About */}
            <Hero/>
            {/* Hero About */}

            {/* Service */}
            <ServiceCora/>
            {/* Service */}

            {/* Project */}
            <section className="mt-6 md:mt-12 section-container">
                <CompletProjectCora/>

                <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-primary md:text-right">
                    <a href="/projects">See More &gt;</a>
                </div>
            </section>

            {/* Project */}

            {/* Our Blog */}
            <NewsCora/>

            {/* Our Blog */}
        </Layout>
    );
};

export default HomePage;
