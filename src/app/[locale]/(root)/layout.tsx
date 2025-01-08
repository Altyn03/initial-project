import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Init App',
  description: 'Init App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
