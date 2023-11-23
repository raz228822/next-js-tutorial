export {default} from 'next-auth/middleware'

export const config = { matcher: ['/posts/new', '/posts/:postId/edit', '/api/:path*']} //with this variable, only the paths that in the array will go through the middleware
                                                                                       //'/api/:path*', this says that each path starting with /api will go thorugh the middleware

/*import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) { // a function that each client service call for it before the other functions. helps to avoid showing some screens to the client.
    if(isLoggedIn) { return NextResponse.next(); }
}*/
