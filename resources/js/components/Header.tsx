const Header = ({title, short_description}:{title:any, short_description:any}) => {
    return (
        <div >
            <p
                className={`rounded-full text-[30px] leading-[1em] font-bold text-white md:text-4xl`}
                style={{
                    textShadow: `
            -1px -1px 0 #2d37a4,
            3px 3px 0 #2d37a4,
            6px 6px 0 #00000055
          `,
                }}
            >
                {title}
            </p>
            <h2 className="mx-auto text-xl mt-2 leading-normal text-white md:text-2xl">
                {short_description}
            </h2>
        </div>
    );
};

export default Header;
