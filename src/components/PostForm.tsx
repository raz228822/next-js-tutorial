'use client'

import { useState } from "react"
import {savePost} from '@/services/posts.client'
import { useRouter } from "next/navigation"

interface PostFormProps {
    postId?: string,
    title?: string,
    body?: string
}

export default function PostForm(props: PostFormProps) {
    const[title, setTitle] = useState<string>(props?.title || '')
    const[body, setBody] = useState<string>(props?.body || '')
    const {push} = useRouter()

    async function onSubmit(e : React.FormEvent){
        e.preventDefault();
        try {
            await savePost({id: props.postId,title, body});
            alert('Post saved successfully')
            push('/posts')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="post-form__block">
                <label className="post-form__label">Title</label>
                <input className="post-form__input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
            </div>
            <div className="post-form__block">
                <label className="post-form__label">Body</label>
                <textarea className="post-form__input" rows={20} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
            </div>
            <button type="submit" className="btn">Send</button>
        </form>
    )
}