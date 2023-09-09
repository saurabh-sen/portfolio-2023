"use client"
import React, { ReactNode } from 'react'
import { ImCancelCircle } from 'react-icons/im';

type typeToast = {
    message: string;
    onClose: () => void;
}

function Toast({ message, onClose }: typeToast) {
    return (
        <div className='toast fixed top-3 right-3'>
            <div className='toast__container bg-color shadow-lg rounded-lg px-6 py-5 flex items-center gap-4 relative w-64'>
                <div
                    onClick={onClose} className='toast__icon absolute right-1 top-2 rounded-full p-2 md:p-3 bg-red-500 hover:bg-red-500 bg-opacity-60 cursor-pointer select-none'>
                    <ImCancelCircle />
                </div>
                <div className='toast__message'>
                    <p className='text-sm font-semibold'>Message: </p>
                    <p className='text-sm'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default function useToast(delay: number) {

    const [showToast, setShowToast] = React.useState(false);

    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, delay);
    }

    function Toasty(): ReactNode | null {
        if (!showToast) return null;
        return <Toast message='Copied to clipboard' onClose={() => setShowToast(false)} />
    }

    return { handleShowToast, Toasty };
}