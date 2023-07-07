'use client'
import Card from "@/app/components/card/card";
import { Button } from "flowbite-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Home() {
    const t = useTranslations('Index');
    const jsonData = [
        { title: 'Tutte le pratiche',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 15, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-lime-200' },
        { title: 'In Trattativa',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 27, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-violet-200' },
        { title: 'Interne',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 32,  icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-orange-200' },
        { title: 'Respinte', description: 'Sottotilo.', quantity: 12, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-blue-200' },
    ];


    return (
        <div>
            <div className="bg-gray-100 flex flex-row justify-between rounded-lg p-4 m-4 hover:bg-gray-200">
                <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                </svg>
                <div className="flex flex-row items-cemter">
                    <div>
                        <h1 className="text-2xl font-bold">{t("home")}</h1>
                        <p>{t("description")}</p>
                    </div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white m-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-4 ">
                <div className="relative">
                    <input type="search" id="search-dropdown"  placeholder={t("search")} required className="border-2 border-gray-400 rounded-xl p-2 w-110 focus:ring-sky-800 focus:border-sky-800 "/>
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-sky-800 rounded-r-lg border border-sky-800 hover:bg-sky-900 focus:ring-sky-800 focus:border-sky-800  focus:ring-2 focus:outline-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">{t("search")}</span>
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
                    <div className='flex flex-row justify-between'>
                        <svg className="w-12 h-12 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M9 4.025A7.5 7.5 0 1 0 16.975 12H9V4.025Z"/>
                            <path d="M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1Z"/>
                            </g>
                        </svg>
                        <div>
                            <h1 className="text-2xl font-bold">{t("title")}</h1>
                            <p>{t("description")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/viste">{t("viste")}</Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/settings">{t("settings")}</Link>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
                    <div className='flex flex-row justify-between'>
                        <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                        </svg>
                        <div>
                            <h1 className="text-2xl font-bold">{t("title")}</h1>
                            <p>{t("description")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/viste">{t("viste")}</Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/settings">{t("settings")}</Link>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
                    <div className='flex flex-row justify-between'>
                        <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                        </svg>
                        <div>
                            <h1 className="text-2xl font-bold">{t("title")}</h1>
                            <p>{t("description")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/viste">{t("viste")}</Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/settings">{t("settings")}</Link>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
                    <div className='flex flex-row justify-between'>
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                        <div>
                            <h1 className="text-2xl font-bold">{t("title")}</h1>
                            <p>{t("description")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/viste">{t("viste")}</Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="border-b border-gray-400">{t("evidence")}</p>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/">{t("home")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/catalog">{t("catalog")}</Link>
                            <Link  className="block px-4 py-2 hover:bg-gray-100" href="/settings">{t("settings")}</Link>
                    </div>
                </div>
                {/* {jsonData.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} quantity={item.quantity} icon={item.icon} color={item.color}/>
                ))} */}
            </div>
        </div>
    )
}