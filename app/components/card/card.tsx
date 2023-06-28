import React from 'react';
interface CardProps {
    title: string;
    description: string;
    quantity: number;
    icon: string;
    color: string;
}
const Card: React.FC<CardProps> = ({ title, description, quantity, icon, color }) => {
    return (
        <div className='flex flex-col relative rounded-2xl bg-white border-2'>
            <div className={`flex justify-center ${color} p-4 rounded-t-lg border-b-2`}>
                <div className="block text-2xl text-gray-950 font-bold pb-6">{title}</div>
            </div>
            <div className="flex justify-center items-center absolute z-10 m-auto left-0 right-0 mt-12 w-20 h-20 rounded-full bg-white border border-gray-300">
                <p className="text-2xl text-gray-950 font-bold">{quantity}</p>
            </div>
            <div className='flex p-4 mt-5'>
                <div className='w-60 pr-4'>
                    <svg className="w-20 h-20 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d={icon}/>
                    </svg>
                </div>
                <div>
                    <p className="block text-gray-500">{description}</p> 
                </div>
            </div>
        </div>
    );
};

export default Card;