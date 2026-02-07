import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Nene App',
  description: 'A full-stack app built with Next.js and NestJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
