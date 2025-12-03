import { usePage } from '@inertiajs/react';
import Header from './Header';
import { HoverEffect } from '@/pages/Buddhist/components/ui/card-hover-effect';

export default function ServiceCora() {
    const { services, locale } = usePage<any>().props;

    const items =
        services?.children?.map((item: any) => ({
            title: locale === 'kh' ? item?.name_kh || item?.name : item?.name,
            description: locale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description,
            image: item?.icon
            ? `/assets/images/pages/thumb/${item?.icon}`
            : 'no image',
            link: `/detail/${item?.id}`,
        })) || [];

    return (
        <section className="overflow-hidden py-12 antialiased">
            <div className="section-container">
                <Header
                    title={locale === 'kh' ? services?.name_kh || services?.name : services?.name}
                    short_description={locale === 'kh' ? services?.short_description_kh || services?.short_description : services?.short_description}
                />
                <div className="mt-5">
                    <HoverEffect items={items} />
                </div>
            </div>
        </section>
    );
}
