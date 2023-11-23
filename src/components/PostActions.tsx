'use client'
import Link from "next/link"
import {deletePost} from '@/services/posts.client'
import { useRouter } from "next/navigation"
import RestrictedContent from "./RestrictedContent";

interface PostActionsProps {
    postId: string,
}

export default function PostActions({postId}: PostActionsProps) {
    const {push} = useRouter();

    async function onDelete() {
        await deletePost(postId)
        alert('Post deleted successfully')
        push('/posts')
    }

    return (
        <RestrictedContent>
            <div className="ml-auto flex gap-4">
                <Link className="btn ml-auto" href={`/posts/${postId}/edit`}>Edit</Link>
                <button onClick={onDelete} className="btn--red ml-4">Delete</button>
            </div>
        </RestrictedContent>
    )
}