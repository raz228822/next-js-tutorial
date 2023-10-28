// domain.co.il/posts/new
import PostForm from '@/components/PostForm'

export const metadata = {
    title: 'New Post | Next.js Tutorial',
    description: 'New Post Description | Next.js Tutorial'
}

export default function NewPostPage() {
    return (
        <>
            <header>
                <h1>NewPost Page</h1>
            </header>

            <PostForm />
        </>
    )
}