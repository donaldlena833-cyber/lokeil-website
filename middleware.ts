import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const apexDomain = 'lokeilremodeling.com';
const wwwDomain = `www.${apexDomain}`;
const consolidatedBlogRedirects = new Map([
  ['/blog/bathroom-remodeling-astoria-nyc-planning-guide', '/bathroom-remodeling-queens'],
  ['/blog/bathroom-remodeling-jackson-heights-nyc-planning-guide', '/bathroom-remodeling-queens'],
  ['/blog/bathroom-remodeling-long-island-city-nyc-planning-guide', '/bathroom-remodeling-queens'],
  ['/blog/bathroom-remodeling-ridgewood-nyc-planning-guide', '/bathroom-remodeling-queens'],
  ['/blog/bathroom-remodeling-sunnyside-nyc-planning-guide', '/bathroom-remodeling-queens'],
  ['/blog/bathroom-remodeling-woodside-nyc-planning-guide', '/bathroom-remodeling-queens'],
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const pathname = request.nextUrl.pathname.replace(/\/$/, '');

  if (host === wwwDomain) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = apexDomain;
    redirectUrl.protocol = 'https';

    return NextResponse.redirect(redirectUrl, 308);
  }

  const consolidatedTarget = consolidatedBlogRedirects.get(pathname);

  if (consolidatedTarget) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = consolidatedTarget;
    redirectUrl.search = '';

    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
