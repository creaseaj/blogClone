import React, { useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import Pagination from '@/Components/Pagination';
import Post from '@/Components/Post';
import Guest from '@/Layouts/Guest';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import Button from '@/Components/Button';
import TextArea from '@/Components/Textarea';

export default function create({ auth, errorsPage }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Authenticated
            auth={auth}
            errors={errorsPage}
            header={<h2 className="font-semibold text-xl leading-tight">Create Post</h2>}
        >
            <Head title="Create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 rounded-md bg-slate-800 py-6">
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="email" value="Title" />

                            <Input
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="content" value="Content" />

                            <TextArea
                                type="text"
                                name="content"
                                value={data.content}
                                className="mt-1 block w-full h-72"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" processing={processing}>
                                Create Post
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
