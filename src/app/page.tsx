import type { Metadata } from 'next';
import Heading from '@/components/styling/Heading';

const title = 'Home Page';
const description = 'This is the home page';
const url = 'https://example.com';
const type = 'website';
const locale = 'en_US';
const siteName = 'My Next Blog';

// Metadata for the page
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type,
    locale,
    siteName,
  },
};

export default function Home() {
  return (
    <div>
      <Heading>{title}</Heading>
    </div>
  );
}