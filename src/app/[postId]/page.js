"use client"
import React, { useEffect, useState } from 'react';

const PostDetails = ({ params }) => {
    const { postId } = params;
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [postId])
    

    return (
        <div className='max-w-3xl mx-auto '>
            <div className="card bg-white pt-4 w-full h-full shadow-xl duration-500 hover:shadow-xl">
                <div className="card-body p-4">
                    <h1 className='text-xl font-bold'>No - {post.id}</h1>
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>

    );
};

export default PostDetails;