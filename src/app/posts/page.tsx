import PostList from '@/components/PostList';
import { Post } from '@/lib/types';

const posts: Post[] = [
  { id: '1', title: 'First Post', excerpt: 'This is the first post.', content: 'Full content of the first post.' },
  { id: '2', title: 'Second Post', excerpt: 'This is the second post.', content: 'Full content of the second post.' },
];

const PostsPage = () => {
  return (
    <div>
      <h1>All Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;