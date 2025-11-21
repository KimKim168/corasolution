import LibraryCardHoverGradient from '@/components/CoraCard';
import Layout from '@/pages/Buddhist/Layout';

const services = [
    {
        id: 1,
        title: "Web Development and Design Service",
        short_description: "We craft dynamic, user-friendly, and visually appealing websites that provide seamless user experiences across all devices. From design to development, we bring your vision to life, ensuring your online presence stands out.",
        image: "https://www.corasolution.com/assets/images/pages/thumb/17285298015GI6OME97y.png",
    },
    {
        id: 2,
        title: "SEO and Digital Marketing",
        short_description: "Our team of digital marketing experts helps you enhance your online visibility, drive targeted traffic, and increase conversions through strategic SEO practices and comprehensive digital marketing campaigns.",
        image: "https://www.corasolution.com/assets/images/pages/thumb/1728529901VnnwVh5PCS.png",
    },
    {
        id: 3,
        title: "Mobile App Development",
        short_description: "We develop intuitive and functional mobile applications tailored to your business needs, ensuring compatibility across both iOS and Android platforms for wider reach and improved customer engagement.",
        image: "https://www.corasolution.com/assets/images/pages/thumb/1728529962z5CfNdWdRR.png",
    },
    {
        id: 4,
        title: "Custom Software Development",
        short_description: "We build robust, scalable, and secure custom software solutions to address your specific business challenges, helping you streamline operations, improve efficiency, and achieve your goals.",
        image: "https://www.corasolution.com/assets/images/pages/thumb/1728530012QTEaQTRbgm.png",
    },
    {
        id: 5,
        title: "Cloud Hosting",
        short_description: "Our reliable cloud hosting services provide secure, scalable, and cost-effective solutions for your data and applications, ensuring optimal performance and accessibility for your business.",
        image: "https://www.corasolution.com/assets/images/pages/thumb/17285300645N9ODoubQU.png",
    },
];

const Index = () => {
    return (
        <Layout>
            <section className="section-container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-12">
                {services.map((project) => (
                    <LibraryCardHoverGradient
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        short_description={project.short_description}
                        image={project.image}
                         href={`/detial/${project.id}`}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default Index;
