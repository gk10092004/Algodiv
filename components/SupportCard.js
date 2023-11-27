import React from 'react'
import Image from 'next/image'
import styles from '/styles/page2.css'

const SupportCard = (props) => {
  return (
    <div className="supportCard">
        <div className='suppImg'><Image src={props.logo} alt="" width={30} height={30} /></div>
        <div className='suppContent'>
          <h1 className="suppTytle">{props.title}</h1>
          <p className="suppBody">{props.content}</p>
        </div>
    </div>
  )
}

export default SupportCard