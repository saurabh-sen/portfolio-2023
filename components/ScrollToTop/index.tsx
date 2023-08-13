"use client"
import React from 'react'
import Lottie from "lottie-react";
import reactjs from "../../public/scrollUp.json";

const ScroolToTop = () => {

    const [showScroll, setShowScroll] = React.useState(false);

    const checkShowScrollTop = () => {
        if (window.pageYOffset > 400) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', checkShowScrollTop)
        return () => {
            window.removeEventListener('scroll', checkShowScrollTop)
        }
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button className={`${showScroll ? "block" : "hidden"} fixed right-5 bottom-4 z-10 bg-[#2eabfb] border-[3px] border-neutral-100 rounded-full w-12 scrolltotop `} onClick={handleScrollToTop} type='button' >
            <Lottie animationData={reactjs} className="expbg" />
        </button>
    )
}

export default ScroolToTop