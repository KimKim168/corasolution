import LibraryCardHoverGradient from '@/components/CoraCard';
import Layout from '@/pages/Buddhist/Layout';
import { usePage } from '@inertiajs/react';

const Index = () => {
    const { data, locale } = usePage<any>().props;

    return (
        <Layout>
            <section className="section-container grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                {data?.children?.map((item: any) => (
                    <LibraryCardHoverGradient
                        key={item?.id}
                        id={item?.id}
                        title={
                            locale === 'kh'
                                ? item?.name_kh || item?.name
                                : item?.name
                        }
                        short_description={
                            locale === 'kh'
                                ? item?.short_description_kh || item?.short_description
                                : item?.short_description
                        }
                        image={
                            item?.images?.[0]?.image
                                ? `/assets/images/pages/thumb/${item?.images?.[0]?.image}`
                                : '/assets/images/default.png'
                        }
                        href={`/detail/${item?.id}`}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default Index;
