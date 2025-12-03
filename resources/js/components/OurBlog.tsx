import { usePage } from '@inertiajs/react';
import Header from './Header';
import NewCora from './NewCard';
import SeeMoreButton from './SeeMoreButton';
const OurBlog = () => {
    const { heading, locale} = usePage<any>().props;
    return (
        <div className="section-container p-4 py-12">
            <Header title={locale === 'kh' ? heading?.name_kh || heading?.name : heading?.name } short_description={locale === 'kh' ? heading?.short_description_kh || heading?.short_description : heading?.short_description} />
            <div className="mt-5">
                <NewCora />
            </div>
            <SeeMoreButton link={'/our_blogs'}/>
        </div>
    );
};

export default OurBlog;
