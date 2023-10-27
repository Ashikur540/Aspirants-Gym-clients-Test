// import { Button, Dropdown, Menu, Space, Table } from "antd";
// import { useEffect } from "react";
// import { useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { BiSolidDuplicate } from "react-icons/bi";
// import { BsThreeDotsVertical } from "react-icons/bs";

// const data1 = [
//   {
//     workOuts: (
//       <>
//         <h1 className="text-2xl font-bold">Lower Body 40:20 5x5 - Demo</h1>
//         <p className="text-xl">
//           Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
//         </p>
//         <a href=""> Full Body Cool Down (4) </a> /{" "}
//         <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
//       </>
//     ),
//     tags: "--",
//     exercises: 14,
//     mostRecent: "2d",
//     owner: "Md. Raihan Uddin Tuhin 201-35-559",
//   },
//   {
//     workOuts: (
//       <>
//         <h1 className="text-2xl font-bold">Lower Body 40:20 5x5 - Demo</h1>
//         <p className="text-xl">
//           Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
//         </p>
//         <a href=""> Full Body Cool Down (4) </a> /{" "}
//         <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
//       </>
//     ),
//     tags: "--",
//     exercises: 14,
//     mostRecent: "2d",
//     owner: "Md. Raihan Uddin Tuhin 201-35-559",
//   },
//   {
//     workOuts: (
//       <>
//         <h1 className="text-2xl font-bold">Lower Body 40:20 5x5 - Demo</h1>
//         <p className="text-xl">
//           Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
//         </p>
//         <a href=""> Full Body Cool Down (4) </a> /{" "}
//         <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
//       </>
//     ),
//     tags: "--",
//     exercises: 14,
//     mostRecent: "2d",
//     owner: "Md. Raihan Uddin Tuhin 201-35-559",
//   },
// ];

// const columns = [
//   {
//     title: "Workouts",
//     dataIndex: "workOuts",
//     key: "workOuts",
//   },
//   {
//     title: "Tags",
//     dataIndex: "tags",
//     key: "tags",
//   },
//   {
//     title: "Exercises",
//     dataIndex: "exercises",
//     key: "exercises",
//   },
//   {
//     title: "Most Recent",
//     dataIndex: "mostRecent",
//     key: "mostRecent",
//   },
//   {
//     title: "Owner",
//     dataIndex: "owner",
//     key: "owner",
//   },
//   {
//     title: "Action",
//     key: "action",
//     style: {},
//     render: () => (
//       <Space size="middle">
//        <Dropdown
//   overlay={(
//     <Menu className=''>
      
//       <Menu.Item key="2">
//         <div className='flex gap-4 items-center'>
//           <BiSolidDuplicate /> Duplicate
//         </div>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <div className='flex gap-4 items-center'>
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

// const ExercisesWorkOut = () => {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState(data1);
//   useEffect(() => {
//     setLoading(true);

//     // fetch(data1)
//     // .then(res=>res.json())
//     // .then(data=>{
//     //   setDataSource(data)
//     // }).catch(err=>{
//     //   console.log(err)
//     // }).finally(()=>{
//     //   setLoading(false)
//     // })
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);
//   return (
//     <Table
//       columns={columns}
//       rowSelection={{}}
//       dataSource={dataSource}
//       loading={loading}
//     />
//   );
// };

 

import { Button, Dropdown, Menu, Space } from 'antd';
import DataTable from 'react-data-table-component';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiSolidDuplicate } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const columns = [
    {
        name: 'Workouts',
        selector: row => row.workOuts,
        sortable: true,
    },
    // {
    //     name: 'Tags',
    //     selector: row => row.tags,
    //     sortable: true,
    // },
    {
        name: 'Exercises',
        selector: row => row.exercises,
        sortable: true,
    },
    {
        name: 'Most Recent',
        selector: row => row.mostRecent,
        sortable: true,
    },
    {
        name: 'Owner',
        selector: row => row.owner,
        sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <Space size="middle">
          <Dropdown
            overlay={(
              <Menu>
                <Menu.Item key="2">
                  <div className='flex gap-4 items-center'>
                    <BiSolidDuplicate /> Duplicate
                  </div>
                </Menu.Item>
                <Menu.Item key="3">
                  <div className='flex gap-4 items-center'>
                    <AiOutlineDelete /> Delete
                  </div>
                </Menu.Item>
              </Menu>
            )}
          >
            <Button>
              <BsThreeDotsVertical />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
];

const data = [
  { id:1,
    workOuts: (
      <>
        <h1 className="text-lg font-bold">Lower Body 40:20 5x5 - Demo</h1>
        <p className="text-lg">
          Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
        </p>
        <a href=""> Full Body Cool Down (4) </a> /{" "}
        <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
      </>
    ),
    tags: "--",
    exercises: 12,
    mostRecent: "2d",
    owner: "Md. Raihan Uddin Tuhin 201-35-559",
  },
  {
    id:2,
    workOuts: (
      <>
        <h1 className="text-lg font-bold">Lower Body 40:20 5x5 - Demo</h1>
        <p className="text-lg">
          Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
        </p>
        <a href=""> Full Body Cool Down (4) </a> /{" "}
        <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
      </>
    ),
    tags: "--",
    exercises: 13,
    mostRecent: "2d",
    owner: "Md. Raihan Uddin Tuhin 201-35-559",
  },
  {
    id:3,
    workOuts: (
      <>
        <h1 className="text-lg font-bold">Lower Body 40:20 5x5 - Demo</h1>
        <p className="text-lg">
          Five exercises, 40 seconds of work, 20 seconds of rest, repeated five
        </p>
        <a href=""> Full Body Cool Down (4) </a> /{" "}
        <a href="">Full Body Warm Up (5) </a> / <a href="">Legs (5) </a>
      </>
    ),
    tags: "--",
    exercises: 14,
    mostRecent: "2d",
    owner: "Md. Raihan Uddin Tuhin 201-35-559",
  },
];

function ExercisesWorkOut() {
    return (
        <DataTable className='container mx-auto '
            columns={columns}
            data={data}
        />
    );
}
export default ExercisesWorkOut;