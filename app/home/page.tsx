'use client'
import React from "react";
import { Button } from "../components/button/button";
import Card from "../components/card/card";

export default function Home() {
    const jsonData = [
        { title: 'Tutte le pratiche',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 15, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-lime-200' },
        { title: 'In Trattativa',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 27, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-violet-200' },
        { title: 'Interne',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 32,  icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-orange-200' },
        { title: 'Respinte', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.', quantity: 12, icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z", color:'bg-blue-200' },
    ];

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
            {jsonData.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} quantity={item.quantity} icon={item.icon} color={item.color}/>
            ))}
            <Button primary label='Primary button'/>
            <Button label='Secondary button'/>
        </div>
    )
}