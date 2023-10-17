import { Link } from "react-router-dom";
import "./class.css";

const Class2 = () => {
  return (
    <div className="container m-auto">
      <div className="relative">
      <h1 className="gymTopClassShadow font-bold text-8xl opacity-50 text-center mb-5 ">CLASS</h1>
        <h1 className="top text-3xl mb-10">
            <br />
          JOIN OUR UPCOMING <br /> CLASSES NOW
        </h1>
      </div>
      <div className="flex flex-row  justify-center mb-10  gap-5">
        <Link>
          {" "}
          <button className="classBtn">MONDAY</button>
        </Link>
        <Link>
          <button className="classBtn">TUESDAY</button>
        </Link>
        <Link>
          <button className="classBtn">WEDNESDAY</button>
        </Link>
        <Link>
          <button className="classBtn">THURSDAY</button>
        </Link>
        <Link>
          {" "}
          <button className="classBtn">FRIDAY</button>
        </Link>
        <Link>
          {" "}
          <button className="classBtn">SATURDAY</button>
        </Link>
      </div>
      <div className="my-10 ">
        <div className="classInstructor grid grid-cols-5 text-center   p-2 bg-[#291B18] ">
          <div className="bg-[#161616] ">
            <h1 className="w-full text-2xl items-center">
              Class <br /> 01
            </h1>
          </div>
          <div>
            <p className="text-l">CLASS NAME</p>
            <h1 className="text-xl">CROSS COMBAT</h1>
          </div>
          <div>
            <p className="text-l">CLASS TIME</p>
            <h1 className="text-xl">7.00AM-9.00AM</h1>
          </div>
          <div>
            <p className="text-l">INSTRUCTOR</p>
            <h1 className="text-xl">NATALIA DOE</h1>
          </div>
          <div className="m-auto">
            <Link>
              <button className="tableBtn bg-[#494846]"> JOIN NOW </button>
            </Link>
          </div>
        </div>
        <div className="classInstructor grid grid-cols-5 text-center  p-2 mt-2 bg-[#291B18] ">
          <div className="bg-[#161616] ">
            <h1 className="w-full text-2xl items-center">
              Class <br /> 02
            </h1>
          </div>
          <div>
            <p className="text-l">CLASS NAME</p>
            <h1 className="text-xl">INDOOR CYCLING</h1>
          </div>
          <div>
            <p className="text-l">CLASS TIME</p>
            <h1 className="text-xl">7.00AM-9.00AM</h1>
          </div>
          <div>
            <p className="text-l">INSTRUCTOR</p>
            <h1 className="text-xl">IVAN ALEX</h1>
          </div>
          <div className="m-auto">
            <Link>
              <button className="tableBtn bg-[#494846]"> JOIN NOW </button>
            </Link>
          </div>
        </div>
        <div className="classInstructor grid grid-cols-5 text-center  p-2 mt-2 bg-[#291B18] ">
          <div className="bg-[#161616] ">
            <h1 className="w-full text-2xl items-center">
              Class <br /> 03
            </h1>
          </div>
          <div>
            <p className="text-l">CLASS NAME</p>
            <h1 className="text-xl">WEIGHT LIFTING</h1>
          </div>
          <div>
            <p className="text-l">CLASS TIME</p>
            <h1 className="text-xl">7.00AM-9.00AM</h1>
          </div>
          <div>
            <p className="text-l">INSTRUCTOR</p>
            <h1 className="text-xl">MILLER ZOE</h1>
          </div>
          <div className="m-auto">
            <Link>
              <button className="tableBtn bg-[#494846]"> JOIN NOW </button>
            </Link>
          </div>
        </div>
        <div className="classInstructor grid grid-cols-5 text-center  p-2 mt-2 bg-[#291B18] ">
          <div className="bg-[#161616] ">
            <h1 className="w-full text-2xl items-center">
              Class <br /> 04
            </h1>
          </div>
          <div>
            <p className="text-l">CLASS NAME</p>
            <h1 className="text-xl">INDOOR RUNNING</h1>
          </div>
          <div>
            <p className="text-l">CLASS TIME</p>
            <h1 className="text-xl">7.00AM-9.00AM</h1>
          </div>
          <div>
            <p className="text-l">INSTRUCTOR</p>
            <h1 className="text-xl">DAVID</h1>
          </div>
          <div className="m-auto">
            <Link>
              <button className="tableBtn bg-[#494846]"> JOIN NOW </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class2;
