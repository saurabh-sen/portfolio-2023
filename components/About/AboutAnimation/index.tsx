"use client"
import React from 'react'
import Lottie from "lottie-react";
import about from "../../../public/about.json";

const AboutAnimation = () => {
  return (
    <Lottie animationData={about} className="aboutbg" />
  )
}

export default AboutAnimation