import CompletProjectCora from '@/components/CompletProjectCora';
import OurBlog from '@/components/OurBlog';
import ServiceCora from '@/components/ServiceCora';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import Hero from '../Buddhist/components/Hero';
import Slide from '../Buddhist/components/SlideShow/Slide';
import Layout from '../Buddhist/Layout';

const HomePage = () => {
    const { about, services, projects, tableData } = usePage<any>().props;
    const { website_info, app_url, sourceOfFundingHeader, libraryTypeHeader, provinceHeader, claStatisticHeader } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const description =
        currentLocale === 'kh' ? website_info?.short_description_kh || website_info?.short_description : website_info?.short_description;
    const keywords = currentLocale === 'kh' ? website_info?.keywords_kh || website_info?.keywords : website_info?.keywords;
    const title = currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name;
    const image = `${app_url}/assets/images/website_infos/${website_info.logo}`;
    return (
        <Layout>
            <Head>
                {/* Basic Meta */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={app_url} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>

            <Slide />
            {/* Hero About */}
            <Hero
                title={about?.name}
                short_description={about?.short_description}
                image={`/assets/images/pages/${about?.images?.[0]?.image}`}
                services={services}
            />
            {/* Hero About */}
            {/* Service */}
            <ServiceCora />
            {/* Service */}

            {/* Project */}
            <section className="section-container mt-6 md:mt-12">
                <CompletProjectCora projects={projects} />
                <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-primary md:text-right">
                <a href="/projects">{t("See More")} &gt;</a>
                </div>
            </section>

            {/* Project */}

            {/* Our Blog */}
            <OurBlog />
            {/* Our Blog */}
        </Layout>
    );
};

export default HomePage;
