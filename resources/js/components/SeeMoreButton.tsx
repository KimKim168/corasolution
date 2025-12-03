import useTranslation from '@/hooks/use-translation';

const SeeMoreButton = ({ link }) => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto mt-4 px-4 pb-2 text-xl font-bold text-primary text-right">
            <a href={link}>{t('See More')} &gt;</a>
        </div>
    );
};

export default SeeMoreButton;
