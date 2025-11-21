import { useEffect, useState } from 'react';
import { NavbarLogo } from '../../Logo/NavbarLogo';
import { NavigationSheet } from './NavigationSheet';
import { NavMenu } from './NavMenu';

const MyNavigetion = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'}`}
        >
            <div className="section-container flex h-24 items-center justify-between gap-6">
                <NavbarLogo />
                <div className="hidden items-center gap-4 lg:flex">
                    <NavMenu />
                    <div className="flex flex-col items-center">
                        <a
                            href="#"
                            className="rounded-md border-transparent  p-2 text-md text-white bg-primary md:p-2"
                        >
                            Chat with Us
                        </a>
                    </div>
                    {/* <NavLanguage /> */}
                </div>

                <div className="flex items-center gap-3 lg:hidden">
                    <NavigationSheet />
                </div>
            </div>
        </nav>
    );
};

export default MyNavigetion;
