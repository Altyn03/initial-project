import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const localeMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const language = request.cookies.get('NEXT_LOCALE')?.value || 'en';
  const user = request.cookies.get('user')?.value;
  const currentPath = request.nextUrl.pathname;

  if (user && currentPath.split('/').includes('login')) {
    return NextResponse.redirect(new URL(`/${language}`, request.url));
  }
  if (!user && !currentPath.split('/').includes('login')) {
    return NextResponse.redirect(new URL(`/${language}/login`, request.url));
  }

  return localeMiddleware(request);
}
export const config = {
  matcher: ['/', '/(ru|en|zh|es)/:path*'],
};
