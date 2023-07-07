'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/app/components/button/button';
import { useTranslations } from 'next-intl';


const GadgetListSSR = ({ client }: any) =>  {
    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(true);
    const t = useTranslations('Index');
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets')
            const data = await res.json();
            setData(data)
        };
        getData()
    },[])

    return (<>
        <Button label={t('edit')} onClick={()=>setEditing(!editing)} primary/>
            {editing ? client :
                <div className="p-8">
                    <h1 className="bg-sky-800 text-white p-4 rounded-lg">{t('edit')}</h1>
                    {data.map((item: any) => (
                        <div key={item.id}>
                            <label className="block font-medium mt-1">  Label  </label>
                            <input  defaultValue={item.title}  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        </div>
                    ))}
                </div>
            }
        </>);
}

export default GadgetListSSR;