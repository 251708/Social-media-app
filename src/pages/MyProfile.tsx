import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

type Profile = {
  name: string;
  email: string;
  bio: string;
};

const Profile = () => {
  const [profile, setProfile] = useState<Profile>({
    name: 'Sakshi Singh',
    email: 'officialsakshi@example.com',
    bio: 'A Front-end Web developer.',
  });

  const handleSave = (values: Profile) => {
    setProfile(values);
  };

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={handleSave}
        initialValues={profile}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          rules={[{ required: true, message: 'Please enter your bio' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
