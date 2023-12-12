import React, { useState } from 'react';
import { Table, Space, Button, Popconfirm, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

type Post = {
  key: React.Key;
  name: string;
  content: string;
  comments: string[];
};

const MyPosts = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([
    {
      key: '1',
      name: 'Your Name',
      content: 'This is your post content.',
      comments: ['Comment 1', 'Comment 2'],
    },
    // Add more posts as needed
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: Post) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this post?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleEdit = (record: Post) => {
    // Open a modal to edit the post
    setSelectedPost(record);
  };

  const handleDelete = (key: React.Key) => {
    // Handle deletion of the post
    setPosts((prevPosts) => prevPosts.filter((post) => post.key !== key));
  };

  const handleSave = () => {
    // Save the edited post
    // Close the modal
    setSelectedPost(null);
  };

  const handleCancel = () => {
    // Close the modal without saving
    setSelectedPost(null);
  };

  const expandedRowRender = (record: Post) => {
    return (
      <div>
        {record.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={posts} expandable={{ expandedRowRender }} />
      <Modal
        title="Edit Post"
        visible={!!selectedPost}
        onOk={handleSave}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Name" name="name">
            <Input value={selectedPost?.name} disabled />
          </Form.Item>
          <Form.Item label="Content" name="content">
            <Input.TextArea value={selectedPost?.content} onChange={(e) => setSelectedPost({ ...selectedPost!, content: e.target.value })} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyPosts;
