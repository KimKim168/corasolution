import useTranslation from "@/hooks/use-translation";

const ReadMore = ({item}) => {
    const { t } =useTranslation();
    return (
        <a
            href={item}
            className="mt-4 inline-block rounded bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-two"
        >
            {t("Read More")}
        </a>
    );
};

export default ReadMore;
