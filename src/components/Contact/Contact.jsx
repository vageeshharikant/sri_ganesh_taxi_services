import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14 px-6 sm:px-12 font-sans">
        <div className="container">
          {/* Contact Info & Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gray-800 py-8 px-6 rounded-lg">
            {/* Contact Info */}
            <div className="space-y-4 text-white">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-gray-400">
                Reach out to us for any enquiries, bookings, or assistance. We’re here to help you!
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <FaPhone className="text-primary" />
                  <a href="tel:+919876543210" className="hover:text-primary duration-200">
                    +91 74831 96732
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  <a href="mailto:sriganeshtaxiservices@gmail.com" className="hover:text-primary duration-200">
                    sriganeshtaxiservices@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" /> Murdeshwar, Karnataka, India
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-4">
                <a href="https://wa.me/917483196732" target="_blank" className="text-xl text-white hover:text-primary">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-lg shadow-md font-sans">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Send a Message</h2>
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const phone = e.target.phone.value;
                  const message = e.target.message.value;
                  
                  // Construct mailto link
                  const mailtoLink = `mailto:support@example.com?subject=Enquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;

                  // Open mail client
                  window.location.href = mailtoLink;
                }}
              >
                <input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none" required />
                <input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none" required />
                <input name="phone" type="text" placeholder="Your Phone" className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none" required />
                <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none" rows="4" required></textarea>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded hover:bg-primary/80 transition">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
