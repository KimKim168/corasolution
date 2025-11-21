  import Layout from '@/pages/Buddhist/Layout';
  import { Link } from '@inertiajs/react';
  import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

  const Index = () => {
      const contactItems = [
          {
              id: 1,
              title: "Email",
              icon: <MailIcon />,
              href: "mailto:info@corasolutions.com",
              value: "info@corasolutions.com",
          },
          {
              id: 2,
              title: "Phone",
              icon: <PhoneIcon />,
              href: "tel:+010775589",
              value: "+010775589",
          },
          {
              id: 3,
              title: "Office",
              icon: <MapPinIcon />,
              href: "https://goo.gl/maps/YOUR_MAP_LINK",
              value: "Phnom Penh, Cambodia",
          },
      ];

      return (
          <Layout>
              <div className="mx-auto section-container text-center py-12">
                  {/* Title */}
                  <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl ">
                    Contact Us
                  </h2>
                  <div className='border-b-2 border-primary pb-2 max-w-48 mx-auto'></div>
                  <p className="mt-2 text-base text-gray-700 max-w-[50ch] mx-auto sm:text-lg">
                      Let’s collaborate and take your business to the next level. Contact us today to discuss how we can help you achieve your
                      goals.
                  </p>

                  {/* Contact Grid */}
                  <div className="mt-5 grid gap-10 px-6 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                      {contactItems.map((item) => (
                          <div
                              key={item.id}
                              className="flex flex-col items-center gap-2 rounded-lg p-6 bg-gray-50 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl text-center"
                          >
                              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary">
                                  {item.icon}
                              </div>
                              <Link href={item.href} className="font-medium text-primary">
                                  {item.value}
                              </Link>
                          </div>
                      ))}
                  </div>

                  {/* Map */}
                  <div className="mt-12">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2267432835793!2d104.9221177755532!3d11.535585888663165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950da4db34301%3A0x61232833a62cac36!2sRoyal%20University%20Of%20Law%20And%20Economics!5e0!3m2!1sen!2skh!4v1728464015262!5m2!1sen!2skh"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="mt-6 rounded-lg shadow-lg"
                      ></iframe>
                  </div>
              </div>
          </Layout>
      );
  };

  export default Index;
