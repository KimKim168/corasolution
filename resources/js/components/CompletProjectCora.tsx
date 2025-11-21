import CoraCard from "./CoraCard";
import Header from "./Header";

const CompletProjectCora = () => {
    const projects = [
        {
            id: 1,
            title: 'Central Public Library',
            short_description: 'A modern community library offering books, digital resources, and study spaces.',
            image: 'https://www.corasolution.com/assets/images/pages/thumb/1728533406nf6QbL1Nve.png',
        },
        {
            id: 2,
            title: 'City Hall Renovation',
            short_description: 'Modernized municipal building with smart office spaces and eco-friendly design.',
            image: 'https://www.corasolution.com/assets/images/pages/thumb/1728533506abc.png',
        },
        {
            id: 3,
            title: 'Community Center',
            short_description: 'Multi-purpose space for events, classes, and recreational activities.',
            image: 'https://www.corasolution.com/assets/images/pages/thumb/1728533606xyz.png',
        },
        {
            id: 4,
            title: 'Public Park Pavilion',
            short_description: 'A recreational pavilion with seating areas, gardens, and open-air design.',
            image: 'https://www.corasolution.com/assets/images/pages/thumb/1728533706pqr.png',
        },
    ];

    return (
        <div className="mx-auto section-container">
                <Header title="Completed Projects" short_description='Explore our range of completed projects, showcasing innovative solutions and expert craftsmanship. Each project reflects our
                    commitment to quality, precision, and client satisfaction, delivered on time and tailored to meet specific needs.'/>

            <div className="mt-4 grid aspect-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects.map((project) => (
                    <CoraCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        short_description={project.short_description}
                        image={project.image}
                        href={`/detial/${project.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletProjectCora;
