import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect to default locale if no locale is present
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|branding|images|favicon.ico).*)'],
};
