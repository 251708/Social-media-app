import React, { useState } from 'react';
import { Card, Button, Avatar } from 'antd';
import { LikeOutlined, LikeFilled, BookOutlined, BookFilled } from '@ant-design/icons';

type Post = {
  id: number;
  name: string;
  photo: string;
  content: string;
  likes: number;
  bookmarks: number;
  isLiked: boolean;
  isBookmarked: boolean;
};

const MyBookmarks = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Post[]>([
    {
      id: 1,
      name: 'Sakshi Singh',
      photo: '',
      content: 'This is a bookmarked post.',
      likes: 15,
      bookmarks: 8,
      isLiked: false,
      isBookmarked: true,
    },
    // Add more bookmarked posts as needed
  ]);

  const handleLike = (postId: number) => {
    setBookmarkedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.likes + (post.isLiked ? -1 : 1) } : post
      )
    );
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked, bookmarks: post.bookmarks + (post.isBookmarked ? -1 : 1) }
          : post
      )
    );
  };

  return (
    <div>
      {bookmarkedPosts.map((post) => (
        <Card
          key={post.id}
          style={{ marginBottom: 16 }}
          actions={[
            <Button
              type={post.isLiked ? 'primary' : 'default'}
              shape="circle"
              icon={post.isLiked ? <LikeFilled /> : <LikeOutlined />}
              onClick={() => handleLike(post.id)}
            />,
            <Button
              type={post.isBookmarked ? 'primary' : 'default'}
              shape="circle"
              icon={post.isBookmarked ? <BookFilled /> : <BookOutlined />}
              onClick={() => handleBookmark(post.id)}
            />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src={post.photo} />}
            title={post.name}
            description={post.content}
          />
          <div>
            <h2>My Bookmarks list is here</h2>
            <p>Likes: {post.likes}</p>
            <p>Bookmarks: {post.bookmarks}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyBookmarks;
