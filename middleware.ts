import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const apexDomain = 'lokeilremodeling.com';
const wwwDomain = `www.${apexDomain}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');

  if (host === wwwDomain) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = apexDomain;
    redirectUrl.protocol = 'https';

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
