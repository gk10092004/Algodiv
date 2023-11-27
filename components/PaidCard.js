import React from 'react'
import styles from '/styles/Subscription.css'

const PaidCard = (props) => {
  return (
    <div className="chooseCard">
      <h2 className='chooseType'>{props.head}</h2>
      <p className='chooseCardPara'>{props.para}</p>
      <div className="price">
        <span className="currency">$</span>
        <span className="amount">{props.price}</span>
      </div>
      <div className='discount'>{props.dis}</div>
      <div className="chooseKeyPoint">
        <div className='kp1'>
          <span><img src="/checked.png" alt=""  className='checkedImg'/></span>
          <span className='kpName'>{props.kp1}</span>
        </div>
        <div className='kp1'>
          <span><img src="/checked.png" alt=""  className='checkedImg'/></span>
          <span className='kpName'>{props.kp2}</span>
        </div>
        <div className='kp1'>
          <span><img src="/checked.png" alt=""  className='checkedImg'/></span>
          <span className='kpName'>{props.kp3}</span>
        </div>
        <div className='kp1'>
          <span><img src="/checked.png" alt=""  className='checkedImg'/></span>
          <span className='kpName'>{props.kp4}</span>
        </div>
        <div className='kp1'>
          <span><img src="/checked.png" alt=""  className='checkedImg'/></span>
          <span className='kpName'>{props.kp5}</span>
        </div>
        <div className="kpbtn">{props.btn}</div>
      </div>
    </div>
  )
}

export default PaidCard