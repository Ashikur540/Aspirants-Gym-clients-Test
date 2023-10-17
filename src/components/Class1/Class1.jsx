import "./class.css";

const Class1 = () => {
  return (
    <div className="container m-auto">
      <div className="relative">
      <h1 className="gymTopClassShadow font-bold  text-8xl opacity-50 text-center mb-5 ">CLASS</h1>
        <h1 className="top text-3xl m-auto">
          <br />
          JOIN OUR UPCOMING <br /> CLASSES NOW
        </h1>
      </div>
      <div className="class flex flex-wrap justify-center gap-2 my-5 ">
        <div className="card w-96  shadow-xl image-full md:w-1/3  lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/9786298/pexels-photo-9786298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cycling"
            />
          </figure>
          <div className="gymClassCard card-body hover:bg-[#fafa0f]  hover:bg-opacity-70  hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center m-auto text-2xl hover:text-9xl">
              CYCLING
            </h2>
          </div>
        </div>
        

        <div className=" card w-96 bg-base-100 shadow-xl image-full  md:w-1/3  lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
            />
          </figure>
          <div className="card-body gymClassCard hover:bg-[#fafa0f]  hover:bg-opacity-70  hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center m-auto text-2xl hover:text-9xl">
              BENCHPRESS
            </h2>
          </div>
        </div>
        <div className=" card  w-96 bg-base-100 shadow-xl image-full  md:w-1/3  lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/3837474/pexels-photo-3837474.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Shoes"
            />
          </figure>
          <div className="card-body gymClassCard hover:bg-[#fafa0f]  hover:bg-opacity-70 hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center m-auto text-2xl hover:text-9xl">
              PUSHUPS
            </h2>
          </div>
        </div>
        <div className="gymClassCard card w-96 bg-base-100 shadow-xl image-full  md:w-1/3  lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/7991683/pexels-photo-7991683.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Shoes"
            />
          </figure>
          <div className="card-body gymClassCard  hover:bg-[#fafa0f] hover:bg-opacity-70 hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center  m-auto text-2xl hover:text-9xl">
              BOXING
            </h2>
          </div>
        </div>
        <div className="gymClassCard card w-96 bg-base-100 shadow-xl image-full  md:w-1/3  lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/6456140/pexels-photo-6456140.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Shoes"
            />
          </figure>
          <div className="card-body gymClassCard hover:bg-[#fafa0f] hover:bg-opacity-70 hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center m-auto text-2xl hover:text-9xl">
              CARDIO
            </h2>
          </div>
        </div>
        <div className="gymClassCard card w-96 bg-base-100 shadow-xl image-full  md:w-1/3 lg:w-1/4">
          <figure>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Shoes"
            />
          </figure>
          <div className="card-body gymClassCard hover:bg-[#fafa0f] hover:bg-opacity-70 hover:rounded-[1rem]">
            <h2 className="text flex justify-center hover:text-black items-center m-auto text-2xl hover:text-9xl">
              ZUMBA
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class1;
