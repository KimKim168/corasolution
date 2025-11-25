import Hero from '../Buddhist/components/Hero';
import Slide from '../Buddhist/components/SlideShow/Slide';
import Layout from '../Buddhist/Layout';
import HeroCora from '@/components/Hero';
import ServiceCora from '@/components/ServiceCora';
import CompletProjectCora from '@/components/CompletProjectCora';
import NewsCora from '@/components/OurBlog';
import { usePage } from '@inertiajs/react';
import OurBlog from '@/components/OurBlog';

const HomePage = () => {
    const { about, services, projects, tableData } = usePage<any>().props;
    return (
        <Layout>
            <Slide />
            {/* Hero About */}
            <Hero title={about?.name} short_description={about?.short_description} image={`/assets/images/pages/${about?.images?.[0]?.image}`} services={services}/>
            {/* Hero About */}
            {/* Service */}
            <ServiceCora/>
            {/* Service */}

            {/* Project */}
            <section className="mt-6 md:mt-12 section-container">
                <CompletProjectCora projects={projects}/>
                <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-primary md:text-right">
                    <a href="/projects">See More &gt;</a>
                </div>
            </section>

            {/* Project */}

            {/* Our Blog */}
            <OurBlog/>
            {/* Our Blog */}
        </Layout>
    );
};

export default HomePage;
