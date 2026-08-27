import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { appendVaryAccept, preferredRepresentation } from './lib/accept';

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

  if (pathname === '/sitemap') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/sitemap.xml';
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl, 301);
  }

  const consolidatedTarget = consolidatedBlogRedirects.get(pathname);
  if (consolidatedTarget) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = consolidatedTarget;
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl, 301);
  }

  const preferred = preferredRepresentation(request.headers.get('accept'));
  if (preferred === null) return new Response('Not Acceptable\n\nAvailable: text/html, text/markdown\n', { status: 406, headers: { 'Content-Type': 'text/plain; charset=utf-8', Vary: 'Accept' } });
  if (preferred === 'text/markdown') {
    const url = request.nextUrl.clone();
    url.pathname = `/agent-markdown${request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname}`;
    const response = NextResponse.rewrite(url);
    appendVaryAccept(response.headers);
    return response;
  }
  const response = NextResponse.next();
  appendVaryAccept(response.headers);
  return response;
}

export const config = { matcher: ['/((?!api/|agent-markdown|_next/|.*\\.[^/]+$).*)'] };
