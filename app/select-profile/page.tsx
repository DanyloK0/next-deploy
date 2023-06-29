'use client'
import React from "react";
import { Button } from "../components/button/button";
import { useRouter } from "next/navigation";

const setProfile = (e:any) => {
    const router = useRouter();
    e.preventDefault();
    router.push('/home')
    console.log('set profile');
}

export default function SelectProfile() {
    const jsonData = [
        { title: 'Amministratore'},
        { title: 'Coordinatore'},
        { title: 'Gestore Gruppo'},
        { title: 'Studio Legale'},
    ];

    return (
        <div className="flex flex-col w-48 gap-4">
            <h1> Seleziona Profilo</h1>
            {jsonData.map((item, index) => (
                <Button label={item.title} onClick={setProfile}  key={index}  primary/>
            ))} 
        </div>
    )
}