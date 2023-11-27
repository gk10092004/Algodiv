import React from 'react'
import Image from 'next/image'

const FeatureCard = (props) => {
  return (
    <div className='featureCard'>
        <Image src={props.pto} alt="" height={100} width={100}  className='featImg'/>
        <h1 className='fcardhead'>{props.Head}</h1>
        <p>{props.Para}</p>
    </div>
  )
}

export default FeatureCard