import React from 'react'
import { clients } from '../../constants'
import styles from '../../style'


export const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[12rem] min-w-[7.5rem] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[12rem] w-[6.3rem] object-contain" />
        </div>
      ))}
    </div>
  </section>
  )
}
