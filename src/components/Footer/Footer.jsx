import React from 'react'
import { logo } from '../../assets'
import { footerLinks, socialMedia } from '../../constants'
import styles from '../../style'

export const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[16.65rem] h-[4.5rem] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[9.375rem]`}>
          <h4 className="font-poppins font-medium text-[1.15rem] leading-[1.6rem] text-white">
            {footerlink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerlink.links.map((link, index) => (
              <li
                key={link.name}
                className={`font-poppins font-normal text-[1rem] leading-[1.5rem] text-dimWhite hover:text-secondary cursor-pointer 
                ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[1.15rem] leading-[1.7rem] text-white'>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) =>(
          <img id={social.id} src={social.icon} alt={social.id}  className={`w-[1.29rem] h-[1.29rem] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" :  "mr-0" }`} onClick={()=> window.open(social.link)}/>
        ))}
        </div>
      </div>
    </section>
  )
}
