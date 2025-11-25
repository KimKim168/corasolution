import { usePage } from '@inertiajs/react';
import Layout from '../Buddhist/Layout';

const OurBlogDetail = () => {
    const { detailData } = usePage<any>().props;
    return (
        <Layout>
            <div className="section-container py-8 md:py-12" dangerouslySetInnerHTML={{ __html: detailData?.long_description }} />
        </Layout>
    );
};

export default OurBlogDetail;
