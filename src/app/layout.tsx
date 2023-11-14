import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { QueryProvider } from '@/state';
import '../common/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test',
  description: 'This is my test app',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <ul>
            <li>
              <Link href={'/'}>Home Page</Link>
            </li>
            <li>
              <Link href={'/test'}>Test Page</Link>
            </li>
            <li>
              <Link href={'/test/jksahdf'}>Test Detail Page</Link>
            </li>
          </ul>
        </div>
        <QueryProvider>{children}</QueryProvider>
        <div>this is home page footer</div>
      </body>
    </html>
  );
};

export default RootLayout;
