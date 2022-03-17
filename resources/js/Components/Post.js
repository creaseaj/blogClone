import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Post({ post }) {
    return (
        <div className='mx-[50px] xl:mx-auto xl:max-w-[1000px] w-[calc(100vw-100px)] '>
            <Link href={route('post', [post.id])}>
                <div className=' bg-white transition-all hover:shadow-md rounded-md border mx-auto m-4 p-5'>
                    <div className='mx-auto text-xl w-max'>{post.title}</div>
                    <div>{post.content}</div>
                    <div className='text-grey-200 font-normal underline italic'>{post.user.name}</div>
                </div>
            </Link>
        </div>
    );
}
