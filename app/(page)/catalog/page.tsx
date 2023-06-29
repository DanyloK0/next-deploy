import React from 'react';
import Image from 'next/image';
import { Suspense } from 'react'

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';


export default async function Catalog() {
    const getData = async() => {
        const data = await fetch(API);
        console.log(data)
        return data.json();
    }
    const data = await getData()
    return (
    <>
        <h1>Catalog SSR</h1>
    <Suspense fallback={<p>Loading feed...</p>}>
        <div className="flex">
            {
                data?.map((item:any) => {
                    return (
                    <div key={item.id} className='bg-sky-800 text-white p-4 m-4 rounded-lg'>
                        <Image src={item.image} alt={item.title} width={200} height={200} />
                        <h2 className='text-xl'>{item.title}</h2>
                        <p className='text-sm'>{item.description}</p>
                        { item.title }
                    </div>
                    )
                })
            }
        </div>
        </Suspense>
    </>
)
}
