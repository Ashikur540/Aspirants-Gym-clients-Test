// // import React from 'react';
// import { Button, Dropdown, Image, Menu, Space, Table } from 'antd';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import './ExerciesTable.css';
// import { AiOutlineEdit , AiOutlineDelete } from 'react-icons/ai';
// import { BiSolidDuplicate } from 'react-icons/bi';
// import { useEffect, useState } from 'react';

// const columns = [
// {
//   title: '',
//   id: 'selection',
//   render: (data) => (
//     <>
//       <div className="image-container">
//         <Image
//           className="image"
//           src={data.img}
//           preview={false}
//         />
//       </div>
//     </>
//   ),
//   width: 80,
// },
//   {

//     title: `Exercises`,
//     dataIndex: 'exercises',
//     id: 'exercises',
//     render: (text) => <span className='text-l font-semibold'>{text}</span>,
//   },

//   {
//     title: 'Tag',
//     dataIndex: 'tag',
//     id: 'tag',
//   },

//   {
//     title: 'Primary Focus',
//     dataIndex: 'primaryFocus',
//     id: 'primaryFocus',
//     sorter:(rec1,rec2)=>{
//       return rec1.primaryFocus >  rec2.primaryFocus
//     }
//   },
//   {
//     title: 'Category',
//     dataIndex: 'category',
//     id: 'category',
//     sorter:(rec1,rec2)=>{
//       return rec1.category >  rec2.category
//     }
//   },
//   {
//     title: 'Most Recent',
//     dataIndex: 'mostRecent',
//     id: 'mostRecent',
//     sorter:(rec1,rec2)=>{
//       return rec1.mostRecent >  rec2.mostRecent
//     }
//   },
//   {
//     title: 'Custom',
//     dataIndex: 'custom',
//     id: 'custom',
//   },
//   {
//     title: 'Action',
//     id: 'action',
//     style:{},
//     render: () => (
//       <Space size="middle">
//       <Dropdown
//   overlay={(
//     <Menu className=''>
// <Menu.Item key="1">
//   <div className='flex gap-3 items-center'>
//     <AiOutlineEdit /> Edit
//   </div>
// </Menu.Item>
//       <Menu.Item key="2">
//         <div className='flex gap-3 items-center'>
//           <BiSolidDuplicate /> Duplicate
//         </div>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <div className='flex gap-3 items-center'>
//           <AiOutlineDelete /> Delete
//         </div>
//       </Menu.Item>
//     </Menu>
//   )}
// >
//   <Button>
//     <BsThreeDotsVertical />
//   </Button>
// </Dropdown>

//       </Space>
//     ),
//   },

// ];
// const data1 = [
//   {
//     id: 1 ,
//     img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Medicine Ball Full Twist',
//     tag: "--",
//     primaryFocus: 'Abdominals',
//     category: 'Timed',
//     mostRecent: "1 days",
//
//   },
//   {
//     id: 2,
//     img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Incline Push-Up Medium',
//     tag: "--",
//     primaryFocus: 'Chest',
//     category: 'Timed',
//     mostRecent: "3 days",
//
//   },
//   {
//     id: 3,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Abdominals',
//     category: 'Timed',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 4,
//     img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Dumbbell Rear Delt Row',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 5,
//     img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Medicine Ball Full Twist',
//     tag: "--",
//     primaryFocus: 'Abdominals',
//     category: 'Timed',
//     mostRecent: "1 days",
//
//   },
//   {
//     id: 6,
//     img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Incline Push-Up Medium',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "2 days",
//
//   },
//   {
//     id: 7,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Chest',
//     category: 'Timed',
//     mostRecent: "8 days",
//
//   },
//   {
//     id: 8,
//     img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Dumbbell Rear Delt Row',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "5 days",
//
//   },
//   {
//     id: 9,
//     img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Medicine Ball Full Twist',
//     tag: "--",
//     primaryFocus: 'Abdominals',
//     category: 'Timed',
//     mostRecent: "1 days",
//
//   },
//   {
//     id: 10,
//     img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Incline Push-Up Medium',
//     tag: "--",
//     primaryFocus: 'Chest',
//     category: 'Timed',
//     mostRecent: "2 days",
//
//   },
//   {
//     id: 11,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 16,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 13,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 14,
//     img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
//     exercises: 'Plyo Kettlebell Pushups',
//     tag: "--",
//     primaryFocus: 'Quadeiceps',
//     category: 'strength',
//     mostRecent: "4 days",
//
//   },
//   {
//     id: 12,
//     img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     exercises: 'Dumbbell Rear Delt Row',
//     tag: "--",
//     primaryFocus: 'Chest',
//     category: 'Timed',
//     mostRecent: "3 days",
//
//   },

// ];

// const ExerciseTable = () => {
//   const [loading,setLoading] = useState(false)
//  const [dataSource,setDataSource] = useState(data1)
//   useEffect(()=>{
//     setLoading(true)
//     // fetch(data1)
//     // .then(res=>res.json())
//     // .then(data=>{
//     //   setDataSource([data])
//     // }).catch(err=>{
//     //   console.log(err)
//     // }).finally(()=>{
//     //   setLoading(false)
//     // })
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   },[])

//  return(
//   <Table className='p-2 m-2'
//   columns={columns}
//   rowSelection={{}}

//   dataSource={dataSource}
//   pagination={
//    { pageSize:7}
//   }
//   loading={loading}
// />
//  )
// };

import { Button, Dropdown, Image, Menu, Space } from "antd";
import DataTable from "react-data-table-component";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSolidDuplicate } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";


const columns = [
  {
    name: '', // Replace 'Image Column' with the desired column title
    selector: 'img',
    cell: (row) => (
      <div className="image-container">
        <Image
          className="image"
          src={row.img}
          preview={false}
        />
      </div>
    ),
    width: '80px',
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
    name: "Action",
    cell: () => (
      <Space size="middle">
       <div className="flex items-center ">
       <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">
                <div className="flex gap-3 items-center">
                  <AiOutlineEdit /> Edit
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <div className="flex gap-4 items-center">
                  <BiSolidDuplicate /> Duplicate
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <div className="flex gap-4 items-center">
                  <AiOutlineDelete /> Delete
                </div>
              </Menu.Item>
            </Menu>
          }
        >
          <Button>
            <BsThreeDotsVertical />
          </Button>
        </Dropdown>
       </div>
      </Space>
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
    category: "Timed",
    mostRecent: "1 days",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Incline Push-Up Medium",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "3 days",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed",
    mostRecent: "4 days",
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
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Incline Push-Up Medium",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "2 days",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "8 days",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Dumbbell Rear Delt Row",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "5 days",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Medicine Ball Full Twist",
    tag: "--",
    primaryFocus: "Abdominals",
    category: "Timed",
    mostRecent: "1 days",
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
  },
  {
    id: 16,
    img: "https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300",
    exercises: "Plyo Kettlebell Pushups",
    tag: "--",
    primaryFocus: "Quadeiceps",
    category: "strength",
    mostRecent: "4 days",
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
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    exercises: "Dumbbell Rear Delt Row",
    tag: "--",
    primaryFocus: "Chest",
    category: "Timed",
    mostRecent: "3 days",
  },
];

function ExerciseTable() {
  return <DataTable className="container mx-auto"
   columns={columns}
    data={data}
    pagination
     />;
}

export default ExerciseTable;
