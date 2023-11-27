import React from 'react'
import Image from 'next/image'

const CollabCard = (props) => {
  return (
    <div className='colCard'>
        <Image src={props.Img} alt="" width={30} height={30} className='colImg' />
        <span className='colName'>{props.ColName}</span>
    </div>
  )
}

export default CollabCard