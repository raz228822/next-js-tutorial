import { NextRequest, NextResponse } from "next/server";
import admin from 'firebase-admin'
import revalidate from "@/services/revalidate"
import { firestore } from "@/firebase";
import Post from '@/types/Post'
import { isPostValid } from "@/services/posts.server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// POST /api/posts
export async function POST(request: NextRequest) {
    const post : Post = await request.json();
    const session = await getServerSession(authOptions)

    if(!(isPostValid(post))) {
        return new NextResponse('Bad request', {status: 400})
     }

    try {
        await firestore.collection('posts').doc().set({
            ...post,
            updatedBy: session?.user,
            updatedAt: admin.firestore.Timestamp.now()
        })
        await revalidate(request, ['/posts'])
        console.log('Post added successfully')
        return NextResponse.json({message: 'Post added successfully'})
    } catch(error) {
        console.error('Error adding post: ', error)
        return new NextResponse('Internal Server Error', {status: 500})
    }
}