import CarPng from "../../assets/white-etios.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 font-sans px-6 sm:px-12 py-10 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 sm:gap-12">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Sri Ganesh Travel Hub Car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-sans"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                <strong>Sri Ganesh Taxi Services</strong> is the most trusted and 
                reliable taxi service in <strong>Murdeshwar</strong>. We specialize in providing 
                safe, comfortable, and affordable transportation to locals 
                and tourists alike.
              </p>
              <p data-aos="fade-up">
                Whether you need a local ride or a long-distance travel package, 
                we offer well-maintained vehicles with experienced drivers. 
                Customer satisfaction is our priority, and we strive to make every journey hassle-free and enjoyable.
              </p>
              <p data-aos="fade-up">
                Book your ride with us today and experience a smooth, 
                professional taxi service at the best price!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
