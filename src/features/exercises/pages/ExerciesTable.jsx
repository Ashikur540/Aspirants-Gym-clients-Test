

import  { useState } from "react";
import { Dropdown } from 'flowbite-react';
import DataTable from "react-data-table-component";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSolidDuplicate } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const columns = [
  {
    name: "Image",
    cell: (row) => (
      <div className="image-container">
        <img
          className="image"
          src={row.img}
          alt={row.exercises}
          style={{ width: "60px", height: "60px" }}
        />
      </div>
    ),
  },
  {
    name: "Exercises",
    selector: (row) => row.exercises,
    sortable: true,
  },
  {
    name: "Tags",
    selector: (row) => row.tags,
    sortable: true,
  },
  {
    name: "Primary Focus",
    selector: (row) => row.primaryFocus,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: "Most Recent",
    selector: (row) => row.mostRecent,
    sortable: true,
  },
  {
    name: "Actions",
    cell: () => (
      <div>
        <Dropdown label={<BsThreeDotsVertical/>} dismissOnClick={false}>
      <Dropdown.Item><AiOutlineEdit/>Edit</Dropdown.Item>
      <Dropdown.Item><BiSolidDuplicate/>Duplicate</Dropdown.Item>
      <Dropdown.Item><AiOutlineDelete/>Delete</Dropdown.Item>
      
    </Dropdown>
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Medicine Ball Full Twist",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed 4",
    mostRecent: "1 days",
    showDropdown: false,
    
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Incline Push-Up Medium",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "3 days",
    showDropdown: false,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed",
    mostRecent: "4 days",
    showDropdown: false,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Dumbbell Rear Delt Row",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
    
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Medicine Ball Full Twist",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed",
    mostRecent: "1 days",
    showDropdown: false,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Incline Push-Up Medium",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "2 days",
    showDropdown: false,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "8 days",
    showDropdown: false,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Dumbbell Rear Delt Row",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "5 days",
    showDropdown: false,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Medicine Ball Full Twist",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed",
    mostRecent: "1 days",
    showDropdown: false,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Incline Push-Up Medium",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "2 days",
    
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
    showDropdown: false,
  },
  {
    id: 16,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
    showDropdown: false, 
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
    
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
    showDropdown: false,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Dumbbell Rear Delt Row",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "3 days",
    showDropdown: false,
  },
];

function ExerciseTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowSelectionChange = (selectedRows) => {
    setSelectedRow(selectedRows[0]);
  };

  const [tableData, setTableData] = useState(data);

  

  return (
    <DataTable
      className="container mx-auto"
      columns={columns}
      data={tableData}
      selectionMode="single"
      selectableRows={[...Array(tableData.length).keys()]}
      onRowSelectionChange={handleRowSelectionChange}
     
      pagination
    />
  );
}

export default ExerciseTable;
