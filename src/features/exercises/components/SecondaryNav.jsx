import { useState } from "react";
import { BiFilter, BiPlus } from "react-icons/bi";
import CreateExserciseModal from "./CreateExcersice/CreateExserciseModal";
const SecondaryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="px-10 py-2">
        <div className="flex justify-between items-center gap-4">
          <div className=" flex items-center gap-4">
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md ">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pl-12 pr-4 text-gray-100 border rounded-md outline-none bg-inputBg border-border_dark focus:border-gray-400"
                />
              </div>
            </form>

            <button className="inline-flex px-6 py-2 bg-inputBg rounded-md border-2 border-border_dark  justify-center items-center gap-2">
              <BiFilter size={24} />
              <span>Filter</span>
            </button>
          </div>
          <div className="flex gap-4">
            <button className="secondary-button">
              <BiFilter size={24} />
              <span>Tags</span>
            </button>
            <button
              className=" px-10 py-1 rounded-md text-white font-medium !bg-[#5158cf] flex gap-3 items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}>
              <BiPlus size={24} className="" />
              <span className="">Add new Exercise</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && <CreateExserciseModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default SecondaryNav;
