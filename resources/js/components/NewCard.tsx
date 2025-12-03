import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const NewCora = () => {
    const { tableData, locale } = usePage().props;
    const { t } = useTranslation();

    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {tableData?.map((item) => (
                <Link
                    key={item?.id}
                    href={`/our_blog/${item?.id}`}
                    className="group flex max-w-lg flex-col items-center rounded-2xl border border-primary p-4 hover:shadow-lg hover:shadow-primary/10"
                >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden rounded-lg border shadow">
                        <img
                            src={`/images/thumb/${item?.thumbnail}`}
                            alt={item?.title}
                            className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-sm font-medium text-white">
                                {t('Read More')}
                            </span>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="mt-4 text-zinc-500 w-full">
                        <h4 className="line-clamp-2 text-lg font-medium text-primary">
                            {locale === 'kh'
                                ? item?.title_kh || item?.title
                                : item?.title}
                        </h4>

                        <p className="mt-2 line-clamp-3 text-[14px]">
                            {locale === 'kh'
                                ? item?.short_description_kh || item?.short_description
                                : item?.short_description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NewCora;
