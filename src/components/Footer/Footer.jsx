import {
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl font-sans">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-sans">
              Sri Ganesh Taxi Services
            </h1>
            <p className="text-sm">
              Your trusted travel partner in Murdeshwar! We offer safe, reliable,
              and affordable taxi services to make your journeys comfortable.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-primary" />
              <p>Murdeshwar, Karnataka, India</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary duration-200">
              +91 74831 96732
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
  
              <a
                href="https://wa.me/917483196732"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-primary duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:sriganeshtaxiservices@gmail.com"
                className="text-2xl text-gray-700 hover:text-primary duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
