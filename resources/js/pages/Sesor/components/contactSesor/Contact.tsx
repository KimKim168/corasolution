import GoogleMap from './GoogleMap';

const Contact = () => (
  <div id='contact-detail' className="mt-5 md:mt-10">
    <div className="section-container">
      <h2 className="text-center font-manrope-extra-bold tracking-tight text-primary text-[20px] md:text-3xl">
        Contact Detail
      </h2>

      <div className="mt-2.5 md:mt-5 grid gap-5 md:gap-10 lg:grid-cols-2">
        {/* Google Map */}
        <GoogleMap />
        {/* End Google Map */}

        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {[
            {
              icon: '/assets/sesor/main_page/Phone.png',
              title: 'Call Us',
              lines: ['+855 81 210 111', '+855 61 210 111'],
            },
            {
              icon: '/assets/sesor/main_page/Email.png',
              title: 'Email Us',
              lines: ['contact@sesorexpress.com'],
            },
            {
              icon: '/assets/sesor/main_page/Website.png',
              title: 'Website',
              lines: ['www.sesorexpress.com'],
            },
            {
              icon: '/assets/sesor/main_page/Address.png',
              title: 'Address',
              lines: [
                'No. 20, Street. 598C, Phum Tomnob, Sangkat Phnom Penh Thmey, Khan SenSok, Phnom Penh, Cambodia',
              ],
            },
          ].map((item, idx) => (
            <div className="flex gap-4 items-start" key={idx}>
              <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title + ' Icon'}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-[17px] md:text-xl font-manrope-semi-bold text-[#231F20]">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p className="text-[12px] md:text-[15px] font-manrope-regular text-[#231F20]" key={i}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Social Links and QR */}
          <div className="col-span-1 sm:col-span-2 grid sm:grid-cols-2 justify-between sm:gap-8">
            {/* Social Links */}
            <div className="mb-4 sm:mb-0 p-2">
              <p className="text-[17px] md:text-xl font-manrope-semi-bold mb-2 text-[#231F20]">Find us on</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { src: '/assets/sesor/links/facebook.png', alt: 'Facebook' },
                  { src: '/assets/sesor/links/instagram.png', alt: 'Instagram' },
                  { src: '/assets/sesor/links/tiktok.png', alt: 'TikTok' },
                  { src: '/assets/sesor/links/telegram.png', alt: 'Telegram' },
                  { src: '/assets/sesor/links/whatapp.png', alt: 'WhatsApp' },
                  { src: '/assets/sesor/links/linkedin.png', alt: 'LinkedIn' },
                ].map((item, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80 hover:-translate-y-1"
                  >
                    <img src={item.src} className="h-7 aspect-square" alt={item.alt} />
                  </a>
                ))}
              </div>
            </div>

            {/* QR Codes */}
            <div className="flex flex-wrap gap-2 justify-start p-2">
              <img
                src="/assets/sesor/links/SesorWhatsApp_FA.png"
                className="w-20 aspect-square object-contain"
                alt="WhatsApp QR"
              />
              <img
                src="/assets/sesor/links/SesorTelegram_FA.png"
                className="w-20 aspect-square object-contain"
                alt="Telegram QR"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
