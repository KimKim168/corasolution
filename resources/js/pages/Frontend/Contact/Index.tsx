import Layout from '@/pages/Buddhist/Layout';
import { usePage } from '@inertiajs/react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const Index = () => {
    const { website_info, header } = usePage().props;

    return (
        <Layout>
            <div className="section-container mx-auto py-12 text-center">
                {/* Title */}
                <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{header?.name}</h2>
                <div className="mx-auto max-w-48 border-b-2 border-primary pb-2"></div>
                <p className="mx-auto mt-2 max-w-[50ch] text-base text-gray-700 sm:text-lg">{header?.short_description}</p>

                {/* Contact Grid */}
                <div className="mt-5 grid gap-10 px-6 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary">
                            <MailIcon />
                        </div>
                        <p className="font-medium text-primary">{website_info?.email}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary">
                            <PhoneIcon />
                        </div>
                        <p className="font-medium text-primary">{website_info?.phone}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary">
                            <MapPinIcon />
                        </div>
                        <p className="font-medium text-primary">{website_info?.address}</p>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12">
                    <iframe
                        src={website_info?.google_map_embed}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="mt-6 rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
