'use client'
import React,{Component} from 'react';
import { ReactDOM } from 'react';
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
 
import'react-responsive-carousel/lib/styles/carousel.min.css';
const heroImages=[
    {imgUrl:'/assets/image/hero-1.svg', alt: 'smartwatch'},
    {imgUrl:'/assets/image/hero-2.svg', alt: 'bag'},
]
const Herocarousel = () => {
  
  return (
    <div className="hero-carousel">
    <Carousel 
    
    showThumbs={false}
    //autoPlay
    infiniteLoop
//interval={2000}
showArrows={false}
showStatus={false}
    >
   
     {heroImages.map((image,index) => (
      <div key={index} >
        <Image 
        src ={image.imgUrl}
        alt ={image.alt}
        width={1200}
        height={600}
        layout='responsive'
        />

        </div>
     ))}
   
    </Carousel>
     </div>
  )
}


export default Herocarousel;