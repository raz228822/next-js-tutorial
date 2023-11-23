import { NextRequest, NextResponse } from "next/server";
import {firestore} from '@/firebase'
import admin from 'firebase-admin'
import next from "next";
import Post from "@/types/Post";
import { isPostValid } from "@/services/posts.server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import revalidate from "@/services/revalidate";

//PUT /api/posts/:postId
export async function PUT(request: NextRequest, context: {params: {postId: string}}) {
    try {
        const {postId} = context.params;
        const post: Post = await request.json();
        const session = await getServerSession(authOptions)

        if(!(postId && isPostValid(post))) {
           return new NextResponse('Bad request', {status: 400})
        }
        
        await firestore.collection('posts').doc(postId).set({
            title: post.title,
            body: post.body,
            updatedBy: session?.user,
            updatedAt: admin.firestore.Timestamp.now()
        })
        //adding {merge: true} argument to 'set' function will update the postId data(replacing title only) in the database,
        //and without this argument the postId data will be erased and the new data will replace it(replacing all and not only title)
        await revalidate(request, ['/posts', `/posts/${postId}`])
        console.log('Post edited successfully')
        return NextResponse.json({message: 'Post edited successfully'})
    } catch(error) {
        console.error('Error editing post: ', error)
        return new NextResponse('Internal Server Error', {status: 500})
    }
}

// DELETE /api/posts/:postId
export async function DELETE(request: NextRequest, context: {params: {postId: string}}) {
    const {postId} = context.params;

    if (!postId) {
        return new NextResponse('Bad Request', {status: 400})
    }

    try {
        await firestore.collection('posts').doc(postId).delete();
        await revalidate(request, ['/posts', `/posts/${postId}`])
        console.log('Post deleted successfully')
        return NextResponse.json ({message: 'Post deleted successfully'})
    } catch(error) {
        console.error('Error deleting post: ', error)
        return new NextResponse('Internal Server Error', {status : 500})
    }

}