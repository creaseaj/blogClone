import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Pagination({ pageData }) {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 fixed left-0 right-0 bottom-0">
            <div className='max-w-[1200px] w-full mx-auto'>
                <div className="flex-1 flex justify-between sm:hidden">
                    <Link href={`posts?page=${pageData.current_page - 1}`} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </Link>
                    <Link href={`posts?page=${pageData.current_page + 1}`} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </Link>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing
                            <span className="font-medium m-0.5">{pageData.from}</span>
                            to
                            <span className="font-medium m-0.5">{pageData.to}</span>
                            of
                            <span className="font-medium m-0.5">{pageData.total}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <Link href={`posts?page=${pageData.current_page - 1}`} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </Link>
                            {[...Array(pageData.last_page)].map((link, idx) =>
                                <Link href={`posts?page=${idx + 1}`} aria-current="page" className={`px-4 py-2 border text-sm font-medium ${pageData.current_page == idx + 1 ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-500'}`} key={idx}>
                                    {idx + 1}
                                </Link>
                            )}
                            <Link href={`posts?page=${pageData.current_page + 1}`} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
