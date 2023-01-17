import React from 'react'
import { quotes } from '../../assets'


export const FeedBackCard = ({content, name, tittle, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[1.25rem] max-w-[23.15rem] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[2.65rem] h-[1.7rem] object-contain'  />
      <p className='font-poppins font-normal text-[1.1rem] leading-[2rem] text-white my-10'>
        {content}
      </p>
      <div className='flex flex-row'> 
        <img src={img} alt={name} className='w-[3rem] h-[3rem] rounded-full' />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[1.25rem] leading-[2rem] text-white'>{name}</h4>
          <p className='font-poppins font-semibold text-[1rem] leading-[2rem] text-dimWhite'>{tittle}</p>
        </div>
      </div>
    </div>
  )
}
