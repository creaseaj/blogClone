import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import Pagination from '@/Components/Pagination';
import Post from '@/Components/Post';
import Guest from '@/Layouts/Guest';

export default function Posts({ posts, auth, errors }) {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl leading-tight">Posts</h2>}
        >
            <Head title="Posts" />
            {                
                posts.data.map(post =>
                    <Post key={post.id} post={post} />
                )
            }
            <div className='h-[50px]' />
            <Pagination pageData={posts} />
         </Authenticated>
    );
}
