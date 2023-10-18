import React from "react";

import { Table } from "antd";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const TableData = () => {
  const columns = [
    {
      title: "Excercise",
      dataIndex: "Excercise",
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Primary Focus",
      dataIndex: "primaryFocus",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Category",
      dataIndex: "Category",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },

    {
      title: "Most Recent",
      dataIndex: "mostRecent",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },

    {
      title: "Custom",
      dataIndex: "Custom",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },

    {
      title: "",
      dataIndex: "threeDot",
    },
  ];
  const data = [
    {
      key: "1",
      Excercise: "JIncline Push-Up Medium",
      Tags: "--",
      primaryFocus: "Chest",
      Category: "Bodyweight",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "2",
      Excercise: "Dumbbell Step Ups With Bench",
      Tags: "--",
      primaryFocus: "	Shoulders",
      Category: "Strength",
      mostRecent: "1w",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "3",
      Excercise: "Dumbbell Rear Delt Row",
      Tags: "--",
      primaryFocus: "	Biceps",
      Category: "Strength",
      mostRecent: "1w",
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "4",
      Excercise: "Front Squats With Two Kettlebells",
      Tags: "--",
      primaryFocus: "	Quadriceps",
      Category: "Strength",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },

    {
      key: "1",
      Excercise: "JIncline Push-Up Medium",
      Tags: "--",
      primaryFocus: "Chest",
      Category: "Bodyweight",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "2",
      Excercise: "Dumbbell Step Ups With Bench",
      Tags: "--",
      primaryFocus: "	Shoulders",
      Category: "Strength",
      mostRecent: "1w",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "3",
      Excercise: "Dumbbell Rear Delt Row",
      Tags: "--",
      primaryFocus: "	Biceps",
      Category: "Strength",
      mostRecent: "1w",
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "4",
      Excercise: "Front Squats With Two Kettlebells",
      Tags: "--",
      primaryFocus: "	Quadriceps",
      Category: "Strength",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "1",
      Excercise: "JIncline Push-Up Medium",
      Tags: "--",
      primaryFocus: "Chest",
      Category: "Bodyweight",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "2",
      Excercise: "Dumbbell Step Ups With Bench",
      Tags: "--",
      primaryFocus: "	Shoulders",
      Category: "Strength",
      mostRecent: "1w",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "3",
      Excercise: "Dumbbell Rear Delt Row",
      Tags: "--",
      primaryFocus: "	Biceps",
      Category: "Strength",
      mostRecent: "1w",
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
    {
      key: "4",
      Excercise: "Front Squats With Two Kettlebells",
      Tags: "--",
      primaryFocus: "	Quadriceps",
      Category: "Strength",
      mostRecent: "1d",
      Custom: <IoCheckmarkDoneCircleOutline size={20} color="#30aa3a" />,
      threeDot: <BsThreeDotsVertical size={19} color="#636363" />,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="mt-6 px-10 h-[500px] overflow-y-scroll">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default TableData;
