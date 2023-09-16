"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import { ImCancelCircle } from 'react-icons/im';

type typeToast = {
    message: string;
    onClose: () => void;
    delay: number;
}

function Toast({ message, onClose, delay }: typeToast) {

    const [progress, setProgress] = useState(100);

    // animate progress bar with transformX.
    useEffect(() => {
        const element = document.getElementById('progress__bar');
        if (element) {
            const timer = setInterval(() => {
                console.log(progress);
                setProgress(prev => prev - 1);
            }, delay / 100); // Divide delay by 100 to adjust the animation speed

            if (progress === 0) {
                clearInterval(timer);
                onClose();
            }

            element.style.transform = `translateX(-${progress}%)`;

            return () => {
                clearInterval(timer);
            };
        }
    }, [delay, progress, onClose])

    return (
        <div className='toast fixed top-3 right-3 shadow-2xl border border-red-500 rounded-lg overflow-hidden'>
            <div className='toast__container rounded-lg bg-color px-6 py-4 relative w-64 '>
                <div
                    onClick={onClose} className='toast__icon absolute right-1 top-2 rounded-full p-2 bg-red-500 hover:bg-red-400 cursor-pointer select-none'>
                    <ImCancelCircle />
                </div>
                <div className='toast__message'>
                    <p className='text-sm font-semibold'>Message: </p>
                    <p className='text-sm mt-2'>{message}</p>
                </div>
            </div>
            <div id='progress__bar' className="progress__bar h-2 bg-red-600 rounded-bl-lg absolute bottom-0 left-0 w-full translate-x-[-100%]"></div>
        </div>
    )
}

export default function useToast(delay: number) {

    const [showToast, setShowToast] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleShowToast = (message: string) => {
        setShowToast(true);
        setMessage(message);
    }

    function Toasty(): ReactNode | null {
        if (!showToast) return null;
        return <Toast message={message} onClose={() => setShowToast(false)} delay={delay} />
    }

    return { handleShowToast, Toasty };
}