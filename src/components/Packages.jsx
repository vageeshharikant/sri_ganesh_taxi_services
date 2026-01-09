
const packagesData = [
  {
    id: 1,
    title: "Beach Paradise",
    description: "Enjoy the serene beauty of golden beaches and crystal-clear waters.",
    price: "Starting from ₹10,000",
    bgImage: "https://source.unsplash.com/600x400/?beach",
  },
  {
    id: 2,
    title: "Mountain Escape",
    description: "Experience breathtaking views and peaceful mountain atmosphere.",
    price: "Starting from ₹12,000",
    bgImage: "https://source.unsplash.com/600x400/?mountains",
  },
  {
    id: 3,
    title: "City Adventure",
    description: "Explore bustling cities with guided tours and luxury stays.",
    price: "Starting from ₹15,000",
    bgImage: "https://source.unsplash.com/600x400/?city",
  },
  {
    id: 4,
    title: "Desert Safari",
    description: "Ride through sand dunes and experience traditional desert culture.",
    price: "Starting from ₹8,500",
    bgImage: "https://source.unsplash.com/600x400/?desert",
  },
];

// Your contact email
const email = "sriganeshtaxiservices@gmail.com"; // Replace with actual email

const Packages = () => {
  // Function to open email client with subject and body pre-filled
  const handleEmailEnquiry = (packageName) => {
    const subject = encodeURIComponent(`Enquiry about ${packageName} Package`);
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in the ${packageName} package. Could you please share more details?\n\nThank you!`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 py-16 font-sans">
      <h1 className="text-4xl font-bold font-sans text-center mb-10">Travel Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg group flex flex-col justify-end"
            style={{
              backgroundImage: `url(${pkg.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-500 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold">{pkg.title}</h2>
              <p className="text-sm">{pkg.description}</p>
              <p className="mt-2 font-bold">{pkg.price}</p>

              {/* Enquiry Button */}
              <button
                onClick={() => handleEmailEnquiry(pkg.title)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4"
              >
                Enquire via Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
