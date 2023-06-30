import React from 'react';
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    label?: string;
    onClick?:any;
    onSave?:any;
    onCancel?:any;
    toggleEdit?:any;
    editing?: boolean;
}

export const Button = ({ primary = false, backgroundColor, label, ...props }: ButtonProps) => {
    const mode = primary ? 'text-gray-100 bg-sky-800 hover:bg-sky-900 hover:text-white' : 'text-gray-700 bg-white border-2 hover:bg-gray-100';
    return (
        <button
            type="button"
            className={['cursor-pointer rounded-full border-2 font-bold leading-none inline-block font-large text-md px-5 py-2.5', mode].join(' ')}
            {...props}
        >
            {label}
            <style jsx>{`button { background-color: ${backgroundColor}}`}</style>
        </button>
    );
};
