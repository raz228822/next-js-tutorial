import Image from 'next/image'
import Link from 'next/link';


interface PostCardProps {
    postId: string;
}

export default function PostCard(props: PostCardProps) {
    return(
        <li className="rounded-lg shadow-lg bg-neutral-700">
            <Image className="rounded-t-lg" src={`https://via.placeholder.com/600x400?text=Post ${props.postId}`} width="600" height="400" alt={`post ${props.postId}`}></Image>
            <Link href={`/posts/${props.postId}`}>
                <div className="p-4">
                    <h4 className="text-xl text-neutral-50 font-medium">Title</h4>
                    <p className="text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus velit officiis tempore corrupti maiores dignissimos! Repudiandae beatae consequatur sunt sed accusantium, ipsum alias deleniti molestiae ea eaque nobis tempore!</p>
                </div>
            </Link>
        </li>
    )
}