'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

interface HeaderProps {
    name: string;
    role: string;
}

const Header: React.FC<HeaderProps> = ({name, role}) => {
        const [isSearchOpen, setSearchOpen] = useState(false);
        const [isLanguageOpen, setLanguageOpen] = useState(false);
        const [isPowerOpen, setPowerOpen] = useState(false);
        const toggleSearch = () => {
            setSearchOpen(!isSearchOpen);
        };
        const toggleLanguage = () => {
            setLanguageOpen(!isLanguageOpen);
        };
        const togglePower = () => {
            setPowerOpen(!isPowerOpen);
        };
    return (
        <nav className="bg-sky-900 h-12 flex flex-wrap items-center justify-between mx-auto">
            <Image
                src="/logo.png"
                width={200}
                height={40}
                alt="Picture of the author"
                className='pl-8'
            />
            {/* <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button> */}
                <ul className="flex flex-row font-medium  mt-4  md:space-x-8 md:mt-0 md:border-0">
                    <li> <a href="/home" className="block py-2  text-gray-300 hover:text-white"  aria-current="page">Home</a> </li>
                    <li> <a href="/activities" className="block py-2 text-gray-300 hover:text-white">Attività</a> </li>
                    <li>
                        <button id="dropdownNavbarSearchButton" onClick={toggleSearch} aria-label='dropdownNavbarSearchButton' data-dropdown-toggle="dropdownNavbarSearchButton" className="flex items-center py-2 text-gray-300  hover:text-white">Ricerca <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                        <div id="dropdownNavbarSearch" className={`z-10 ${isSearchOpen ? 'block' : 'hidden'} font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                <li> <a href="/ricercaPosizioneSolr" className="block px-4 py-2 hover:bg-gray-100">Posizioni</a> </li>
                                <li> <a href="/ricercaPraticaMutuo" className="block px-4 py-2 hover:bg-gray-100 ">Pratiche di mutuo</a> </li>
                                <li> <a href="/ricercaPraticaNoleggioVeicoliSolr" className="block px-4 py-2 hover:bg-gray-100">Pratiche noleggio veicoli</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button id='calendar' aria-label='calendar' className="flex items-center py-2 text-gray-300  hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 hover:text-white" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button id='mail' aria-label='mail' className="flex items-center py-2 text-gray-300  hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </button>
                    </li>
                    <li>
                    <button id='wikipage' aria-label='wikipage' className="flex items-center py-2 text-gray-300  hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                        </button>
                    </li>
                    <li> <a href="/settings" className="block py-2 text-gray-300 hover:text-white"  aria-current="page">{name} | {role}</a> </li>
                    <li>
                        <button id="dropdownNavbarLanguageButton" onClick={toggleLanguage} aria-label='dropdownNavbarLanguageButton' data-dropdown-toggle="dropdownNavbarLanguageButton" className="flex items-center justify-between w-full py-2 pl-3 text-gray-300  hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                        <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                        <div id="dropdownNavbarLanguage" className={`z-10 ${isLanguageOpen ? 'block' : 'hidden'} font-normal absolute right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100">Italiano</a> </li>
                                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100">Inglese</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button id="dropdownNavbarPowerButton" onClick={togglePower} aria-label='dropdownNavbarPowerButton' data-dropdown-toggle="dropdownNavbarPowerButton" className="flex items-center justify-between w-full py-2 pr-4 text-gray-300  hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                            </svg>
                            <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div id="dropdownNavbarPower" className={`z-10 ${isPowerOpen ? 'block' : 'hidden'} font-normal absolute right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li> <a href="/selezioneProfilo" className="block px-4 py-2 hover:bg-gray-100">Cambia utente</a> </li>
                                <li> <a href="modificaPassword" className="block px-4 py-2 hover:bg-gray-100">Modifica password</a> </li>
                                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100">Deleghe</a> </li>
                            </ul>
                            <div className="py-1"> <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a></div>
                        </div>
                    </li>
                </ul>
        </nav>
    );
};

export default Header;

