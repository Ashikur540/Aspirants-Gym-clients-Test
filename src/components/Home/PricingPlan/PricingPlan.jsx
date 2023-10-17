import { Link } from "react-router-dom";
import { Statistic } from "./Statistics";

const PricingPlan = () => {
  const pricingData = [
    {
      subscriptionType: "Fitness Basic",
      price: 20,
      categoryFacilities: [
        "Access to basic gym equipment",
        "Locker room access",
      ],
    },
    {
      subscriptionType: "Premium Fit",
      price: 39,
      categoryFacilities: [
        "Access to advanced gym equipment",
        "Locker room access",
        "Group fitness classes",
      ],
    },
    {
      subscriptionType: "Premium Plus",
      price: 45,
      categoryFacilities: [
        "Access to advanced gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal training sessions",
      ],
    },
  ];
  const tagLetters = "most populer".split("");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 tracking-wide text-3xl font-bold leading-none  sm:text-4xl md:mx-auto text-white">
          Choose pricing plans that suites you
        </h2>
      </div>
      <div className="grid group max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {pricingData?.map((price, i) => {
          return (
            <div
              className={`flex flex-col justify-between p-10 transition-all duration-30 hover:scale-110  ease-in-out rounded shadow-sm  hover:shadow relative ${price.price == 20 ? 'scale-110 bg-[#3a3a3a] ' : 'scale-95 '}`}
              key={i}
            >
              {/* clip-path: polygon(0 0, 99% 0, 100% 61%, 0% 100%); */}
              {price.price == 20 && (
                <div
                  className="p-2 bg-[#edfb13] uppercase absolute top-0 right-4"
                  style={{
                    "clip-path": "polygon(0 0, 99% 0, 100% 96%, 0% 100%)",
                  }}
                >
                  {tagLetters.map((letter, i) => (
                    <small key={i} className="block uppercase text-black">
                      {letter}
                    </small>
                  ))}
                </div>
              )}
              <div className="text-left mt-6">
                <div className="text-sm leading-snug font-semibold uppercase text-[#caceca]">
                  {price?.subscriptionType}
                </div>
                <div className="flex mt-2">
                  <div className={`mr-1 text-5xl font-bold ${ price.price == 20 ? 'text-[#fff]' :'text-[#edfb13]'}`}>
                    {" "}
                    {price.price}$/
                  </div>
                  <div className="text-gray-400 text-xl"> mo</div>
                </div>
                <div className="mt-8 space-y-3">
                  {price?.categoryFacilities.map((facility, i) => {
                    return (
                      <div
                        className="text-gray-400 flex justify-start gap-2"
                        key={i}
                      >
                        <span className="inline-flex">🧩</span>
                        {facility}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button>
                <Link
                  to={`/ pricing ? plan = ${price?.subscriptionType.toLocaleLowerCase()}`}
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-[#4d4d4dbe]  rounded shadow-md group-hover:bg-[#edfb13] focus:shadow-outline focus:outline-none border-x-4 border-[#edfb13] group-hover:border-none group:hover:text-[#000]"
                >
                  Start for free
                </Link>
              </button>
            </div>
          );
        })}
      </div>

      <Statistic />
    </div>
  );
};

export default PricingPlan;
