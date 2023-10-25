import { Input, Select, Space } from "antd";
import React, { useState } from "react";
import {
  AiOutlineLink,
  AiOutlinePlus,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BiImages, BiSolidShareAlt } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const CreateExserciseModal = ({ setIsOpen }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

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

  // add link
  const [active, setActive] = useState(false);

  return (
    <div className="w-full fixed h-screen top-0 left-0 z-50 flex items-center justify-center bg-[#0000006b]">
      <div className="w-[70%] h-[600px] relative p-6 bg-white flex gap-3 rounded">
        <RxCross2
          className=" absolute top-[-2%] right-[-1%] bg-white rounded-full p-[0.3rem] text-[2rem] text-black  cursor-pointer font-bold shadow-md"
          onClick={() => setIsOpen(false)}
        />
        {/* left side */}
        <div className="w-[60%] overflow-y-scroll p-4">
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
          {/* primary focus section */}
          <p className="text-gray-500 text-[0.7rem] mb-1">PRIMARY FOCUS</p>
          <input
            type="text"
            className="w-full py-2 px-3 border-[1px] mb-5 border-[#c4c4c4] outline-none"
            name=""
            id=""
          />
          {/* TRACKING FIELD dragable section */}
          <p className="  text-gray-500 text-[0.7rem] mb-1">TRACKING FIELD</p>
          <div className=" bg-gray-200 p-4 rounded mb-5">
            <select
              name=""
              id=""
              className="w-full py-2 px-3 border-[1px] border-[#c4c4c4] cursor-pointer outline-none">
              <option value="">Select a field</option>
              <option value="">height</option>
              <option value="">width</option>
              <option value="">havit</option>
              <option value="">Gain</option>
            </select>
          </div>
          {/* INSTRUCTIONS */}
          <p className="  text-gray-500 text-[0.7rem] mb-1">
            INSTRUCTIONS (Separate each step on a new line)
          </p>
          <div className="border border-[#c4c4c4] p-4 h-[200px] overflow-y-scroll mb-4">
            <p className="text-[#282c4b] font-semibold text-[0.9rem] mb-3">
              <span className=" select-none text-[#b1b0b0]">1. </span>
              Stand up straight while holding a dumbbell on each hand (palms
              facing the side of your legs).
            </p>

            <p className="text-[#282c4b] font-semibold text-[0.9rem] mb-3">
              <span className=" select-none text-[#b1b0b0]">2. </span>
              Place the right foot on the elevated platform. Step on the
              platform by extending the hip and the knee of your right leg. Use
              the heel mainly to lift the rest of your body up and place the
              foot of the left leg on the platform as well. Breathe out as you
              execute the force required to come up.
            </p>

            <p className="text-[#282c4b] font-semibold text-[0.9rem] mb-3">
              <span className=" select-none text-[#b1b0b0]">3. </span>
              Step down with the left leg by flexing the hip and knee of the
              right leg as you inhale. Return to the original standing position
              by placing the right foot of to next to the left foot on the
              initial position.
            </p>

            <p className="text-[#282c4b] font-semibold text-[0.9rem] mb-3">
              <span className=" select-none text-[#b1b0b0]">4. </span>
              Repeat with the right leg for the recommended amount of
              repetitions and then perform with the left leg.
            </p>
          </div>

          {/* add link section */}
          <div
            className="flex items-center gap-4 font-bold text-[#5f5f5f]  mb-4 cursor-pointer  w-full"
            onClick={() => setActive(!active)}>
            <AiOutlineLink
              className="p-2 bg-[#e0e0e0] rounded-full"
              size={35}
            />
            {active ? "Delete link" : "Add link"}
          </div>
          {active && (
            <input
              type="text"
              className="w-full py-2 px-3 border-[1px] mb-5 border-[#c4c4c4] outline-none"
              name=""
              id=""
            />
          )}
        </div>

        {/* right side */}
        <div className="w-[40%] bg-gray-100 p-4">
          <h3 className="mb-6 font-bold text-[1.2rem]">Media</h3>
          <p className=" text-gray-500 text-[0.7rem] mb-1">VIDEO</p>
          <input
            type="text"
            className="w-full py-2 px-3 border-[1px] mb-5 border-[#c4c4c4] outline-none"
            name=""
            id=""
          />

          <label
            htmlFor="video"
            className="flex items-center font-bold text-[#5f5f5f] gap-4 mb-8">
            <FiVideo className="p-2 bg-[#e0e0e0] rounded-full" size={35} />
            Upload Video
          </label>
          <input type="file" id="video" className="hidden" />

          <p className="text-gray-500 text-[0.7rem] mb-1">PHOTOS</p>
          <div className="">
            <Dragger {...props}>
              <div className="flex items-center gap-3 p-4">
                <p className="ant-upload-drag-icon">
                  <BiImages color="#c4c4c4" size={50} />
                </p>

                <p className="ant-upload-hint">
                  Drag and drop up to 4 images here or Choose file
                </p>
              </div>
            </Dragger>
            <p className="text-gray-500 text-[0.7rem] mt-1">
              Accepted: jpg, jpeg, png
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExserciseModal;
