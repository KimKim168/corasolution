import { usePage } from '@inertiajs/react';
import Hero from '../Buddhist/components/Hero';
import Layout from '../Buddhist/Layout';

const About = () => {
    const { data, services } = usePage<any>().props;
    return (
        <Layout>
            <>
                <Hero title={data?.name} short_description={data?.short_description} image={`/assets/images/pages/${data?.images?.[0]?.image}`} services={services}/>

                {data?.children?.map((child: any, index: any) => (
                    <div key={child.id || index} className="section-container mx-auto mt-16">
                        {/* Title */}
                        <h2 className="inline-block pb-2 text-2xl font-bold text-primary md:text-4xl">{child.name}</h2>

                        {/* Description */}
                        {child.short_description && <p className="mt-2 max-w-[60ch] text-base text-gray-700 md:text-lg">{child.short_description}</p>}

                        {/* Render Sub Children (like Why Choose Us items) */}
                        {child?.children?.length > 0 && (
                            <div className="mt-10 grid gap-8 md:grid-cols-2 mb-10 md:mb-16">
                                {child.children.map((item: any) => (
                                    <div
                                        key={item?.id}
                                        className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                                    >
                                        {item?.icon && (
                                            <img src={`/assets/images/pages/${item.icon}`} alt={item?.name} className="h-16 w-16 object-contain" />
                                        )}

                                        <div>
                                            <h3 className="text-base font-medium text-primary md:text-lg">{item?.name}</h3>
                                            {item?.short_description && <p className="text-gray-600">{item.short_description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </>
        </Layout>
    );
};

export default About;
