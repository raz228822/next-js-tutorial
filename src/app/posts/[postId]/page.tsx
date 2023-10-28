// domain.co.il/posts/:postId

import Link from "next/link"

interface PostView {
    params: {
        postId: string
    }
}

export function generateMetadata(props: PostView) {
    return {
        title: `Post ${props.params.postId}`,
        description: `Post description ${props.params.postId}` 
    }
}

export default function PostViewPage(props: PostView) {
    const {postId} = props.params
    return (
        <>
            <header className="flex items-center mb-6">
                <h1>PostView {postId} Page</h1>
                <Link className="btn ml-auto" href={`/posts/${postId}/edit`}>Edit</Link>
                <button className="btn--red ml-4">Delete</button>
            </header>
        </>
    )
}