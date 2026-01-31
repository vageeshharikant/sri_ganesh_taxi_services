import car4 from "../../assets/black-etios.png";
import innova from "../../assets/innova.png";
import car3 from "../../assets/white-ertiga.png";
import car2 from "../../assets/white_swift.png";

const carList = [
  {
    name: "Etios",
    price: 3300,
    image: car4,
    aosDelay: "1000",
  },
  {
    name: "Innova",
    price: 5500,
    image: innova,
    aosDelay: "0",
  },
  {
    name: "Swift",
    price: 3300,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Ertiga",
    price: 4500,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div id="carlist" className="pb-24 px-6 sm:px-12 py-10 sm:py-16">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-sans mb-3"
        >
          Choose the Perfect Ride for Your Journey
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-lg pb-10">
          We offer a variety of well-maintained, comfortable, and affordable cars for your travel needs. Whether it's a short local trip or a long journey, find the ideal vehicle at the best price.
        </p>

        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group bg-yellow-50"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold text-black dark:text-black-300">
                    <p>Rs {data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3 text-black dark:text-black-300">
                  250Km/day
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}

        <div className="grid place-items-center mt-8">
          <a href="tel:+917483196732">
            <button data-aos="fade-up" className="button-outline">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CarList;
