import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to about</Link>
      <Link href="/posts">Go to posts</Link>
    </div>
  );
}