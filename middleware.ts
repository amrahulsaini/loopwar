import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // If the request is for infra.loopwar.dev, rewrite to /infra path
  if (hostname === 'infra.loopwar.dev' || hostname === 'www.infra.loopwar.dev') {
    const newUrl = request.nextUrl.clone()
    newUrl.pathname = `/infra${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(newUrl)
  }

  // For other hosts (e.g., loopwar.dev), proceed normally
  return NextResponse.next()
}

// Optional: Restrict middleware to specific paths if needed
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}