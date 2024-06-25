import Link from 'next/link';
import { Post } from '@/lib/types';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <article>
      <h2>
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      <p>{post.excerpt}</p>
    </article>
  );
};

export default PostItem;