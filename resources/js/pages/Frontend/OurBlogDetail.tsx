import { usePage } from '@inertiajs/react';
import Layout from '../Buddhist/Layout';

const OurBlogDetail = () => {
    const { detailData, locale } = usePage<any>().props;
    return (
        <Layout>
            <div className="section-container">
                <div
                    className="prose max-w-none py-8 md:py-12"
                    dangerouslySetInnerHTML={{
                        __html: locale === 'kh' ? detailData?.long_description_kh || detailData?.long_description : detailData?.long_description,
                    }}
                />
            </div>
        </Layout>
    );
};

export default OurBlogDetail;
