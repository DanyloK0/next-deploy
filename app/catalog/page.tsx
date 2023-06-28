import React from 'react';
import Image from 'next/image';
import { Gadget } from '../model/gadget';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

interface CatalogIndexProps {
    data: Gadget[]
}

export const getServerSideProps = async() => {
    const data = await fetch(API);
    console.log(data)
    return data.json();
}

export default async function Catalog() {
    const data = await getServerSideProps()
    return (
    <>
        <h1>Catalog SSR</h1>
        <div className="flex">
            {
                data?.map((item:any) => {
                    return (
                    <div key={item.id}>
                            <Image  src={item.image} alt={item.title} width={300} height={300} loading="lazy"/>
                        { item.title }
                    </div>
                    )
                })
            }
        </div>
    </>
)
}
