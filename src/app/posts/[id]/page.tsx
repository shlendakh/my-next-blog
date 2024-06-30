'use client';

import { useParams } from 'next/navigation';
import { Post } from '@/lib/types';

// Mock data for demonstration
const posts: Post[] = [
  { id: '1', title: 'First Post', excerpt: 'This is the first post.', content: 'Full content of the first post.' },
  { id: '2', title: 'Second Post', excerpt: 'This is the second post.', content: 'Full content of the second post.' },
];

const PostPage = () => {
    const params = useParams();
    const id = params.id as string;

    const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;