import React, { useState } from 'react';
import { Card, Button, Input, Form, Avatar, Space } from 'antd';
import { LikeOutlined, LikeFilled, BookOutlined, BookFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';

type Post = {
  id: number;
  name: string;
  photo: string;
  createdAt: string;
  content: string;
  likes: number;
  bookmarks: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: string[];
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState('');

  const handleNewPost = () => {
    const newPost: Post = {
      id: Date.now(),
      name: 'Sakshi Singh',
      photo: 'https://th.bing.com/th/id/OIP.Qb8ckPVDRL74Yt_AhChoXAHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain',
      createdAt: new Date().toISOString(),
      content: newPostContent,
      likes: 0,
      bookmarks: 0,
      isLiked: false,
      isBookmarked: false,
      comments: [],
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setNewPostContent('');
  };

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.likes + (post.isLiked ? -1 : 1) } : post
      )
    );
  };

  const handleBookmark = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked, bookmarks: post.bookmarks + (post.isBookmarked ? -1 : 1) }
          : post
      )
    );
  };

  const handleAddComment = (postId: number, comment: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post))
    );
  };

  return (
    <div>
      <Form>
        <Form.Item>
          <Input.TextArea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            rows={4}
            maxLength={200}
            placeholder="Write a new post..."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleNewPost}>
            Create Post
          </Button>
        </Form.Item>
      </Form>

      {posts.map((post) => (
        <Card
          key={post.id}
          style={{ marginBottom: 16 }}
          actions={[
            <Space>
              <Button
                type={post.isLiked ? 'primary' : 'default'}
                shape="circle"
                icon={post.isLiked ? <LikeFilled /> : <LikeOutlined />}
                onClick={() => handleLike(post.id)}
              />
              {post.likes}
            </Space>,
            <Space>
              <Button
                type={post.isBookmarked ? 'primary' : 'default'}
                shape="circle"
                icon={post.isBookmarked ? <BookFilled /> : <BookOutlined />}
                onClick={() => handleBookmark(post.id)}
              />
              {post.bookmarks}
            </Space>,
            <EditOutlined key="edit" />,
            <DeleteOutlined key="delete" />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src={post.photo} />}
            title={post.name}
            description={new Date(post.createdAt).toLocaleString()}
          />
          <p>{post.content}</p>
          <div>
            {post.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
          
        </Card>
      ))}
    </div>
  );
};

export default Home;

// Home.tsx
/*import React from 'react';

interface HomeProps {
  // Define your props here
}

const Home: React.FC<HomeProps> = ({  }) => {
  // Your component logic here
  return (
    <div>
     
      <h2>Welcome to the Home Page!</h2>
    </div>
  );
};

export default Home;
*/

