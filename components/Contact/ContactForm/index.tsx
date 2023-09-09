"use client"
import { client } from '@/components/client';
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

type typeValues = {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function validationSchema() {
        return Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            message: Yup.string().min(10).max(200).required('Message is required')
        })
    };

    async function handleSubmit(values: typeValues) {
        try {
            setLoading(true);
            const contact = {
                _type: 'contact',
                name: values.name,
                email: values.email,
                message: values.message,
            };

            await client.create(contact)

            setLoading(false);
            setIsFormSubmitted(true);
        } catch (error) {
            console.log("error while submitting form",error);
        }
    };

    return (
        <>
            {!isFormSubmitted ? (
                <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema()}
                >
                    {props => {
                        const { values, errors, handleChange, handleBlur, handleSubmit, } = props;
                        const { name: nameError, email: emailError, message: messageError } = errors;

                        const { name, email, message } = values;

                        return <form onSubmit={handleSubmit} className="app__footer-form w-full my-4 lg:w-2/5 lg:my-4 flex flex-col justify-center items-center gap-3">
                            <div className="footer__input w-full">
                                <input className={` rounded-xl w-full p-4 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 focus-within:bg-gray-200 dark:focus-within:bg-gray-700 outline-none p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5] ${nameError && 'border border-red-400'}`} type="text" placeholder="Your Name" name="name" value={name} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    nameError &&
                                    <div className="text-red-500">*{nameError}</div>
                                }
                            </div>
                            <div className="footer__input w-full">
                                <input className={`rounded-xl w-full p-4 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 focus-within:bg-gray-200 dark:focus-within:bg-gray-700 outline-none p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5] ${emailError && 'border border-red-400'} `} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    emailError && (
                                        <div className="text-red-500">*{emailError}</div>
                                    )
                                }
                            </div>
                            <div className='footer__input w-full'>
                                <textarea className={` w-full p-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 focus-within:bg-gray-200 dark:focus-within:bg-gray-700 outline-none h-44 p-text text-sm text-left leading-normal no-underline font-semibold hover:shadow-[0 0 25px #fef4f5] ${messageError && 'border border-red-400'}`} placeholder="Your Message" name="message" value={message} onChange={handleChange} onBlur={handleBlur}
                                />
                                {
                                    messageError && (
                                        <div className="text-red-500">*{messageError}</div>
                                    )
                                }
                            </div>
                            <button type="submit" className="py-4 px-8 rounded-xl border-none bg-[#313bac] font-semibold text-white outline-none mt-8 cursor-pointer hover:bg-[#2430af] p-text text-sm text-left leading-normal no-underline hover:shadow-[0 0 25px #fef4f5] animate-pulse">{!loading ? 'Send Message' : 'Sending...'}</button>
                        </form>
                    }}
                </Formik>
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