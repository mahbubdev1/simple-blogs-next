import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { id, title, body } = blog
    return (
        <div className="card bg-white w-full h-full shadow-xl duration-500 hover:shadow-2xl">
            <div className="card-body p-4">
                <h1 className='text-xl font-bold'>Serial - {id}</h1>
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <Link href={`/${id}`}><button className='px-5 py-2 bg-blue-500 text-white rounded-lg'>View Details</button></Link>
            </div>
        </div>
    );
};

export default BlogCard;