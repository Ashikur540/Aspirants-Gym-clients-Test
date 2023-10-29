import { Input, Select, Space } from "antd";
import React, { useState } from "react";
import {
  AiOutlineLink,
  AiOutlinePlus,
  AiFillQuestionCircle,
  AiFillFilter,
} from "react-icons/ai";
import { BiImages, BiSolidShareAlt, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiChevronDown, FiVideo } from "react-icons/fi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { message, Upload } from "antd";
const { Dragger } = Upload;
import Image from "../../../../assets/images.png";

const AddNewWorkout = ({ setIsOpen }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // all filter state here
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isfilterFrom, setIsFilterFrom] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  // image upload
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const { TextArea } = Input;

  // multiple select
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // add link
  const [active, setActive] = useState(false);

  return (
    <div className="w-full fixed h-screen top-0 left-0 z-50 flex items-center justify-center bg-[#0000006b]">
      <div className="w-[80%] h-[700px] relative p-6 bg-white flex gap-3 rounded">
        {isOpenFilter && (
          <div className="w-[450px] h-[500px] overflow-y-scroll p-4 bg-white border rounded shadow-sm z-50 absolute top-[13%] left-[25%]">
            <div className="relative">
              {/* filter header */}
              <div className="flex items-center w-full justify-between ">
                <h3 className=" font-bold text-black text-[1rem]">
                  Excersice Filter
                </h3>
                <p className="text-[#6142ee] text-[0.9rem] cursor-pointer">
                  Clear All
                </p>
              </div>

              {/* filter by Category */}
              <div className=" my-4">
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => setIsFilterFrom(!isfilterFrom)}>
                  <h3 className="font-semibold text-black text-[0.9rem]">
                    Exversice From
                  </h3>
                  {isfilterFrom ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
                {isfilterFrom && (
                  <div className="flex items-center gap-4 mt-3  text-[0.9rem]  flex-wrap">
                    <div className="flex items-center gap-1  text-[#000]">
                      <input type="checkbox" name="Everfit" id="Everfit" />
                      <label htmlFor="Everfit" className=" select-none">
                        Everfit
                      </label>
                    </div>
                    <div className="flex items-center gap-1 text-[#000]">
                      <input
                        type="checkbox"
                        name="Custom Excersice"
                        id="Custom Excersice"
                      />
                      <label
                        htmlFor="Custom Excersice"
                        className=" select-none">
                        Custom Excersice
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <hr />

              {/* filter by from */}
              <div className=" my-4">
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => setIsCategory(!isCategory)}>
                  <h3 className="font-semibold text-black text-[0.9rem]">
                    Category
                  </h3>
                  {isCategory ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
                {isCategory && (
                  <div className="flex items-center gap-4 mt-3  text-[0.9rem] flex-wrap">
                    <div className="flex items-center gap-1  text-[#000]">
                      <input type="checkbox" name="Strength" id="Strength" />
                      <label htmlFor="Strength" className=" select-none">
                        Strength
                      </label>
                    </div>
                    <div className="flex items-center gap-1 text-[#000]">
                      <input
                        type="checkbox"
                        name="Body Weight"
                        id="Body Weight"
                      />
                      <label htmlFor="Body Weight" className=" select-none">
                        Body Weight
                      </label>
                    </div>

                    <div className="flex items-center gap-1  text-[#000]">
                      <input type="checkbox" name="Timed" id="Timed" />
                      <label htmlFor="Timed" className=" select-none">
                        Timed
                      </label>
                    </div>

                    <div className="flex items-center gap-1  text-[#000]">
                      <input
                        type="checkbox"
                        name="Distance (long)"
                        id="Distance (long)"
                      />
                      <label htmlFor="Distance (long)" className=" select-none">
                        Distance (long)
                      </label>
                    </div>

                    <div className="flex items-center gap-1  text-[#000]">
                      <input
                        type="checkbox"
                        name="Distance (short)"
                        id="Distance (short)"
                      />
                      <label
                        htmlFor="Distance (short)"
                        className=" select-none">
                        Distance (short)
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <hr />

              {/* filter by primary focus */}
              <div className=" my-4">
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => setIsPrimary(!isPrimary)}>
                  <h3 className="font-semibold text-black text-[0.9rem]">
                    Primary Focus
                  </h3>
                  {isPrimary ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
                {isPrimary && (
                  <div className="flex items-center gap-4 mt-3  text-[0.9rem] flex-wrap min-h-[60px] pb-3">
                    <button className="py-[0.4rem] px-5 text-gray-950  bg-gray-100 rounded-lg">
                      -
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
                      Arms
                    </button>

                    <button className="py-[0.4rem] px-3 text-gray-950  bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">
                      Celves
                    </button>
                  </div>
                )}
              </div>
              <div className=" sticky bottom-0 right-0 w-full z-40 bg-white pt-3 border-t flex items-end justify-end px-4">
                <button className="py-2 px-6 bg-[#4473f3] text-[0.9rem] rounded-lg text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        <RxCross2
          className=" absolute top-[-2%] right-[-1%] bg-white rounded-full p-[0.3rem] text-[2rem] text-black  cursor-pointer font-bold shadow-md"
          onClick={() => setIsOpen(false)}
        />
        {/* left side */}
        <div className="w-[40%] p-4 overflow-y-scroll">
          <div className="relative w-full">
            <input
              type="text"
              name=""
              id=""
              className="w-full py-3 px-12 mb-5 outline-none bg-gray-100 rounded"
            />
            <BiSearch
              size={25}
              color="#c4c4c4"
              className=" absolute left-3 top-3 cursor-pointer"
            />
            <AiFillFilter
              size={25}
              color="#c4c4c4"
              className=" absolute right-3 top-3 cursor-pointer"
              onClick={() => setIsOpenFilter(!isOpenFilter)}
            />
          </div>

          <div className="" onClick={() => setIsOpenFilter(false)}>
            <p className="text-gray-500 text-[0.7rem] mb-1">
              Most Recent(1230)
            </p>
            <div className=" grid grid-cols-2 gap-4 mt-4">
              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://everfit-exercise-library.s3.us-west-1.amazonaws.com/thumbnails-converted/DBB16-Mthumbnail.0000000.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ3LNWQN7GNFDJXLQ%2F20231025%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T052134Z&X-Amz-Expires=7200&X-Amz-Signature=60cb28678dd966d3d28eef1049889b9efcc1268dbdbd4871978f453b2efb625d&X-Amz-SignedHeaders=host"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/1531/Male/m/1531_2.jpg"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://everfit-exercise-library.s3.us-west-1.amazonaws.com/thumbnails-converted/DBB16-Mthumbnail.0000000.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ3LNWQN7GNFDJXLQ%2F20231025%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T052134Z&X-Amz-Expires=7200&X-Amz-Signature=60cb28678dd966d3d28eef1049889b9efcc1268dbdbd4871978f453b2efb625d&X-Amz-SignedHeaders=host"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/1531/Male/m/1531_2.jpg"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://everfit-exercise-library.s3.us-west-1.amazonaws.com/thumbnails-converted/DBB16-Mthumbnail.0000000.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ3LNWQN7GNFDJXLQ%2F20231025%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T052134Z&X-Amz-Expires=7200&X-Amz-Signature=60cb28678dd966d3d28eef1049889b9efcc1268dbdbd4871978f453b2efb625d&X-Amz-SignedHeaders=host"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/1531/Male/m/1531_2.jpg"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://everfit-exercise-library.s3.us-west-1.amazonaws.com/thumbnails-converted/DBB16-Mthumbnail.0000000.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ3LNWQN7GNFDJXLQ%2F20231025%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T052134Z&X-Amz-Expires=7200&X-Amz-Signature=60cb28678dd966d3d28eef1049889b9efcc1268dbdbd4871978f453b2efb625d&X-Amz-SignedHeaders=host"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>

              <div className=" bg-white rounded shadow-md">
                <img
                  src="https://www.bodybuilding.com/exercises/exerciseImages/sequences/1531/Male/m/1531_2.jpg"
                  alt=""
                  className="w-full h-[110px] object-cover rounded-t"
                />

                <h3 className="mt-2 p-2 text-[1rem] font-bold">
                  Lorem ipsum dolor, sit amet
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          className="w-[60%] overflow-y-scroll p-4"
          onClick={() => setIsOpenFilter(false)}>
          <div className="flex items-center justify-between w-full mb-5">
            <h1
              contentEditable
              className="outline-[1px] outline-[#c4c4c4]  py-2 px-2 text-[1.5rem] w-[80%] font-bold text-[#6800d8] border-none">
              Hello World
            </h1>
            <BiSolidShareAlt
              size={38}
              color="#c4c4c4"
              className="hover:border hover:border-[#6800d8] rounded p-1 border border-white"
            />
          </div>

          {/* add description */}
          <div>
            <p className="text-gray-500 text-[0.7rem] mb-1">DESCRIPTION</p>
            <TextArea
              rows={1}
              className="w-full py-2 px-3 border-[1px] mb-5 border-[#c4c4c4] outline-none"
            />
          </div>

          {/* drag and drop section */}
          <div className="w-full p-5 border-[3px] border-dotted rounded flex items-center gap-8 justify-center cursor-grab">
            <img src={Image} alt="image" className="w-[60px]" />
            <p>
              Drag exercises from <br /> the left to add
            </p>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-5 justify-between w-full mt-3">
            <button className="flex items-center gap-3 bg-[#e3e4f8] rounded ouline-none border-none py-3 w-full justify-center text-[#2b2e5c] font-semibold capitalize">
              <AiOutlinePlus /> add excersice
            </button>
            <button className="flex items-center gap-3 bg-[#e3e4f8] rounded ouline-none border-none py-3 w-full justify-center text-[#2b2e5c] font-semibold capitalize">
              <AiOutlinePlus /> add section
            </button>
          </div>
        </div>

        {/* save and close */}
        <div className=" absolute bottom-0 right-0 py-5 pr-9 bg-white w-full flex items-end justify-end">
          <button className="py-2 px-6 border border-[#c4c4c4] mr-4 rounded-md">
            Save
          </button>
          <button className="py-2 px-6 border border-[#c4c4c4] mr-4 bg-[#5158cf] text-white rounded-md">
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewWorkout;
