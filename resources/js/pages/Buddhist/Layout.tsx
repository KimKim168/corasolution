import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import MyNavigetion from './components/NavigetionBar/MyNavigetion';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-koulen-regular' : '';

    return (
        <div className={`flex min-h-screen flex-col ${fontClass}`}>
            <MyNavigetion />
            <main className="mx-auto w-full flex-1">{children}</main>
            <footer className="bg-[#2b334a] pt-5 text-gray-400">
                <div className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-8 px-4 md:flex-row">
                    <div>
                        <h2 className="mb-4 text-[18px] text-white">Information</h2>

                        <div className="no-tailwind whitespace-nowrap">
                            <div className='flex gap-2'>
                                <img
                                    src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/email.png"
                                />
                                <p>info@corasolutions.com</p>
                            </div>
                            <div className='flex gap-2'>
                                <img
                                    src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/email.png"
                                />
                                <p>010775589</p>
                            </div>
                            <div className='flex gap-2'>
                                <img
                                    src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/email.png"
                                />
                                <p>Phnom Penh, Cambodia</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-center text-[18px] text-white">Social Media</h2>
                        <div className="mt-6 flex gap-4 md:mt-0">
                            <a href="https://www.facebook.com/corasoftsolution" className="rounded-md bg-[#252443] p-2 hover:bg-blue-600">
                                <img
                                    className="aspect-square w-10 object-contain"
                                    src="https://www.corasolution.com/assets/images/links/facebook.png"
                                    alt="facebook"
                                />
                            </a>

                            <a href="https://t.me/boralala" className="rounded-md bg-[#252443] p-2 hover:bg-blue-600">
                                <img
                                    className="aspect-square w-10 object-contain"
                                    src="https://www.corasolution.com/assets/images/links/telegram.png"
                                    alt="telegram"
                                />
                            </a>

                            <a href="https://youtube.com/" className="rounded-md bg-[#252443] p-2 hover:bg-blue-600">
                                <img
                                    className="aspect-square w-10 object-contain"
                                    src="https://www.corasolution.com/assets/images/links/youtube.png"
                                    alt="youtube"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-2 max-w-screen-xl px-4 pb-2 md:text-right">© 2024 E-Library. All Rights Reserved.</div>
            </footer>
        </div>
    );
};

export default Layout;
