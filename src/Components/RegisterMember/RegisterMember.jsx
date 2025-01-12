import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    Table.EXPAND_COLUMN,
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    Table.SELECTION_COLUMN,
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      phone: '123-456-7890',
      email: 'john.brown@example.com',
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      phone: '987-654-3210',
      email: 'jim.green@example.com',
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      phone: '555-555-5555',
      email: 'not.expandable@example.com',
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      phone: '111-222-3333',
      email: 'joe.black@example.com',
      address: 'Sydney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
  ];

const RegisterMember = () => {
  return (
    <div  className='font-poppins mt-10'>
    <Table
      columns={columns}
      rowSelection={{}}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
      }}
      dataSource={data}
    />
  </div>
  )
}

export default RegisterMember
