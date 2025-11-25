import LibraryCardHoverGradient from '@/components/CoraCard';
import Layout from '@/pages/Buddhist/Layout';
import { usePage } from '@inertiajs/react';

const services = [
    {
        id: 1,
        title: 'Web Development and Design Service',
        short_description:
            'We craft dynamic, user-friendly, and visually appealing websites that provide seamless user experiences across all devices. From design to development, we bring your vision to life, ensuring your online presence stands out.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/17285298015GI6OME97y.png',
    },
    {
        id: 2,
        title: 'SEO and Digital Marketing',
        short_description:
            'Our team of digital marketing experts helps you enhance your online visibility, drive targeted traffic, and increase conversions through strategic SEO practices and comprehensive digital marketing campaigns.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728529901VnnwVh5PCS.png',
    },
    {
        id: 3,
        title: 'Mobile App Development',
        short_description:
            'We develop intuitive and functional mobile applications tailored to your business needs, ensuring compatibility across both iOS and Android platforms for wider reach and improved customer engagement.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728529962z5CfNdWdRR.png',
    },
    {
        id: 4,
        title: 'Custom Software Development',
        short_description:
            'We build robust, scalable, and secure custom software solutions to address your specific business challenges, helping you streamline operations, improve efficiency, and achieve your goals.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/1728530012QTEaQTRbgm.png',
    },
    {
        id: 5,
        title: 'Cloud Hosting',
        short_description:
            'Our reliable cloud hosting services provide secure, scalable, and cost-effective solutions for your data and applications, ensuring optimal performance and accessibility for your business.',
        image: 'https://www.corasolution.com/assets/images/pages/thumb/17285300645N9ODoubQU.png',
    },
];

const Index = () => {
    const { data } = usePage<any>().props;
    return (
        <Layout>
            <section className="section-container grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                {data?.children?.map((item: any) => (
                    <LibraryCardHoverGradient
                        key={item.id}
                        id={item.id}
                        title={item.name} // ✅ from API
                        short_description={item.short_description} // ✅ from API
                        image={
                            item.images?.[0]?.image
                                ? `/assets/images/pages/thumb/${item.images[0].image}`
                                : '/assets/images/default.png'
                        }
                        href={`/detail/${item.id}`}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default Index;
