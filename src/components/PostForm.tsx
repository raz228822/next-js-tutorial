'use client'

import { useState } from "react"

export default function PostForm() {
    const[title, setTitle] = useState<string>('')
    const[body, setBody] = useState<string>('')

    return (
        <form>
            {title} {body}
            <div className="post-form__block">
                <label className="post-form__label">Title</label>
                <input className="post-form__input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
            </div>
            <div className="post-form__block">
                <label className="post-form__label">Body</label>
                <input className="post-form__input" type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></input>
            </div>
            <button type="submit" className="btn">Send</button>
        </form>
    )
}