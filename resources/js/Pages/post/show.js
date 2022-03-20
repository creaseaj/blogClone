import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import Pagination from '@/Components/Pagination';

export default function Post({ post, auth, errors }) {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{post.title}</h2>}
        >
            <Head title="Posts" />
            <div className='mx-[50px] xl:mx-auto xl:max-w-[1000px] w-[calc(100vw-100px)] mx-auto m-4 p-5'>
            <div>{post.content}</div>
            </div>
            <div className='h-[50px]' />
        </Authenticated>
    );
}
