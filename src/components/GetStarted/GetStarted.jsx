import React from 'react'
import styles from '../../style'
import { arrowUp } from '../../assets'


export const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[8.75rem] h-[8.75rem] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[1.125rem] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[1.43rem] h-[1.43rem] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[1.125rem] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  )
}
