import Benefits from '../Buddhist/components/Benefits';
import Hero from '../Buddhist/components/Hero';
import Layout from '../Buddhist/Layout';

const About = () => {
    return (
        <Layout>
           <Hero/>
                <div className="mx-auto section-container mt-12">
                    <div>
                        <h1 className="font-costum5 bg-gradient-to-r from-[#2d37a4] to-teal-500 bg-clip-text text-5xl leading-normal font-bold text-transparent md:text-5xl">
                            Our Mission
                        </h1>
                        <p className="text-text_color2 mt-5 max-w-[60ch] text-start text-xl md:text-[22px]">
                            Our mission is to empower businesses with innovative and high-quality technology solutions that fuel growth and improve
                            efficiency. We are committed to delivering excellence through collaboration, technical expertise, and a customer-centric
                            approach.
                        </p>
                    </div>
                </div>
                <Benefits/>
        </Layout>
    );
};

export default About;
