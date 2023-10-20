// import React from 'react';
import { Button, Dropdown, Image, Menu, Space, Table } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './ExerciesTable.css';
import { AiOutlineEdit , AiOutlineDelete } from 'react-icons/ai';
import { BiSolidDuplicate } from 'react-icons/bi';
import { useEffect, useState } from 'react';



 
const columns = [
  {
    title: '',
    key: 'selection',
    render: (data) => (
      <>
        <div className="image-container">
          <Image
            className="image"
            src={data.img}
            preview={false}
          />
        </div>
      </>
    ),
    width: 80,
  },
  {
    
    title: `Exercises`,
    dataIndex: 'exercises',
    key: 'exercises',
    render: (text) => <span className='text-l font-semibold'>{text}</span>,
  },
 
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
  },
 
  {
    title: 'Primary Focus',
    dataIndex: 'primaryFocus',
    key: 'primaryFocus',
    sorter:(rec1,rec2)=>{
      return rec1.primaryFocus >  rec2.primaryFocus
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter:(rec1,rec2)=>{
      return rec1.category >  rec2.category
    }
  },
  {
    title: 'Most Recent',
    dataIndex: 'mostRecent',
    key: 'mostRecent',
    sorter:(rec1,rec2)=>{
      return rec1.mostRecent >  rec2.mostRecent
    }
  },
  {
    title: 'Custom',
    dataIndex: 'custom',
    key: 'custom',
  },
  {
    title: 'Action',
    key: 'action',
    style:{},
    render: () => (
      <Space size="middle">
        <Dropdown
          overlay={(
            <Menu className=''>
              <Menu.Item key="1"> <AiOutlineEdit></AiOutlineEdit> Edit</Menu.Item>
              <Menu.Item key="2"><BiSolidDuplicate></BiSolidDuplicate> Duplicate</Menu.Item>
              <Menu.Item key="3"><AiOutlineDelete></AiOutlineDelete> Delete</Menu.Item>
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
const data1 = [
  {
    key: 1 ,
    img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Medicine Ball Full Twist',
    tag: "--",
    primaryFocus: 'Abdominals',
    category: 'Timed',
    mostRecent: "1 days",
    custom: ''
  },
  {
    key: 2,
    img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Incline Push-Up Medium',
    tag: "--",
    primaryFocus: 'Chest',
    category: 'Timed',
    mostRecent: "3 days",
    custom: ''
  },
  {
    key: 3,
    img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
    exercises: 'Plyo Kettlebell Pushups',
    tag: "--",
    primaryFocus: 'Abdominals',
    category: 'Timed',
    mostRecent: "4 days",
    custom: ''
  },
  {
    key: 4,
    img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Dumbbell Rear Delt Row',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "4 days",
    custom: ''
  },
  {
    key: 5,
    img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Medicine Ball Full Twist',
    tag: "--",
    primaryFocus: 'Abdominals',
    category: 'Timed',
    mostRecent: "1 days",
    custom: ''
  },
  {
    key: 6,
    img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Incline Push-Up Medium',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "2 days",
    custom: ''
  },
  {
    key: 7,
    img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
    exercises: 'Plyo Kettlebell Pushups',
    tag: "--",
    primaryFocus: 'Chest',
    category: 'Timed',
    mostRecent: "8 days",
    custom: ''
  },
  {
    key: 8,
    img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Dumbbell Rear Delt Row',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "5 days",
    custom: ''
  },
  {
    key: 9,
    img:'https://images.pexels.com/photos/6922163/pexels-photo-6922163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Medicine Ball Full Twist',
    tag: "--",
    primaryFocus: 'Abdominals',
    category: 'Timed',
    mostRecent: "1 days",
    custom: ''
  },
  {
    key: 10,
    img : 'https://images.pexels.com/photos/8401820/pexels-photo-8401820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Incline Push-Up Medium',
    tag: "--",
    primaryFocus: 'Chest',
    category: 'Timed',
    mostRecent: "2 days",
    custom: ''
  },
  {
    key: 11,
    img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
    exercises: 'Plyo Kettlebell Pushups',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "4 days",
    custom: ''
  },
  {
    key: 13,
    img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
    exercises: 'Plyo Kettlebell Pushups',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "4 days",
    custom: ''
  },
  {
    key: 14,
    img:'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=300',
    exercises: 'Plyo Kettlebell Pushups',
    tag: "--",
    primaryFocus: 'Quadeiceps',
    category: 'strength',
    mostRecent: "4 days",
    custom: ''
  },
  {
    key: 12,
    img:'https://images.pexels.com/photos/5032004/pexels-photo-5032004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    exercises: 'Dumbbell Rear Delt Row',
    tag: "--",
    primaryFocus: 'Chest',
    category: 'Timed',
    mostRecent: "3 days",
    custom: ''
  },

];

const ExerciseTable = () => {
  const [loading,setLoading] = useState(false) 
 const [dataSource,setDataSource] = useState(data1)  
  useEffect(()=>{
    setLoading(true)
    // fetch(data1)
    // .then(res=>res.json())
    // .then(data=>{
    //   setDataSource([data])
    // }).catch(err=>{
    //   console.log(err)
    // }).finally(()=>{
    //   setLoading(false)
    // })
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])

 return(
  <Table className='p-2 m-2'
  columns={columns}
  rowSelection={{}}
 
  dataSource={dataSource}
  pagination={
   { pageSize:7}
  }
  loading={loading}
/>
 )
};
export default ExerciseTable;




