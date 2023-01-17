import React from 'react'

export const Button = ({ styles }) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[1.15rem] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}
