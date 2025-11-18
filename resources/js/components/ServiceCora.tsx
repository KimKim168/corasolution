import { HoverEffect } from '@/pages/Buddhist/components/ui/card-hover-effect';
import Header from './Header';

export default function ServiceCora() {
    return (
        <section className="overflow-hidden bg-primary py-12 antialiased">
            <div className="section-container">
                {/* Header */}
                <Header title={"What We Do For You"} short_description={" With extensive industry experience, our company is a leading provider of cutting-edge technology solutions. We specialize in delivering a wide range of services tailored to meet the unique needs of our clients."}/>

                {/* Cards */}
                <div className="mt-5">
                    <HoverEffect items={services} />
                </div>
            </div>
        </section>
    );
}

export const services = [
    {
        title: 'Web Development and Design',
        description: 'We craft dynamic, user-friendly, and visually appealing websites that provide seamless user experiences across all devices.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728530431MHt6ajkIl0.png',
        link: 'https://www.corasolution.com/detail/40',
    },
    {
        title: 'SEO and Digital Marketing',
        description: 'Enhance your online visibility and drive targeted traffic with strategic SEO and digital marketing campaigns.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/17285305862KtyTUxaTI.png',
        link: 'https://www.corasolution.com/detail/41',
    },
    {
        title: 'Mobile App Development',
        description: 'We develop intuitive and functional mobile applications compatible with both iOS and Android platforms.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/17285306611OROwzlS3t.png',
        link: 'https://www.corasolution.com/detail/42',
    },
    {
        title: 'Custom Software Development',
        description: 'We build robust, scalable, and secure custom software solutions tailored to your business challenges.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728531376Kng58uAEzn.png',
        link: 'https://www.corasolution.com/detail/43',
    },
    {
        title: 'Cloud Hosting',
        description: 'Reliable cloud hosting services offering secure, scalable, and cost-effective solutions for your data and applications.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728531453CA3B4iAXn8.png',
        link: 'https://www.corasolution.com/detail/44',
    },
    {
        title: 'IT Consultancy',
        description: 'We provide comprehensive IT consultancy services designed to empower your business with innovative solutions.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/17285315373eGFCOE6sJ.png',
        link: 'https://www.corasolution.com/detail/45',
    },
];
