import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Card, InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { ReactElement, useRef, useState } from 'react';
// import Highlighter from 'react-highlight-words';
import "./style/index.scss"
interface DataType {
  key:number;
  id: string;
  postclasses: string;
  content: string;
  categories: string;
  postuserid: string;
  postCoverimg: string;
  viewcount: number;
  goodscount: number;
  createtime:string;
  edit:ReactElement;
  delete:ReactElement;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>
  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>


  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
  {
    key: 1,
    id: '222',
    postclasses: '数码产品',
    content: 'New York No. 1 Lake Park',
    categories:"手机",
    postuserid:"2738k3huds6313k2204",
    postCoverimg:"http://sx3.org.com/images/22324.jpg",
    viewcount:2222,
    goodscount:2222,
    createtime:"2022-10-20 16:34:45",
    edit:<Button type="primary">编辑</Button>,
    delete:<Button type="primary">编辑</Button>

  },
];

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: text =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: '文章id',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
    },
    {
      title: '文章归属',
      dataIndex: 'postclasses',
      key: 'postclasses',
      ...getColumnSearchProps('postclasses'),
    },
    {
      title: '文章内容',
      dataIndex: 'content',
      key: 'content',
      ...getColumnSearchProps('content'),
    },
    {
      title: '分类',
      dataIndex: 'categories',
      key: 'categories',
      ...getColumnSearchProps('categories'),
    },
    {
      title: '发布用户',
      dataIndex: 'postuserid',
      key: 'postuserid',
      ...getColumnSearchProps('postuserid'),
    },
    {
      title: '封面照片',
      dataIndex: 'postCoverimg',
      key: 'postCoverimg',
    },
    {
      title: '浏览量',
      dataIndex: 'viewcount',
      key: 'viewcount',

    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      key: 'createtime',
      ...getColumnSearchProps('createtime'),
      sorter: (a, b) => a.createtime.length - b.createtime.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '操作',
      dataIndex: 'edit',
      key: 'edit',
      width:"1%"
    },
    {
      title: '删除',
      dataIndex: 'delete',
      key: 'delete',
      width:"1%"

    },
  ];

  return (
    <div className="tableList">
      <Card>
        <Button type="primary">
        <PlusCircleOutlined />{'新增文章'}
        </Button>
      </Card>
      <br />
      <Table columns={columns} dataSource={data} bordered={true} scroll={{x:1024}} />
    </div>
  );
};

export default App;
