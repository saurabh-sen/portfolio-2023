"use client"
import React from 'react'
import Lottie from "lottie-react";
import herobg from "../../../public/herobg.json";

const HeroAnimation = () => {
  return (
      <Lottie animationData={herobg} className="herobg" />
  )
}

export default HeroAnimation