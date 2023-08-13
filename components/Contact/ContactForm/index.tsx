"use client"
import { client } from '@/components/client';
import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            {!isFormSubmitted ? (
                <form onSubmit={handleSubmit} className="app__footer-form w-full my-4 lg:w-2/5 flex-col lg:my-4 flex justify-center items-center">
                    <div className="app__flex flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out ">
                        <input className=" rounded-xl w-full p-4 border-none bg-[#edf2f8] text-[#313bac] outline-none p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]" type="text" placeholder="Your Name" name="username" value={username} onChange={e => setFormData(prev => prev = { ...prev, username: e.target.value })} />
                    </div>
                    <div className="app__flex flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out ">
                        <input className="rounded-xl w-full p-4 border-none bg-[#edf2f8] text-[#313bac] outline-none p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]" type="email" placeholder="Your Email" name="email" value={email} onChange={e => setFormData(prev => prev = { ...prev, email: e.target.value })} />
                    </div>
                    <div className='w-full my-3 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out '>
                        <textarea
                            className=" w-full p-4 border-none rounded-lg bg-[#edf2f8] text-[#313bac] outline-none h-44 p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5]"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={e => setFormData(prev => prev = { ...prev, message: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="py-4 px-8 rounded-xl border-none bg-[#313bac] font-semibold text-white outline-none mt-8 cursor-pointer hover:bg-[#2430af] p-text text-sm text-left leading-normal no-underline hover:shadow-[0 0 25px #fef4f5] animate-pulse">{!loading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text text-3xl sm:text-4xl font-bold text-center break-words capitalize">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    )
}

export default ContactForm