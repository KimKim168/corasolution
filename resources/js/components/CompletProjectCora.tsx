import CoraCard from "./CoraCard";
import Header from "./Header";
import SeeMoreButton from "./SeeMoreButton";

const CompletProjectCora = ({projects, locale}:any) => {

    return (
        <div className="mx-auto section-container">
            <Header title={locale === "kh" ? projects?.name_kh || projects?.name : projects?.name} short_description={locale === "kh" ? projects?.short_description_kh || projects?.short_description : projects?.short_description}/>
            <div className="mt-4 grid aspect-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects?.children?.map((child) => (
                    <CoraCard
                        key={child.id}
                        id={child.id}
                        title={locale === "kh" ? child?.name_kh || child?.name : child?.name}
                        short_description={locale === "kh" ? child?.short_description_kh || child?.short_description : child?.short_description}
                        image={`/assets/images/pages/thumb/${child?.images?.[0]?.image}`}
                        href={`/detail/${child.id}`}
                    />
                ))}
            </div>
            <SeeMoreButton link={'/projects'}/>
        </div>
    );
};

export default CompletProjectCora;
