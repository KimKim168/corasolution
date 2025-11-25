import { Link, usePage } from '@inertiajs/react';

const NewCora = () => {
    const {tableData} = usePage().props;
    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {tableData?.map((item, index) => (
                <Link
                    key={index}
                    className="group flex max-w-lg flex-col items-center rounded-2xl border border-primary p-4 hover:shadow-lg hover:shadow-primary/10"
                    href={`/our_blog/${item.id}`}
                >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden rounded-lg border shadow">
                        <img
                            src={`/images/thumb/${item.thumbnail}`}
                            alt={item.title}
                            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-sm font-medium text-white">Read More</span>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="mt-4 text-zinc-500">
                        <h4 className="line-clamp-2 text-lg font-medium text-primary">{item.title}</h4>
                        <p className="mt-2 line-clamp-3 text-[14px]">{item.short_description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NewCora;
