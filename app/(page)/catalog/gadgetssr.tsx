'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/app/components/button/button';


const GadgetListSSR = ({ client }: any) =>  {
    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(true);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets')
            const data = await res.json();
            setData(data)
        };
        getData()
    },[])

    return (<>
        <Button label='EDITING' onClick={()=>setEditing(!editing)} primary/>
            {editing ? client :
                <div className="p-8">
                    <h1 className="bg-sky-800 text-white p-4 rounded-lg">EDITING</h1>
                    {data.map((item: any) => (
                        <div key={item.id}>
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  defaultValue={item.title} />
                        {/* <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{item.title}</label> */}
                    </div>
                    ))}
                </div>
            }
        </>);
}

export default GadgetListSSR;