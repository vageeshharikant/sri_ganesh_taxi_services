import carPng from "../../assets/etios-inside.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${carPng})`,
          backgroundSize: "cover", // Ensures full coverage without shrinking
          backgroundPosition: "center", // Keeps the focal point in the center
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-12 px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Sri Ganesh Taxi Service
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button
             className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => {
              window.location.href = "mailto:sriganeshtaxiservices@gmail.com?subject=Taxi Inquiry";
              }
            }
          >
              Email Query
          </button>
          <button
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
            onClick={() => (window.location.href = "tel:+917483196732")}
          >
            CALL +91 74831 96732
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
