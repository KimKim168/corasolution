const Benefits = ({child}:any) => {
    return (
        <div className="section-container mx-auto my-16 flex flex-col gap-10">

            {/* Header */}
            <div>

                <h2 className="mb-4 text-2xl md:text-4xl font-bold text-primary">
                    {child.name}
                </h2>

                <p className="text-base md:text-lg text-gray-600 max-w-xl">
                    {child.short_description}
                </p>
            </div>

            {/* Items */}
            <div className="flex flex-col md:grid grid-cols-2 gap-8">
                {child.children.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                    >
                        <img
                            src={`/assets/images/pages/${item.icon}`}
                            className="w-16 h-16 object-contain"
                            alt={item.name}
                        />

                        <div>
                            <h3 className="text-base md:text-lg font-medium text-primary">
                                {item.name}
                            </h3>
                            <p className="text-gray-600">
                                {item.short_description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Benefits;
