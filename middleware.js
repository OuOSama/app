import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        console.log('hey bro you have no session');
        return NextResponse.redirect(new URL('/', req.url));
    }

    const { role } = token;

    if (req.nextUrl.pathname.startsWith("/admin") && role !== 'admin') {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin:path*',
        '/Page/:path*'
    ]
}