
import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import Herocarousel from '@/components/Herocarousel'
const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24'>
      <div className='flex map-xl:flex-col gap-16'>
        <div className='flex flex-col justfy-center'>
          <p className='small-text'>
            Smart Shopping Starts here:
            <Image
            src = "/assets/icons/arrow-right.svg"
            alt = "arrow-right"
            width = {16}
            height = {16}
            />
          </p>
          <h1 className='head-text'>
            Unleash the power of 
            <span className='text-primary'> PriceMap</span>
          </h1>
          <p className='mt-6'>
            Poweful, self-serve product and growth analytics to help you convert, engage and retain more. 
          </p>
          <Searchbar></Searchbar>
        </div>
      
      <Herocarousel></Herocarousel>
      </div>
    </section>
    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='ok flex flex-wrap gap-x-8  gap-y-16'>
        {['Apple Iphone 15','Book','Sneakers'].map
        ((product)=>(
          <div>{product}</div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home