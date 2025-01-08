import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Sign In',
  description: 'Sign Up | Sign In',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
