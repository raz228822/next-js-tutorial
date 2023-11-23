// domain.co.il/posts

import Link from "next/link";
import PostCard from "@/components/PostCard"
import Post from '@/types/Post'
import { getPosts } from '@/services/posts.server'
import RestrictedContent from "@/components/RestrictedContent";

//export const dynamic = '' //choosing the behavior of the cache on this specific page. the options:
                          //"auto" - use cache as long as you can(this is the default option)
                          //"force-dynamic" - forcing not to use cache and run over the fetch definition, even if there is use of cache in fetch. always renders as SSR
                          //"error" - ???
                          //"force-static" - forcing always to use cache, first at build app and not again while app is running. renders as SSG

export const revalidate = 3 //determines the lifetime of the cache for this page.
                             //revalidate does not run over the revalidate definition of fetch use of revalidate
                             //can get "false" - if there is cache, he will save it for-good, 0 - never save cache for this page,
                             //and number that determines the cache lifetime(count as seconds) 

export const metadata = {
    title: 'Posts | Next.js Tutorial',
    description: 'Posts Description | Next.js Tutorial'
}

export default async function PostsPage() {
    const posts: Post[] = await getPosts();
    
    return (
        <>
            <header className="flex items-center mb-6">
                <h1>Posts Page</h1>
                <RestrictedContent>
                    <Link href="/posts/new" className="btn ml-auto">New Post</Link>
                </RestrictedContent>
            </header>

            <ul className="grid grid-cols-3 gap-3">
                {posts.map((post) => (
                    <PostCard key={post.id} {...post}/>
                ))}
            </ul>
        </>
    )
}