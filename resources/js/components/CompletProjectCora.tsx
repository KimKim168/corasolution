import CoraCard from "./CoraCard";
import Header from "./Header";

const CompletProjectCora = ({projects}:any) => {
    return (
        <div className="mx-auto section-container">
            <Header title={projects?.name} short_description={projects?.short_description}/>
            <div className="mt-4 grid aspect-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects?.children?.map((child) => (
                    <CoraCard
                        key={child.id}
                        id={child.id}
                        title={child.name}
                        short_description={child.short_description}
                        image={`/assets/images/pages/thumb/${child?.images?.[0].image}`}
                        href={`/detail/${child.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletProjectCora;
