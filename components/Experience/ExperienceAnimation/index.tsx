"use client"
import React from 'react'
import Lottie from "lottie-react";
import reactjs from "../../../public/reactjs.json";

const ExperienceAnimation = () => {
  return (
    <Lottie animationData={reactjs} className="expbg" />
  )
}

export default ExperienceAnimation