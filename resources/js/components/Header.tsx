import { cn } from "@/lib/utils";

const Header = ({title, short_description, className}:{title:any, short_description:any}) => {
    return (
        <div >
            <p
                className={cn("rounded-full text-2xl font-bold text-primary md:text-4xl")}
                style={{
                    textShadow: `
            -1px -1px 0 #000000,
            2px 2px 0 #ffffff,
            3px 3px 0 #00000055
          `,
                }}
            >
                {title}
            </p>
            <h2 className={cn('mx-auto text-base md:text-lg text-zinc-600 mt-2', className)}>
                {short_description}
            </h2>
        </div>
    );
};

export default Header;
