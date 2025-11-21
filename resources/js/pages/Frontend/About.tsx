import Header from '@/components/Header';
import Benefits from '../Buddhist/components/Benefits';
import Hero from '../Buddhist/components/Hero';
import Layout from '../Buddhist/Layout';

const About = () => {
    return (
        <Layout>
            <Hero />
            <div className="section-container mx-auto">
                <h1 className="inline-block border-b-2 border-primary pb-2 text-2xl md:text-4xl font-bold text-primary">Our Mission</h1>
                <p className="mt-6 max-w-[60ch] text-base md:text-lg text-gray-700">
                    Our mission is to empower businesses with innovative and high-quality technology solutions that fuel growth and improve
                    efficiency.
                </p>
            </div>
            <Benefits />
        </Layout>
    );
};

export default About;
