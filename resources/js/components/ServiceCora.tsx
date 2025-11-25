import { usePage } from '@inertiajs/react';
import Header from './Header';
import { HoverEffect } from '@/pages/Buddhist/components/ui/card-hover-effect';

export default function ServiceCora() {
    const { services } = usePage<any>().props;

    const items =
        services?.children?.map((item: any) => ({
            title: item?.name,
            description: item?.short_description,
            image: item?.icon
            ? `/assets/images/pages/thumb/${item.icon}`
            : '',
            link: `/detail/${item?.id}`,
        })) || [];

    return (
        <section className="overflow-hidden py-12 antialiased">
            <div className="section-container">
                <Header
                    title={services?.name}
                    short_description={services?.short_description}
                />
                <div className="mt-5">
                    <HoverEffect items={items} />
                </div>
            </div>
        </section>
    );
}
