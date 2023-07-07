import React from "react";
import { useTranslations } from "next-intl";

async function getData(){
    const res= await fetch('https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets')
    return res.json()
} ;
export default  async function Settings() {
    const data = await getData();
    // const t = useTranslations('Index');
    return (
        <div className="p-8">
            <h1 className="bg-sky-800 text-white p-4  rounded-lg">SSR</h1>
            {data.map((item:any) => (
                <div key={item.id}>
                    <label className="block font-medium mt-1">  Label  </label>
                    <input  value={item.title}  name="floating_email" id="floating_email" readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
        ))}
        </div>
    )
}