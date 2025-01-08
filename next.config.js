/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);
