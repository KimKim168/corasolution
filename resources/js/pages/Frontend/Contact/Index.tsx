import Layout from '@/pages/Buddhist/Layout'
import React from 'react'

const Index = () => {
  return (
    <Layout>
        <div className="max-w-screen-xl px-4 py-12 mx-auto">
  <div className="mb-8">
    <h2 className="text-3xl tracking-tight bg-gradient-to-r font-bold from-[#2d37a4] to-teal-500 text-transparent bg-clip-text mb-2">
      Contact Us For Any Questions
    </h2>

    <div className="no-tailwind">
      <p>
        <span style={{ fontSize: "18px" }}>
          Let’s collaborate and take your business to the next level. Contact us today to discuss how we can help you achieve your digital transformation goals.
        </span>
      </p>
    </div>
  </div>

  <div className="grid gap-8 overflow-hidden md:grid-cols-2">
    <div className="no-tailwind">
      <h3>
        <span style={{ color: "#2980b9" }}>
          <span style={{ fontSize: "20px" }}>Contact Info :</span>
        </span>
      </h3>

      <p>
        <span style={{ fontSize: "16px" }}>
          <img
            src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/email.png"
            style={{ float: "left", height: "20px", margin: "2px", width: "20px" }}
          />
          &nbsp; info@corasolutions.com
        </span>
      </p>

      <p>
        &nbsp; 010775589
        <span style={{ fontSize: "16px" }}>
          <img
            src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/phone (1).png"
            style={{ float: "left", height: "20px", margin: "2px", width: "20px" }}
          />
        </span>
      </p>

      <p>
        <span style={{ fontSize: "16px" }}>
          <img
            src="http://127.0.0.1:8000/assets/images/ckeditor/photos/1/gps.png"
            style={{ float: "left", height: "20px", margin: "2px", width: "20px" }}
          />
          &nbsp; Phnom Penh, Cambodia
        </span>
      </p>
    </div>

    <div className="no-tailwind">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2267432835793!2d104.9221177755532!3d11.535585888663165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950da4db34301%3A0x61232833a62cac36!2sRoyal%20University%20Of%20Law%20And%20Economics!5e0!3m2!1sen!2skh!4v1728464015262!5m2!1sen!2skh"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Index
