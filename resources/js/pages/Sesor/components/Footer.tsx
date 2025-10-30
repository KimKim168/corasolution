import { Link } from '@inertiajs/react';
import { LogoFooter } from './navbars/logoFooter';

const footerSections = [
    {
        title: 'About Us',
        mainLink: '/about_us',
        links: [
            { title: 'Who We Are', href: '#who-we-are' },
            { title: 'Vision, Mission & Core Values', href: '#vision-mission-core-values' },
            { title: 'Our Team', href: '#our-team' },
            { title: 'Who We Deliver For', href: '#who-we-deliver-for' },
            { title: 'Campaign & Promotion', href: '#campaign-promotion' },
            { title: 'Career', href: '#career' },
        ],
    },
    {
        title: 'Services',
        mainLink: '/service',
        links: [
            { title: 'Our Services', href: '#our-services' },
            { title: 'What We Deliver', href: '#what-we-deliver' },
            { title: 'Prohibited Items', href: '#prohibited-items' },
            { title: 'Inquiry Lead Form', href: '#inquiry-lead-form' },
            { title: 'Charges & Rates', href: '#charges-rates' },
            { title: 'Benefits', href: '#benefits' },
        ],
    },
    {
        title: 'Contact Us',
        mainLink: '/',
        links: [{ title: 'Contact Detail', href: '#contact-detail' }],
    },
    { title: 'Track & Trace', mainLink: '/#track-trace', links: [] },
    { title: 'Download Apps', mainLink: '/#download-apps', links: [] },
    { title: 'FAQs', mainLink: '/#faqs', links: [] },
];

const followUs = [
    {
        img: '/assets/sesor/links/facebook.png',
        link: 'https://www.facebook.com/SESORexpress/',
    },
    {
        img: '/assets/sesor/links/instagram.png',
        link: 'https://www.instagram.com/sesor_express/',
    },
    {
        img: '/assets/sesor/links/tiktok.png',
        link: 'https://www.tiktok.com/@sesor_express',
    },
    {
        img: '/assets/sesor/links/telegram.png',
        link: 'https://t.me/sesor_express',
    },
    {
        img: '/assets/sesor/links/whatapp.png',
        link: 'https://wa.me/061210111', // Replace with your WhatsApp number
    },
    {
        img: '/assets/sesor/links/linkedin.png',
        link: 'https://www.linkedin.com/company/sesor-express/',
    },
];

const socialLinks = [
    {
        img: '/assets/sesor/links/facebook.png',
        link: 'https://www.facebook.com/SESORexpress/',
    },
    {
        img: '/assets/sesor/links/instagram.png',
        link: '#',
    },
    {
        img: '/assets/sesor/links/twitter.png',
        link: '#',
    },
];

const Footer = () => {
    return (
        <footer className="mt-10 bg-true-primary">
            <div className="section-container relative p-4 md:p-0 md:py-4">
                {/* Top Section */}
                <div className="mt-4 grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                    {/* Logo */}
                    <div className="col-span-full xl:col-span-2">
                        <LogoFooter />
                    </div>

                    {/* Footer Links */}
                    {footerSections.map(({ title, links, mainLink }) => (
                        <div key={title}>
                            <Link href={mainLink} className="font-manrope-bold text-[15px] text-primary-two hover:underline">
                                {title}
                            </Link>

                            {links.length > 0 && (
                                <ul className="mt-2 space-y-1">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link href={`${mainLink}${href}`} className="font-manrope-light text-xs text-white hover:underline">
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Center Section */}
                <div className="mt-4 flex flex-col items-center font-manrope-extra-light text-white">
                    <div className="mb-2 flex gap-2">
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.img} alt="social link" className="h-5 w-5 rounded border dark:border-white" />
                            </a>
                        ))}
                    </div>
                    <span className="text-xs">Terms & Conditions</span>
                    <span className="text-xs">©2025 SESOR Express</span>
                </div>

                {/* Bottom Right Section */}
                <div className="right-0 bottom-0 my-4 font-manrope-extra-light text-white lg:absolute">
                    <div className="flex flex-col items-center lg:items-start">
                        <span className="mb-1 text-xs">Follow Us On</span>
                        <div className="mb-1 flex gap-1">
                            {followUs.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110"
                                >
                                    <img src={item.img} alt="social icon" className="h-7 w-7 rounded border dark:border-white" />
                                </a>
                            ))}
                        </div>
                        <span className="text-xs">Sesor Express</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
